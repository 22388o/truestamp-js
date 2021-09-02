import { Health } from "./health"
import { Documents } from "./documents"
import { Tokens } from "./tokens"
import { applyMixins } from "./baseUtils"
import { Base } from "./base"

class Truestamp extends Base { }
interface Truestamp extends Health, Documents, Tokens { }
applyMixins(Truestamp, [Health, Documents, Tokens])

export default Truestamp
