export type NewDocument = {
    hash: string,
    type: string
}

export type DocumentParams = {
    id: string,
    revision: number
}

export type Document = {
    id: string,
    revision: number,
    hash: string,
    hash_length: number,
    hash_type: string,
    hash_hex: string,
    hash_base64: string,
    timestamp: string,
}
