import { Base } from "../base"

import { ApiKey, NewOrUpdatedApiKeyBody } from "./types"
const baseResource = "apikeys"

export class Keys extends Base {
  createApiKey(key: NewOrUpdatedApiKeyBody) {
    let resource = `${baseResource}`

    return this.request<ApiKey>(resource, {
      method: "POST",
      body: JSON.stringify(key),
    })
  }
}
