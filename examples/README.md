# Truestamp JS Examples

## Examples Setup

For all of the demo's you'll currently need an API key. Create the file `examples/config.json` to match the following JSON structure.

```json
{
  "apiKey": "..."
}
```

## Browser

To test out the browser example locally you'll need a simple local HTTP server that supports CORS. An easy local server to try without any installation is '[serve](https://github.com/vercel/serve)'.

```sh
❯ npx serve --cors

   ┌──────────────────────────────────────────────────┐
   │                                                  │
   │   Serving!                                       │
   │                                                  │
   │   - Local:            http://localhost:5000      │
   │   - On Your Network:  http://192.168.7.55:5000   │
   │                                                  │
   │   Copied local address to clipboard!             │
   │                                                  │
   └──────────────────────────────────────────────────┘
```

Once the server is running open [http://127.0.0.1:5000/examples/web](http://127.0.0.1:5000/examples/web). This example code implements a pared down app the utilizes [alpine.js](https://github.com/alpinejs/alpine/) to provide some interactivity.

## Deno

The `deno/index.ts` file demonstrates some simple usage.

You'll need to first install [Deno](https://deno.land/)

`--allow-read` permission is required to read the local config file, and `--allow-net` is required to communicate with the API.

```sh
cd examples/deno
deno run --allow-net --allow-read index.ts
```

## Node.js

The `node/index.js` file demonstrates some simple usage.

```sh
cd examples/node
npm install
npm run example
```
