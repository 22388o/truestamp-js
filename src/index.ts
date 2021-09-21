import { Health } from "./health"
import { Documents } from "./documents"
import { Keys } from "./keys"
import { Base } from "./base"
export type { Config } from "./base"

function applyMixins(derivedCtor: any, baseCtors: any[]) {
  baseCtors.forEach((baseCtor) => {
    Object.getOwnPropertyNames(baseCtor.prototype).forEach((name) => {
      Object.defineProperty(
        derivedCtor.prototype,
        name,
        // @ts-ignore
        Object.getOwnPropertyDescriptor(baseCtor.prototype, name)
      )
    })
  })
}

class Truestamp extends Base { }
interface Truestamp extends Health, Documents, Keys { }
applyMixins(Truestamp, [Health, Documents, Keys])

export default Truestamp
