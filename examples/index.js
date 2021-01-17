// Truestamp library usage demo : CommonJS (Node.js)
// Usage: `node ./index.js`

const Truestamp = require("../dist/index.js")

const TruestampClient = new Truestamp({ apiKey: "%yourApiKey%" })

TruestampClient.getHeartbeat()
  .then((data) => console.log(data))
  .catch((err) => console.log(err))
