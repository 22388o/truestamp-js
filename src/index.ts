import { Health } from "./health"
import { Items } from "./items"
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
interface Truestamp extends Health, Items, Keys { }
applyMixins(Truestamp, [Health, Items, Keys])

export default Truestamp
