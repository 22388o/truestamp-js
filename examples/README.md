# Truestamp JavaScript SDK Examples

## Examples Setup

Create the file `examples/config.js` to match the following structure. You'll need an active API key to run these tests.

```
{
    "apiKey": "...",
    "basePath": "https://api.truestamp.com/v1/"
}
```

## Browser

This setup assumes can run the [http-server](https://github.com/http-party/http-server) package locally using one of the provided installation methods. You can use any similar local HTTP server that provides automatic `CORS` support.

```sh
# Install the server
brew install http-server

# From the root of this repository (not in the `examples` dir) run:
http-server --cors
```

- Open [http://127.0.0.1:8080/examples/](http://127.0.0.1:8080/examples/)
- paste a copy of your Truestamp API key into the `apiKey` field at the top of the page and explore the examples.

## Node.js

The `example.js` file contains some simple sample usage.

```
cd examples/
node ./example.js
```
