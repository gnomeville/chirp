#!/usr/bin/env python3
"""Publish at most one preapproved Chirp installment per Chicago Mon/Wed/Fri slot."""
import json
import os
from datetime import datetime
from pathlib import Path
from zoneinfo import ZoneInfo

ROOT = Path(__file__).resolve().parents[1]
QUEUE = ROOT / 'data' / 'approved-story-queue.json'
CHIRPS = ROOT / 'data' / 'chirps.json'
DAYS = {0, 2, 4}  # Monday, Wednesday, Friday

def load(path):
    with path.open(encoding='utf-8') as f:
        return json.load(f)

def main():
    now = datetime.now(ZoneInfo('America/Chicago'))
    if now.weekday() not in DAYS:
        print('Not a scheduled Chicago publishing day.')
        return
    queue = load(QUEUE)
    posts = load(CHIRPS)
    if not isinstance(queue, list) or not isinstance(posts, list):
        raise ValueError('Expected JSON arrays')
    existing = {p['id'] for p in posts}
    candidates = []
    for item in queue:
        if item.get('approval') != 'approved':
            continue
        if not all(isinstance(item.get(k), str) and item[k].strip() for k in ('id','story_id','who','text','not_before')):
            raise ValueError('Approved queue item missing required fields')
        if item['id'] in existing or item['not_before'] > now.date().isoformat():
            continue
        candidates.append(item)
    if not candidates:
        print('No eligible approved installments. No changes.')
        return
    stamp = now.date().isoformat()
    if any(p.get('storyPublishedOn') == stamp for p in posts):
        print('A story installment has already published today.')
        return
    item = sorted(candidates, key=lambda x:(x['not_before'],x['id']))[0]
    people = load(ROOT / 'data' / 'people.json')
    if item['who'] not in people:
        raise ValueError('Unknown Chirp account: '+item['who'])
    new_post = {'id':item['id'],'who':item['who'],'createdAt':now.isoformat(timespec='seconds'),
                'text':item['text'],'replies':[], 'likes':0,'rechirps':0,
                'storyId':item['story_id'],'storyPublishedOn':stamp}
    posts.insert(0,new_post)
    temp = CHIRPS.with_suffix('.json.tmp')
    temp.write_text(json.dumps(posts,ensure_ascii=False,indent=2)+'\n',encoding='utf-8')
    os.replace(temp,CHIRPS)
    print('Published '+item['id'])

if __name__ == '__main__':
    main()
