import { Base } from "../base"

import { Token } from "./types"
const baseResource = "tokens"

export class Tokens extends Base {
    getToken() {
    let resource = `${baseResource}`

    return this.request<Token>(resource, {
      method: "POST",
      body: null,
    })
  }

}
