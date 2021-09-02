// Request Types

export type NewOrUpdatedDocumentBody = {
  hash: string
  name?: string
}

export type GetAllDocumentsQueryParams = {
  start?: string
  end?: string
  page?: number
  perPage?: number
}

export type GetDocumentVersionsQueryParams = {
  start?: string
  end?: string
  page?: number
  perPage?: number
}

// Response Types

export type Document = {
  readonly id: string
  readonly hashMultihash: string
  readonly hashHex: string
  readonly hashBase64: string
  readonly hashName: string
  readonly timestamp: string
}
