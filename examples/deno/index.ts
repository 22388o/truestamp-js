//@ts-nocheck

// A simplistic Deno example of using the functions of the Truestamp JS client.

// Load latest ES Module from SkyPack. You should really use a pinned URL!
// See : https://docs.skypack.dev/skypack-cdn/code/optimize-for-production
// import Truestamp from "https://cdn.skypack.dev/@truestamp/truestamp-js?dts"

// Or, load from local lib in development
import Truestamp from "../../dist/truestamp.module.js"

import { createHash } from "https://deno.land/std@0.106.0/hash/mod.ts"

// setup Truestamp client using local config file
const configTxt = await Deno.readTextFile("../config.json")
const config = JSON.parse(configTxt)
const t = new Truestamp(config)

// check for health
try {
  const h = await t.getHealth()
  console.log(h)
} catch (error) {
  console.error(error)
}

// submit a new document
const now = new Date()
const nowHasher = createHash("sha256")
nowHasher.update(now.toISOString())
const nowHashBase64 = nowHasher.toString("base64")

let newDoc
try {
  newDoc = await t.createDocument({
    hash: nowHashBase64,
    name: "sha2-256",
  })
  console.log(newDoc)
} catch (error) {
  console.error(error)
}

if (!newDoc) {
  console.log("No new document created")
  Deno.exit(1)
}

// retrieve document
try {
  const newDocRetrieved = await t.getDocument(newDoc.id)
  console.log(newDocRetrieved)
} catch (error) {
  console.error(error)
}

// list all documents owned by this user
// try {
//   const allDocs = await t.getAllDocuments({ start: "2021-04-21" })
//   console.log(allDocs)
// } catch (error) {
//   console.error(error)
// }

// update document
const later = new Date()
const laterHasher = createHash("sha256")
laterHasher.update(later.toISOString())
const laterHashBase64 = laterHasher.toString("base64")

try {
  const updatedDoc = await t.updateDocument(newDoc.id, {
    hash: laterHashBase64,
    name: "sha2-256",
  })
  console.log(updatedDoc)
} catch (error) {
  console.error(error)
}

// get all versions for doc
try {
  const docVersions = await t.getDocumentVersions(newDoc.id)
  console.log(docVersions)
} catch (error) {
  console.error(error)
}

// delete document
try {
  const deletedDoc = await t.deleteDocument(newDoc.id)
  console.log(deletedDoc) // should be 204 no response empty {}
} catch (error) {
  console.error(error)
}
