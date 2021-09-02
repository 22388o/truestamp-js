//@ts-nocheck

// A simplistic Deno example of using the functions of the Truestamp JS client.

// Load latest ES Module from SkyPack. You should really use a pinned URL!
// See : https://docs.skypack.dev/skypack-cdn/code/optimize-for-production
// import Truestamp from "https://cdn.skypack.dev/@truestamp/truestamp-js?dts"

// Or, load from local lib in development
import Truestamp from "../../dist/truestamp.module.js"

import { createHash } from "https://deno.land/std@0.103.0/hash/mod.ts"

// setup Truestamp client using local config file
const configTxt = await Deno.readTextFile("../config.json")
const config = JSON.parse(configTxt)
const t = new Truestamp(config)

// check for health
const h = await t.getHealth()
console.log(h)

// submit a new document
const now = new Date()
const nowHasher = createHash("sha256")
nowHasher.update(now.toISOString())
const nowHashBase64 = nowHasher.toString("base64")

const newDoc = await t.createDocument({
  hash: nowHashBase64,
  name: "sha2-256",
})
console.log(newDoc)

// retrieve document
const newDocRetrieved = await t.getDocument(newDoc.id)
console.log(newDocRetrieved)

// list all documents owned by this user
// const allDocs = await t.getAllDocuments({ start: "2021-04-21" })
// console.log(allDocs)

// update document
const later = new Date()
const laterHasher = createHash("sha256")
laterHasher.update(later.toISOString())
const laterHashBase64 = laterHasher.toString("base64")

const updatedDoc = await t.updateDocument(newDoc.id, {
  hash: laterHashBase64,
  name: "sha2-256",
})
console.log(updatedDoc)

// get all versions for doc
const docVersions = await t.getDocumentVersions(newDoc.id)
console.log(docVersions)

// delete document
const deletedDoc = await t.deleteDocument(newDoc.id)
console.log(deletedDoc) // should be 204 no response empty {}
