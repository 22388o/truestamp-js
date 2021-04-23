// Request Types

export type NewOrUpdatedDocumentBody = {
  hash: string
  type?: string
}

export type GetAllDocumentsQueryParams {
  start?: string
  end?: string
  page?: number
  per_page?: number
}

export type GetDocumentQueryParams {
  revision?: number
}

export type GetDocumentRevisionsQueryParams {
  start?: string
  end?: string
  page?: number
  per_page?: number
}

// Response Types

export type Document = {
  readonly id: string
  readonly revision: number
  readonly hash: string
  readonly hash_length: number
  readonly hash_type: string
  readonly hash_hex: string
  readonly hash_base64: string
  readonly timestamp: string
}
