# Chirp Composer staging

This branch deploys the Composer Worker to `gnomeville-chirp-publisher-test` using `composer/wrangler.toml`.

The production Composer Worker is not deployed from this branch. Verify Cloudflare build results and environment secrets before testing authenticated publishing. Publishing logic currently writes to `main`, so staging tests must not publish test Chirps without a separate test target.
