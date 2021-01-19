# @truestamp/truestamp-js

[![workflows](https://github.com/truestamp/truestamp-js/workflows/main/badge.svg?branch=main)](https://github.com/truestamp/truestamp-js/workflows)
[![@truestamp/truestamp-js](https://img.shields.io/npm/v/@truestamp/truestamp-js)](https://www.npmjs.com/package/@truestamp/truestamp-js)
[![gzip size](https://img.badgesize.io/https://unpkg.com/@truestamp/truestamp-js@0.0.3/dist/index.js?compression=gzip&max=25000&softmax=15000)](https://unpkg.com/browse/@truestamp/truestamp-js/)
[![brotli size](https://img.badgesize.io/https://unpkg.com/@truestamp/truestamp-js@0.0.3/dist/index.js?compression=brotli&max=25000&softmax=15000)](https://unpkg.com/browse/@truestamp/truestamp-js/)

## Description

A tiny JavaScript client for the Truestamp API written in Typescript. The library is available in both UMD (browser), and CommonJS (Node.js) forms.

## ALPHA

This software is still in development and is intended to be used by developers invited to create a testing API account. If you'd like to learn more and join the developer program please visit [www.truestamp.com](https://www.truestamp.com).

## Features

- Tiny library size
- No external dependencies
- Works in both Node.js and the browser
- Built-in Typescript support
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

You can use a `<script>` tag in the browser to load the `latest` version of the library:

```html
<script src="https://unpkg.com/@truestamp/truestamp-js"></script>
```

You can pin to a specific version of the library also. e.g.

```html
<script src="https://unpkg.com/browse/@truestamp/truestamp-js@0.0.7"></script>
```

The list of files available for each version can be browsed at [UNPKG](https://unpkg.com/@truestamp/truestamp-js/)

#### Sample HTML

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Truestamp UNPKG</title>
  </head>
  <body>
    <h3>Truestamp library usage demo : UNPKG index.umd.js</h3>
    <p>View the output in the browser Javascript console</p>

    <script src="https://unpkg.com/@truestamp/truestamp-js"></script>
    <script>
      const TruestampClient = new Truestamp({ apiKey: "%apiKey%" })

      TruestampClient.getHeartbeat()
        .then((data) => console.log(data))
        .catch((err) => console.log(err))
    </script>
  </body>
</html>
```
