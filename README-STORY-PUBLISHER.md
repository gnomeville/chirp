# Chirp approved-story autopublisher v1.0

Target repository: `gnomeville/chirp`, default branch `main`.

The workflow and script publish **multiple** preapproved installment on Monday, Wednesday, and Friday in `America/Chicago`. GitHub Actions checks daily at 18:17 UTC; execution may be delayed. Existing `index.html`, `data/chirps.json`, and `data/people.json` are preserved.

## Adding a preapproved batch

Edit `data/approved-story-queue.json` with an array of items shaped like:

```json
{
  "id": "unique-immutable-chirp-id",
  "story_id": "unique-storyline-id",
  "who": "existing-key-from-data/people.json",
  "text": "The exact approved Chirp text",
  "not_before": "2026-11-09",
  "approval": "approved"
}
```

The queue currently contains 26 explicitly approved Chirps, dated November 9 through December 9, 2026. Multiple independent storylines may publish on the same day. The workflow runs once daily, so those posts will appear together rather than at individually staggered hours. Tony's four promotions are scheduled for Fridays. The publisher does not yet automatically create new weekly promotions after this batch ends.\n\nOnly place explicitly approved, public-safe text in this queue. This is a **public repository**, so queue entries are visible even before they publish. Keep private drafts, secrets, and disputed canon in Notion. Items are ordered by `not_before` then `id`. Assign dates to preserve story order. The system does not generate new text or canon. Empty queue means no publishing.

## Safeguards and checks

- Validate characters and approved text against Notion canon and `data/people.json`.
- Keep immutable unique post IDs; the script avoids publishing an existing ID twice.
- Manual runs obey weekday and one-per-day limits.
- Confirm GitHub Actions is enabled and its workflow has permission to write repository contents.
- Test a scheduled or manual eligible run after adding an approved item; inspect the new entry in `data/chirps.json` and the live feed.
- Confirm replies, profiles, search, and GnomeNet search still work.
- Pause by disabling the workflow or emptying the queue.

**Status:** Workflow installed; queue intentionally empty pending editorial approval. No story installment has been published by this workflow yet.

## Engagement display

Scheduled story posts receive stable, post-specific fictional starting likes, rechirps and views, calculated client-side from post ID and account. These are **fictional presentation numbers**, not real analytics or server-synchronized activity. Existing posts retain their existing engagement behavior. Each visitor's like and rechirp toggles continue to use localStorage, so visitor interactions do not synchronize across browsers. Genuine reply data remains untouched. To add shared real engagement in the future, a persistent backend and abuse controls are required.
