// Truestamp library Node.js usage demo with async/await

// Usage:
//   npm install
//   node ./index.js

// Utility lib for generating hashes
const Hashes = require("jshashes")

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

// Instantiate and configure a client object 't'
const t = new Truestamp({
  apiKey: config.apiKey,
  apiEnv: config.apiEnv
})

async function asyncCall() {
  try {
    console.log(`GET /v1/health`)
    const h = await t.getHealth()
    console.log(h)
  } catch (error) {
    console.error(error)
  }

  let newItem
  try {
    console.log(`POST /v1/items`)
    let now = new Date()
    let nowHash = new Hashes.SHA256().hex(now.toISOString())
    console.log(now.toISOString())
    console.log(nowHash)

    newItem = await t.createItem({
      hash: nowHash,
      hashType: "sha-256",
    })
    console.log(newItem)
  } catch (error) {
    console.error(error)
  }

  try {
    console.log(`GET /v1/items/${newItem.id}`)
    const item = await t.getItem(newItem.id)
    console.log(item)
  } catch (error) {
    console.error(error)
  }

  let updatedItem
  try {
    console.log(`PUT /v1/items/${newItem.id}`)
    let now = new Date()
    let nowHash = new Hashes.SHA256().hex(now.toISOString())
    console.log(now.toISOString())
    console.log(nowHash)

    updatedItem = await t.updateItem(newItem.id, {
      hash: nowHash,
      hashType: "sha-256",
    })
    console.log(updatedItem)
  } catch (error) {
    console.error(error)
  }

  try {
    console.log(`GET /v1/items/${updatedItem.id}`)
    const dr = await t.getItem(updatedItem.id)
    console.log(dr)
  } catch (error) {
    console.error(error)
  }
}

asyncCall()
