CHIRP v0.2 - Gnomeville's fictional social network

PUBLISHING
1. Create a PUBLIC repository called chirp under the gnomeville GitHub account.
2. Upload the CONTENTS of this folder to the repository ROOT (index.html, data/, assets/).
3. In repository Settings > Pages, choose Deploy from a branch, branch main, folder /(root), then Save.
4. Site address will be https://gnomeville.github.io/chirp/ after publishing.

IMPORTANT: This is a standalone project site with its own repository, but it shares the gnomeville.github.io domain. No custom domain needed.

CONTENT
- data/chirps.json contains the prewritten Chirps. Add an object with a unique id, who (a key in people.json), text, and optional replies.
- data/people.json contains profiles. Each person can use "avatar" (emoji) OR "image" (relative image file path). Photos, memes, leaves, etc. all work. Upload pictures to assets/avatars/ and set "image": "assets/avatars/name.png".
- Content is re-shuffled on each full page load, with SIMULATED relative timestamps and engagement counts. These are intentionally fictional, not real publishing timestamps.
- Likes/re-chirps persist on the viewer's own browser only. They are NOT shared between visitors. Comments are prewritten and read-only for now.
- All source Chirps remain in the archive JSON. A rotating subset of 12 appears per visit. Character pages show their posts in the current shuffle.

PREVIEWING LOCALLY
Modern browsers often block fetch() from file:// pages. Upload to GitHub Pages for a working preview, or start a local server from this folder: python -m http.server 8000 then visit http://localhost:8000/.

NEXT STEPS
More avatars, expanded profile archives, timeline tuning, optional real posting system later. Keep your original v0.1 ZIP as a separate backup.
