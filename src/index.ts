import { Health } from "./health"
import { Documents } from "./documents"
import { Keys } from "./keys"
import { applyMixins } from "./baseUtils"
import { Base } from "./base"

class Truestamp extends Base { }
interface Truestamp extends Health, Documents, Keys { }
applyMixins(Truestamp, [Health, Documents, Keys])

export default Truestamp
