import { Base } from "../base"

import { HealthStatus } from "./types"
const baseResource = "health"

// GET /health
// GET /v1/health
export class Health extends Base {
  getHealth() {
    let resource = `${baseResource}`

    return this.request<HealthStatus>(resource)
  }
}
