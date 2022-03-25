const crypto = require("crypto")

// Remote lib via npm
// const Truestamp = require("@truestamp/truestamp-js")

// Local lib (must run 'npm run build' in root dir on each change)
const Truestamp = require("../../dist/truestamp.cjs")

// Create the 'examples/config.json' file, with this structure, to get started.
//
// {
//   "apiKey": "...",
//   "apiEnv": "development"
// }
// const config = require("../config.json")
const config = require("../config.dev.json")

const tsc = new Truestamp({
  apiKey: config.apiKey,
  apiEnv: config.apiEnv,
})

const createItemWithMessage = async (msg) => {
  let newItem

  const msgHash = crypto.createHash("sha256").update(msg).digest("hex")

  try {
    newItem = await tsc.createItem({
      hash: msgHash,
      hashType: "sha-256",
    })
  } catch (error) {
    console.error(error)
  }

  return newItem
}

createItemWithMessage("Truestamp rocks!")
  .then((itemEnvelope) => {
    console.log(JSON.stringify(itemEnvelope, null, 2))
  })
  .catch((error) => {
    console.error(error)
  })

const getHealth = async () => {
  let health
  try {
    health = await tsc.getHealth()
  } catch (error) {
    console.error(error)
  }

  return health
}

getHealth()
  .then((h) => {
    console.log(JSON.stringify(h, null, 2))
  })
  .catch((error) => {
    console.error(error)
  })
