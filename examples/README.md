# Truestamp JS Examples

## Examples Setup

To run any of the demos you'll need an API key. Create the file `examples/config.json` to match the following JSON structure.

```json
{
  "apiKey": "..."
}
```

## Browser

To test out the browser examples locally you'll need a simple HTTP server that supports CORS. An easy local server to try without any installation is '[serve](https://github.com/vercel/serve)'. You can try it out by running `npm run serve` from the root directory of this repository (not the examples/ directory).

Once the server is running open [http://127.0.0.1:5000/examples/web](http://127.0.0.1:5000/examples/web) in your browser. This example code implements a demo app the utilizes [alpine.js](https://github.com/alpinejs/alpine/) and the UMD build to provide some interactivity, and a simpler example using ES Modules.

## Deno

The `deno/index.ts` file demonstrates simple usage. The source code can be modified to `import` the library from a local build or from a CDN.

You'll need to first install [Deno](https://deno.land/)

`--allow-read` permission is required to read the local config file, and `--allow-net` is required to communicate with the API. The use of `--reload` is optional.

```sh
cd examples/deno
deno run [--reload] --allow-net --allow-read index.ts
```

## Node.js

The `node/index.js` file demonstrates some simple usage. The source code can be modified to `require` the library from a local build or from a CDN.

```sh
cd examples/node
npm install
npm run example
```
