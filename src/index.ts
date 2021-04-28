import { Heartbeat } from "./heartbeat"
import { Documents } from "./documents"
import { applyMixins } from "./baseUtils"
import { Base } from "./base"

class Truestamp extends Base {}
interface Truestamp extends Heartbeat, Documents {}
applyMixins(Truestamp, [Heartbeat, Documents])

export default Truestamp
