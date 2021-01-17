import { Heartbeat } from './heartbeat'
import { applyMixins } from './utils'
import { Base } from './base'

class Truestamp extends Base {}
interface Truestamp extends Heartbeat {}
applyMixins(Truestamp, [Heartbeat]);

export default Truestamp
