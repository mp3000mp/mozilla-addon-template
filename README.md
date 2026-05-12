# Mozilla Addon Template

A minimal Firefox WebExtension template (Vite + TypeScript).

[![CI](https://github.com/mp3000mp/mozilla-addon-template/actions/workflows/ci.yml/badge.svg)](https://github.com/mp3000mp/mozilla-addon-template/actions/workflows/ci.yml)
[![Coverage](https://codecov.io/gh/mp3000mp/mozilla-addon-template/branch/main/graph/badge.svg)](https://codecov.io/gh/mp3000mp/mozilla-addon-template)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](./LICENSE)
[![Node](https://img.shields.io/badge/node-%3E%3D22-brightgreen.svg)](https://nodejs.org/)

## Requirements

- Node 22+ (see `.nvmrc`)

```
Mozilla account with api key
npm install --global web-ext
```

## Dev

Run both in parallel (two terminals):

    npm run dev    # rebuilds dist/ on source changes
    npm run start  # launches Firefox with the extension, reloads on dist/ changes

## Build

    npm run format
    npm run lint
    npm run typecheck
    npm run test
    npm run build
    npm run lint:ext

## Deploy

Set your AMO API key/secret in `.env` (see `.env.example`):

    npm run sign

## License

[MIT](LICENSE)
