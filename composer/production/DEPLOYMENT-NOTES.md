# Chirp Composer production deployment

Production Worker: `gnomeville-chirp-publisher`

Deploy config: `composer/production/wrangler.toml`

Deploy command: `npx wrangler deploy --config composer/production/wrangler.toml`

Production source: `composer/review/worker.js` (reviewed candidate)

This commit initiates the first Cloudflare Git-connected production build. Confirm build logs, Worker bindings, authentication, and publication behavior before marking the upgrade complete. Staging remains separate.
