import { Base } from "../base"

import { Token, NewOrUpdatedTokenBody } from "./types"
const baseResource = "tokens"

export class Tokens extends Base {
  createToken(token: NewOrUpdatedTokenBody) {
    let resource = `${baseResource}`

    return this.request<Token>(resource, {
      method: "POST",
      body: JSON.stringify(token),
    })
  }

}
