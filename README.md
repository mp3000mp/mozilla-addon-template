[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](./LICENSE)
[![Node](https://img.shields.io/badge/node-%3E%3D22-brightgreen.svg)](https://nodejs.org/)

A minimal Firefox WebExtension template (Vite + TypeScript).

# Requirements

- Node 22+ (see `.nvmrc`)

```
Mozilla account with api key
npm install --global web-ext
```

# Dev

    npm run dev

# Build

    npm run typecheck
    npm run build
    npm run lint

_Note: to test the build, open firefox and go to about:debugging#/runtime/this-firefox.
Then load the unpacked extension from `dist/`._

# Build/Deploy

Set your AMO API key/secret in `.env` (see `.env.example`):

    npm run sign
