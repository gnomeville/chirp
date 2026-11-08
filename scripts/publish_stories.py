#!/usr/bin/env python3
"""Publish all due preapproved Chirps, preserving existing posts and reactions."""
import json
import os
from datetime import datetime
from pathlib import Path
from zoneinfo import ZoneInfo

ROOT=Path(__file__).resolve().parents[1]
QUEUE=ROOT/'data/approved-story-queue.json'
CHIRPS=ROOT/'data/chirps.json'
TZ=ZoneInfo('America/Chicago')

def load(path):
    return json.loads(path.read_text(encoding='utf-8'))

def main():
    now=datetime.now(TZ)
    queue=load(QUEUE)
    posts=load(CHIRPS)
    people=load(ROOT/'data/people.json')
    if not isinstance(queue,list) or not isinstance(posts,list):
        raise ValueError('Queue and Chirps must be arrays')
    existing={p['id'] for p in posts}
    due=[]
    for item in queue:
        if item.get('approval')!='approved':
            continue
        for key in ('id','story_id','who','text','not_before'):
            if not isinstance(item.get(key),str) or not item[key].strip():
                raise ValueError('Invalid approved item: '+key)
        if item['who'] not in people:
            raise ValueError('Unknown account: '+item['who'])
        if item['id'] not in existing and item['not_before']<=now.date().isoformat():
            due.append(item)
    # Only one post per storyline per day; allow multiple independent streams.
    chosen=[]
    stories=set()
    for item in sorted(due,key=lambda p:(p['not_before'],p['id'])):
        if item['story_id'] in stories:
            continue
        stories.add(item['story_id'])
        chosen.append(item)
    if not chosen:
        print('No due approved posts.')
        return
    # Schedule stamps are actual publication time; avoid backdating content.
    for item in chosen:
        post={'id':item['id'],'who':item['who'],'createdAt':now.isoformat(timespec='seconds'),
              'text':item['text'],'replies':[],'likes':0,'rechirps':0,
              'storyId':item['story_id'],'storyPublishedOn':now.date().isoformat()}
        posts.insert(0,post)
        print('Published '+item['id'])
    temp=CHIRPS.with_suffix('.json.tmp')
    temp.write_text(json.dumps(posts,ensure_ascii=False,indent=2)+'\n',encoding='utf-8')
    os.replace(temp,CHIRPS)

if __name__=='__main__':
    main()
