import { Heartbeat } from "./heartbeat"
import { Documents } from "./documents"
import { Tokens } from "./tokens"
import { applyMixins } from "./baseUtils"
import { Base } from "./base"

class Truestamp extends Base {}
interface Truestamp extends Heartbeat, Documents, Tokens {}
applyMixins(Truestamp, [Heartbeat, Documents, Tokens])

export default Truestamp
