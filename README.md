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

Run both in parallel (two terminals):

    npm run dev    # rebuilds dist/ on source changes
    npm run start  # launches Firefox with the extension, reloads on dist/ changes

# Build

    npm run format
    npm run lint
    npm run lint:ext
    npm run typecheck
    npm run test
    npm run build

# Build/Deploy

Set your AMO API key/secret in `.env` (see `.env.example`):

    npm run sign
