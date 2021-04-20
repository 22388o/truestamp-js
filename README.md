# @truestamp/truestamp-js

[![@truestamp/truestamp-js](https://snyk.io/advisor/npm-package/@truestamp/truestamp-js/badge.svg)](https://snyk.io/advisor/npm-package/@truestamp/truestamp-js)
[![actions](https://github.com/truestamp/truestamp-js/workflows/main/badge.svg?branch=main)](https://github.com/truestamp/truestamp-js/actions)
[![@truestamp/truestamp-js](https://img.shields.io/npm/v/@truestamp/truestamp-js)](https://www.npmjs.com/package/@truestamp/truestamp-js)
[![gzip size](https://img.badgesize.io/https://unpkg.com/@truestamp/truestamp-js@0.0.12/dist/index.js?compression=gzip&max=25000&softmax=15000)](https://unpkg.com/browse/@truestamp/truestamp-js/)
[![brotli size](https://img.badgesize.io/https://unpkg.com/@truestamp/truestamp-js@0.0.12/dist/index.js?compression=brotli&max=25000&softmax=15000)](https://unpkg.com/browse/@truestamp/truestamp-js/)

## Description

A tiny JavaScript client for the Truestamp API written in Typescript. The library is available in both UMD (browser), and CommonJS (Node.js) forms.

## EXPERIMENTAL

This software is still in development and is intended to be used by developers invited to create a Truestamp test account. If you'd like to learn more, or join the developer program, please visit [www.truestamp.com](https://www.truestamp.com).

## Features

- Tiny library size
- No external dependencies
- Built with Typescript
- Promise based API
- Supports Deno (ESM), Node.js (CommonJS), and modern browsers (ESM, UMD)
- [SkyPack CDN](https://www.skypack.dev/view/@truestamp/truestamp-js) support
- [JSDELIVR CDN](https://www.jsdelivr.com/package/npm/@truestamp/truestamp-js) support
- [UNPKG CDN](https://unpkg.com/browse/@truestamp/truestamp-js/) support

## API Documentation

[https://docs.truestamp.com/](https://docs.truestamp.com/)

## Usage

Here are some simple usage examples. Additional example code can be found in the `/examples` directory.

### Node.js (CommonJS)

#### Setup Node.js

In your NPM project directory.

```bash
npm install @truestamp/truestamp-js --save
```

Require the `@truestamp/truestamp-js` CommonJS module in your project and initialize it with your [apiKey](https://app.truestamp.com).

#### Node.js Example

```js
const Truestamp = require("@truestamp/truestamp-js")

const TruestampClient = new Truestamp({ apiKey: "%yourApiKey%" })

TruestampClient.getHeartbeat()
  .then((data) => console.log(data))
  .catch((err) => console.log(err))
```

### Deno (ES Modules)

[Deno](https://deno.land/) is a simple, modern and secure runtime for JavaScript and TypeScript that uses V8 and is built in Rust.

#### Setup Deno

Import the `@truestamp/truestamp-js` ESM module in your project via [SkyPack](https://www.skypack.dev) and initialize it with your [apiKey](https://app.truestamp.com).

SkyPack Package Info

[https://www.skypack.dev/view/@truestamp/truestamp-js](https://www.skypack.dev/view/@truestamp/truestamp-js)

It is recommended to used a [pinned version](https://docs.skypack.dev/skypack-cdn/code/optimize-for-production) of the library when using SkyPack in production. Also, note the `?dts` suffix on the URL to get the [SkyPack Automatic TypeScript Declarations](https://docs.skypack.dev/skypack-cdn/code/deno) for Deno.

#### Deno Example

```typescript
// Note the `?dts` param to provide the proper typings for Deno
import Truestamp from "https://cdn.skypack.dev/@truestamp/truestamp-js?dts"

const TruestampClient = new Truestamp({
  apiKey: "%yourApiKey%",
})

const hb = await TruestampClient.getHeartbeat()
console.log(hb)
```

### Browser (UMD)

Warning: Do not expose your Truestamp private API key in code shipped to browser clients over the web!

You can use a `<script>` tag in the browser to load a specific version of the library from several supported CDN's. Replace the pinned version in the link with the version you use in your app. You can use ESM modules or the UMD build for browser support.

```html
<!-- JSDELIVR UMD -->
<script src="https://cdn.jsdelivr.net/npm/@truestamp/truestamp-js@0.0.12/dist/index.umd.min.js"></script>
```

```html
<!-- UNPKG UMD -->
<script src="https://unpkg.com/browse/@truestamp/truestamp-js@0.0.12"></script>
```

The list of files available for each version can be browsed at [UNPKG](https://unpkg.com/@truestamp/truestamp-js/)

### Example Code

There are working code examples for Deno, Node.js, and Web in the [/examples](/examples) directory. Take a look at the [examples/README.md](examples/README.md) for usage instructions.

## Development & Release

Pushes and pull requests to the `main` branch will be automatically tested and pushed to npmjs.org using Github Actions. Only passing tests will result in a new release.

Commit messages with leading `BREAKING CHANGE` will result in major version bump.

Commit messages with leading `feat` or `feature` will result in minor version bump.

All other commits will result in a patch version bump only.

## Thanks

[https://github.com/ilyamkin/dev-to-js](https://github.com/ilyamkin/dev-to-js)

[https://medium.com/better-programming/how-to-build-an-api-client-library-in-javascript-665df869bdd5](https://medium.com/better-programming/how-to-build-an-api-client-library-in-javascript-665df869bdd5)
