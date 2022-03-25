// import { stringify } from "querystringify"
import { decode as truestampDecodeId } from '@truestamp/truestamp-id'
import { create, StructError } from 'superstruct'

import { Base, ValidationError } from "../base"

// import {
//   GetAllItemsQueryParams,
// } from "./types"

import {
  ItemRequest,
  ItemRequestStruct,
  EnvelopeResponse
} from "../superstruct"

// The base restful resource path
const baseResource = "items"

export class Items extends Base {
  createItem(item: ItemRequest): Promise<EnvelopeResponse> {
    let resource = `${baseResource}`

    let itemRequest

    try {
      itemRequest = create(item, ItemRequestStruct)
    } catch (error) {
      if (error instanceof StructError) {
        throw new ValidationError(error.message)
      }
    }

    return this.request<EnvelopeResponse>(resource, {
      method: "POST",
      body: JSON.stringify(itemRequest),
    })
  }

  getItem(id: string): Promise<EnvelopeResponse> {
    try {
      truestampDecodeId(id)
    } catch (error) {
      if (error instanceof Error) {
        throw new ValidationError(error.message)
      }
    }

    let resource = `${baseResource}/${id}`

    return this.request<EnvelopeResponse>(resource)
  }

  updateItem(id: string, item: ItemRequest): Promise<EnvelopeResponse> {
    try {
      truestampDecodeId(id)
    } catch (error) {
      if (error instanceof Error) {
        throw new ValidationError(error.message)
      }
    }

    let resource = `${baseResource}/${id}`

    let itemRequest

    try {
      itemRequest = create(item, ItemRequestStruct)
    } catch (error) {
      if (error instanceof StructError) {
        throw new ValidationError(error.message)
      }
    }

    return this.request<EnvelopeResponse>(resource, {
      method: "PUT",
      body: JSON.stringify(itemRequest),
    })
  }

  // getAllItems(params?: GetAllItemsQueryParams) {
  //   let resource = `${baseResource}`
  //   if (params) {
  //     resource += stringify(params, true) // ?start=tz&end=tz
  //   }
  //   return this.request<EnvelopeResponse[]>(resource)
  // }
}
