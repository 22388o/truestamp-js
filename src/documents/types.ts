// Request Types

export type NewOrUpdatedDocumentBody = {
  hash: string
  hashType?: string
  description?: string
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
  readonly hashBase64: string
  readonly hashHex: string
  readonly hashType: string
  readonly timestamp: string
}
