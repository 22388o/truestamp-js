import fetch from 'isomorphic-unfetch'

type Config = {
    apiKey: string,
    apiBaseUrl?: string,
}

export type Pagination = {
    page?: number,
    per_page?: number,
}

export abstract class Base {
    private apiKey: string
    private apiBaseUrl: string

    constructor(config: Config) {
        this.apiKey = config.apiKey
        this.apiBaseUrl = config.apiBaseUrl || 'https://api.truestamp.com/v1/'
    }
    
    protected request<T> (endpoint: string, options?: RequestInit): Promise<T> {
        const url = this.apiBaseUrl + endpoint
        const headers = {
            'Authorization': "Bearer " + this.apiKey,
            'Content-type': 'application/json',
            'Accept': 'application/json'
        }

        const config = {
            ...options,
            headers
        }

        return fetch(url, config).then(r => {
            if (r.ok) {
                // Handle HTTP 204 No Content response
                if (r.status === 204) {
                    return null
                } else {
                    return r.json()
                }
            }

            throw new Error(`${r.status} : ${r.statusText}`)
        })
    }
}