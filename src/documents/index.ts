import { stringify } from "querystringify"
import { Base } from "../base"

import {
  Document,
  NewOrUpdatedDocumentBody,
  GetAllDocumentsQueryParams,
  GetDocumentVersionsQueryParams,
} from "./types"

// The base restful resource path
const baseResource = "documents"

export class Documents extends Base {
  createDocument(doc: NewOrUpdatedDocumentBody) {
    let resource = `${baseResource}`

    return this.request<Document>(resource, {
      method: "POST",
      body: JSON.stringify(doc),
    })
  }

  getAllDocuments(params?: GetAllDocumentsQueryParams) {
    let resource = `${baseResource}`

    if (params) {
      resource += stringify(params, true) // ?start=tz&end=tz&page=1&per_page=10
    }

    return this.request<Document[]>(resource)
  }

  getDocument(id: string) {
    let resource = `${baseResource}/${id}`

    return this.request<Document>(resource)
  }

  updateDocument(id: string, doc: NewOrUpdatedDocumentBody) {
    let resource = `${baseResource}/${id}`

    return this.request<Document>(resource, {
      method: "PUT",
      body: JSON.stringify(doc),
    })
  }

  deleteDocument(id: string) {
    let resource = `${baseResource}/${id}`

    return this.request<Document>(resource, {
      method: "DELETE",
    })
  }

  getDocumentVersions(id: string, params?: GetDocumentVersionsQueryParams) {
    let resource = `${baseResource}/${id}/versions`

    if (params) {
      resource += stringify(params, true) // ?start=tz&end=tz&page=1&per_page=10
    }

    return this.request<Document[]>(resource)
  }
}
