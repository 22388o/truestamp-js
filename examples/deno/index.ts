//@ts-nocheck

// A simplistic Deno example of using the functions of the Truestamp JS client.

// Load latest ES Module from SkyPack. You should really use a pinned URL!
// See : https://docs.skypack.dev/skypack-cdn/code/optimize-for-production
// import Truestamp from "https://cdn.skypack.dev/@truestamp/truestamp-js?dts"

// Or, load from local lib in development
import Truestamp from "../../dist/truestamp.module.js"

import { createHash } from "https://deno.land/std@0.106.0/hash/mod.ts"

// setup Truestamp client using local config file
const configTxt = await Deno.readTextFile("../config.dev.json")
const config = JSON.parse(configTxt)
const t = new Truestamp(config)

// check for health
try {
  const h = await t.getHealth()
  console.log(h)
} catch (error) {
  console.error(error)
}

// submit a new item
const now = new Date()
const nowHasher = createHash("sha256")
nowHasher.update(now.toISOString())
const nowHashHex = nowHasher.toString("hex")

let newItem
try {
  newItem = await t.createItem({
    hash: nowHashHex,
    hashType: "sha-256"
  })
  console.log(newItem)
} catch (error) {
  console.error(error)
}

if (!newItem) {
  console.log("No new item created")
  Deno.exit(1)
}

// retrieve item
try {
  const newItemRetrieved = await t.getItem(newItem.id)
  console.log(newItemRetrieved)
} catch (error) {
  console.error(error)
}

// update item
const later = new Date()
const laterHasher = createHash("sha256")
laterHasher.update(later.toISOString())
const laterHashHex = laterHasher.toString("hex")

try {
  const updatedItem = await t.updateItem(newItem.id, {
    hash: laterHashHex,
    hashType: "sha-256",
  })
  console.log(updatedItem)
} catch (error) {
  console.error(error)
}
