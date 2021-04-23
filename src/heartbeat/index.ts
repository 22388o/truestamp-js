import { Base } from "../base"

import { HeartbeatStatus } from "./types"
const baseResource = "heartbeat"

export class Heartbeat extends Base {
  getHeartbeat() {
    let resource = `${baseResource}`

    return this.request<HeartbeatStatus>(resource)
  }
}
