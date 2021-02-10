# @truestamp/truestamp-js

[![actions](https://github.com/truestamp/truestamp-js/workflows/main/badge.svg?branch=main)](https://github.com/truestamp/truestamp-js/actions)
[![jsdelivr](https://data.jsdelivr.com/v1/package/npm/@truestamp/truestamp-js/badge)](https://www.jsdelivr.com/package/npm/@truestamp/truestamp-js)
[![@truestamp/truestamp-js](https://img.shields.io/npm/v/@truestamp/truestamp-js)](https://www.npmjs.com/package/@truestamp/truestamp-js)
[![gzip size](https://img.badgesize.io/https://unpkg.com/@truestamp/truestamp-js@0.0.9/dist/index.js?compression=gzip&max=25000&softmax=15000)](https://unpkg.com/browse/@truestamp/truestamp-js/)
[![brotli size](https://img.badgesize.io/https://unpkg.com/@truestamp/truestamp-js@0.0.9/dist/index.js?compression=brotli&max=25000&softmax=15000)](https://unpkg.com/browse/@truestamp/truestamp-js/)

## Description

A tiny JavaScript client for the Truestamp API written in Typescript. The library is available in both UMD (browser), and CommonJS (Node.js) forms.

## EXPERIMENTAL

This software is still in development and is intended to be used by developers invited to create a Truestamp test account. If you'd like to learn more, or join the developer program, please visit [www.truestamp.com](https://www.truestamp.com).

## Features

- Tiny library size
- No external dependencies
- Works in both Node.js and the browser
- Built-in Typescript support
- [JSDELIVR CDN](https://www.jsdelivr.com/package/npm/@truestamp/truestamp-js) support
- [UNPKG CDN](https://unpkg.com/browse/@truestamp/truestamp-js/) support

## API Documentation

[https://docs.truestamp.com/](https://docs.truestamp.com/)

## Usage

Here are some simple examples of the most common forms of usage. Additional examples may be found in the `/examples` dir.

### With Node.js (CommonJS)

#### Installation

```bash
npm i @truestamp/truestamp-js
```

Require the `@truestamp/truestamp-js` module in your project and initialize it with your [apiKey](https://app.truestamp.com).

#### Sample JavaScript

```js
const Truestamp = require("@truestamp/truestamp-js")

const TruestampClient = new Truestamp({ apiKey: "%yourApiKey%" })

TruestampClient.getHeartbeat()
  .then((data) => console.log(data))
  .catch((err) => console.log(err))
```

### In the Browser (UMD)

Warning: Do not expose your Truestamp private API key in code shipped to browser clients over the web!

You can use a `<script>` tag in the browser to load a specific version of the library from several supported CDN's. Replace the pinned version in the link with the version you use in your app.

```html
<!-- JSDELIVR -->
<script src="https://cdn.jsdelivr.net/npm/@truestamp/truestamp-js@0.0.9/dist/index.umd.min.js"></script>
```

```html
<!-- UNPKG -->
<script src="https://unpkg.com/browse/@truestamp/truestamp-js@0.0.9"></script>
```

The list of files available for each version can be browsed at [UNPKG](https://unpkg.com/@truestamp/truestamp-js/)

### Examples

There are simple working examples of the usage of this library in the [/examples](/examples) directory. Checkout the [README.md](examples/README.md) for usage instructions.

## Thanks

https://github.com/ilyamkin/dev-to-js
https://medium.com/better-programming/how-to-build-an-api-client-library-in-javascript-665df869bdd5
