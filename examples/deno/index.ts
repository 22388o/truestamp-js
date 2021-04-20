//@ts-nocheck

// Load latest ES Module from SkyPack. You should really use a pinned URL!
// See : https://docs.skypack.dev/skypack-cdn/code/optimize-for-production
import Truestamp from "https://cdn.skypack.dev/@truestamp/truestamp-js?dts"

const TruestampClient = new Truestamp({
  apiKey: "%yourApiKey%",
})

const hb = await TruestampClient.getHeartbeat()
console.log(hb)
