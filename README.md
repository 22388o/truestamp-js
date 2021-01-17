<h1 align="center">
truestamp-js
</h1>

<p align="center">
A tiny UMD and CommonJS client for the Truestamp API written in Typescript.
</p>

<!-- <div>
<a href="https://www.npmjs.com/package/dev-to-js"><img src="https://img.shields.io/npm/v/dev-to-js" alt="dev-to-js"></a>
<a href="https://unpkg.com/dev-to-js"><img src="https://img.badgesize.io/https://unpkg.com/dev-to-js@0.1.1/dist/index.js?compression=gzip" alt="gzip size"></a>
<a href="https://unpkg.com/dev-to-js"><img src="https://img.badgesize.io/https://unpkg.com/dev-to-js@0.1.1/dist/index.js?compression=brotli" alt="brotli size"></a>
</div> -->

## ✨ Features:

- Tiny <5 Kb browser library size
- Works in Node.js and in the Browser
- Built-in Typescript support
- No external dependencies
- UNPKG CDN support

## 🔧 Installation

```bash
npm i @truestamp/truestamp-js
```

## 🌐 Usage

### Node.js

Import the `@truestamp/truestamp-js` module in your project and initialize it with your [apiKey](https://app.truestamp.com).

```js
const Truestamp = require("@truestamp/truestamp-js")

const TruestampClient = new Truestamp({ apiKey: "%yourApiKey%" })

TruestampClient.getHeartbeat()
  .then((data) => console.log(data))
  .catch((err) => console.log(err))
```

### Browser

Warning: Do not embed your private API key in code shipped to browser clients over the web!

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Truestamp library</title>
  </head>
  <body>
    <h1>Truestamp library usage demo : index.umd.js</h1>
    <p>View the output in the browser Javascript console</p>

    <script src="https://unpkg.com/@truestamp/truestamp-js"></script>
    <script>
      const TruestampClient = new window.Truestamp({ apiKey: "%apiKey%" })

      TruestampClient.getHeartbeat()
        .then((data) => console.log(data))
        .catch((err) => console.log(err))
    </script>
  </body>
</html>
```
