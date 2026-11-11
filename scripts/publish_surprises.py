#!/usr/bin/env python3
"""Release approved one-off Chirps on occasional unpredictable Chicago dates.

No generation, no second approval, no release schedule exposed in the feed.
"""
import hashlib
import json
import os
from datetime import datetime, date, timedelta
from pathlib import Path
from zoneinfo import ZoneInfo

ROOT = Path(__file__).resolve().parents[1]
QUEUE = ROOT / 'data' / 'surprise-reserve.json'
CHIRPS = ROOT / 'data' / 'chirps.json'
PEOPLE = ROOT / 'data' / 'people.json'
TZ = ZoneInfo('America/Chicago')

def read(path):
    return json.loads(path.read_text(encoding='utf-8'))

def score(value):
    return int(hashlib.sha256(value.encode('utf-8')).hexdigest()[:12], 16)

def select(queue, posts, now):
    today = now.date()
    week_start = today - timedelta(days=today.weekday())
    existing = {p.get('id') for p in posts}
    # A reserve post may appear no earlier than 7 days after approval.
    eligible = []
    for item in queue:
        if item.get('approval') != 'approved':
            continue
        for key in ('id', 'who', 'text', 'approved_on'):
            if not isinstance(item.get(key), str) or not item[key].strip():
                raise ValueError('Approved surprise is missing ' + key)
        approved = date.fromisoformat(item['approved_on'])
        if item['id'] not in existing and today >= approved + timedelta(days=7):
            eligible.append(item)
    if not eligible:
        return None
    # Cap at two per Chicago calendar week, including manual reruns.
    published = [p for p in posts if p.get('surpriseReserve') is True]
    published_this_week = 0
    for p in published:
        try:
            day = datetime.fromisoformat(p['createdAt']).astimezone(TZ).date()
        except (KeyError, ValueError):
            continue
        if day >= week_start and day <= today:
            published_this_week += 1
        if day == today:
            return None
    if published_this_week >= 2:
        return None
    # Deterministic per day: reruns cannot roll for another chance.
    # About two opportunities per week; not a guarantee of weekly publication.
    if score('gnomeville-reserve-day-v1|' + today.isoformat()) % 7 >= 2:
        return None
    return min(eligible, key=lambda p: (score('gnomeville-reserve-item-v1|' + today.isoformat() + '|' + p['id']), p['id']))

def main():
    now = datetime.now(TZ)
    queue, posts, people = read(QUEUE), read(CHIRPS), read(PEOPLE)
    if not isinstance(queue, list) or not isinstance(posts, list):
        raise ValueError('Reserve and Chirps must be arrays')
    if len({p.get('id') for p in queue}) != len(queue):
        raise ValueError('Duplicate reserve ID')
    item = select(queue, posts, now)
    if item is None:
        print('No surprise released today.')
        return
    if item['who'] not in people:
        raise ValueError('Unknown Chirp account: ' + item['who'])
    post = {
        'id': item['id'], 'who': item['who'],
        'createdAt': now.isoformat(timespec='seconds'),
        'text': item['text'], 'replies': [], 'likes': 0, 'rechirps': 0,
        'storyId': 'surprise-reserve', 'surpriseReserve': True
    }
    posts.insert(0, post)
    temp = CHIRPS.with_suffix('.json.tmp')
    temp.write_text(json.dumps(posts, ensure_ascii=False, indent=2) + '\n', encoding='utf-8')
    os.replace(temp, CHIRPS)
    print('Published one approved surprise: ' + item['id'])

if __name__ == '__main__':
    main()
