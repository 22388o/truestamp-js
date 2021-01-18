# truestamp-js

A tiny UMD and CommonJS client for the Truestamp API written in Typescript.

![@truestamp/truestamp-js](https://img.shields.io/npm/v/@truestamp/truestamp-js)
![gzip size](https://img.badgesize.io/https://unpkg.com/@truestamp/truestamp-js@0.0.3/dist/index.js?compression=gzip&max=25000&softmax=15000)
![brotli size](https://img.badgesize.io/https://unpkg.com/@truestamp/truestamp-js@0.0.3/dist/index.js?compression=brotli&max=25000&softmax=15000)

## ALPHA

This software is still in development and is intended to be used by developers invited to create a testing API account. If you'd like to learn more and join the developer program please visit [www.truestamp.com](https://www.truestamp.com).

## Features

- Tiny browser library size
- No external dependencies
- Works in Node.js and in the Browser
- Built-in Typescript support
- UNPKG CDN support

## Installation

```bash
npm i @truestamp/truestamp-js
```

## API Documentation

[https://docs.truestamp.com/](https://docs.truestamp.com/)

## Usage

Here are some simple examples of the most common forms of usage. Additional examples can be found in the `/examples` dir.

### Node.js Usage

Import the `@truestamp/truestamp-js` module in your project and initialize it with your [apiKey](https://app.truestamp.com).

#### Sample JavaScript

```js
const Truestamp = require("@truestamp/truestamp-js")

const TruestampClient = new Truestamp({ apiKey: "%yourApiKey%" })

TruestampClient.getHeartbeat()
  .then((data) => console.log(data))
  .catch((err) => console.log(err))
```

### Browser Usage

Warning: Do not expose your Truestamp private API key in code shipped to browser clients over the web!

You can use a `<script>` tag in the browser to load the `latest` version of the library:

```html
<script src="https://unpkg.com/@truestamp/truestamp-js"></script>
```

The list of files and versions served by the CDN can be viewed at [https://unpkg.com/@truestamp/truestamp-js/](https://unpkg.com/@truestamp/truestamp-js/)

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
