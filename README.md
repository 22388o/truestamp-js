# Truestamp JS

[![@truestamp/truestamp-js](https://snyk.io/advisor/npm-package/@truestamp/truestamp-js/badge.svg)](https://snyk.io/advisor/npm-package/@truestamp/truestamp-js)
[![actions](https://github.com/truestamp/truestamp-js/workflows/main/badge.svg?branch=main)](https://github.com/truestamp/truestamp-js/actions)
[![@truestamp/truestamp-js](https://img.shields.io/npm/v/@truestamp/truestamp-js)](https://www.npmjs.com/package/@truestamp/truestamp-js)
[![jsDelivr](https://data.jsdelivr.com/v1/package/npm/@truestamp/truestamp-js/badge)](https://www.jsdelivr.com/package/npm/@truestamp/truestamp-js)

## Description

A tiny zero-dependency Truestamp SDK written in Typescript that supports ES Modules, UMD, and CommonJS loaders and runs in Deno, Node.js, and modern browsers.

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

Require the `@truestamp/truestamp-js` CommonJS module in your project and initialize it with your [accessToken](https://app.truestamp.com).

#### Node.js Example

```js
const Truestamp = require("@truestamp/truestamp-js")

const TruestampClient = new Truestamp({ accessToken: "%yourAccessToken%" })

TruestampClient.getHeartbeat()
  .then((data) => console.log(data))
  .catch((err) => console.log(err))
```

### Deno (ES Modules)

[Deno](https://deno.land/) is a simple, modern and secure runtime for JavaScript and TypeScript that uses V8 and is built in Rust.

#### Setup Deno

Import the `@truestamp/truestamp-js` ESM module in your project via [SkyPack](https://www.skypack.dev) and initialize it with your [accessToken](https://app.truestamp.com).

SkyPack Package Info

[https://www.skypack.dev/view/@truestamp/truestamp-js](https://www.skypack.dev/view/@truestamp/truestamp-js)

It is recommended to used a [pinned version](https://docs.skypack.dev/skypack-cdn/code/optimize-for-production) of the library when using SkyPack in production. Also, note the `?dts` suffix on the URL to get the [SkyPack Automatic TypeScript Declarations](https://docs.skypack.dev/skypack-cdn/code/deno) for Deno.

#### Deno Example

```typescript
// Note the `?dts` param to provide the proper typings for Deno
import Truestamp from "https://cdn.skypack.dev/@truestamp/truestamp-js?dts"

const TruestampClient = new Truestamp({
  accessToken: "%yourAccessToken%",
})

const hb = await TruestampClient.getHeartbeat()
console.log(hb)
```

### Browser (UMD)

Warning: Do not expose your Truestamp access token in code shipped to browser clients over the web!

You can use a `<script>` tag in the browser to load a specific version of the library from several supported CDN's. Replace the pinned version in the link with the version you use in your app. You can use the ES Modules or UMD builds for browser support.

```html
<!-- load from JSDELIVR CDN latest (using latest not recommended for production use, pin a version) -->
<!-- See : https://www.jsdelivr.com/package/npm/@truestamp/truestamp-js -->
<script src="https://cdn.jsdelivr.net/npm/@truestamp/truestamp-js@latest/dist/truestamp.umd.min.js"></script>
```

The JS files available for each version can be browsed at [JSDELIVR](https://www.jsdelivr.com/package/npm/@truestamp/truestamp-js)

```html
<!-- load from UNPKG CDN latest (using latest not recommended for production use, pin a version) -->
<!-- See : https://unpkg.com/browse/@truestamp/truestamp-js/ -->
<script src="https://unpkg.com/@truestamp/truestamp-js"></script>
```

### Example Code

There are working code examples for Deno, Node.js, and the Web in the [/examples](/examples) directory. Take a look at the [examples/README.md](examples/README.md) for usage instructions.

## Contributing

We'd love you to join our network of contributors. Please read [CONTRIBUTING.md](CONTRIBUTING.md) for help getting started.

## Code of Conduct

We expect all members of the community to respect our [Code of Conduct](CODE_OF_CONDUCT.md) at all times.

## Thanks

[https://github.com/ilyamkin/dev-to-js](https://github.com/ilyamkin/dev-to-js)

[https://medium.com/better-programming/how-to-build-an-api-client-library-in-javascript-665df869bdd5](https://medium.com/better-programming/how-to-build-an-api-client-library-in-javascript-665df869bdd5)
