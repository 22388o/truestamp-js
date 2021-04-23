import { Heartbeat } from "./heartbeat"
import { Documents } from "./documents"
import { applyMixins } from "./utils"
import { Base } from "./base"

class Truestamp extends Base {}
interface Truestamp extends Heartbeat, Documents {}
applyMixins(Truestamp, [Heartbeat, Documents])

export default Truestamp
