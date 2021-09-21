import fetch from "isomorphic-unfetch"

function getApiBaseUriForEnv(env: string): string {
  const uri = {
    development: "https://dev-api.truestamp.com/v1/",
    staging: "https://staging-api.truestamp.com/v1/",
    production: "https://api.truestamp.com/v1/"
  }[env]

  if (!uri) {
    throw new Error(`Unknown environment: ${env}`)
  }

  return uri
}

export type Config = {
  accessToken: string
  apiEnv?: string
}

export abstract class Base {
  private accessToken: string
  private apiEnv: string

  constructor (config: Config) {
    this.accessToken = config.accessToken
    this.apiEnv = config.apiEnv || "production"
  }

  protected async request<T>(
    resource: string,
    reqOptions?: RequestInit
  ): Promise<T> {
    const url = getApiBaseUriForEnv(this.apiEnv) + resource
    const headers = {
      Authorization: "Bearer " + this.accessToken,
      "Content-type": "application/json",
      Accept: "application/json",
    }

    const config = {
      ...reqOptions,
      headers,
    }

    let response = await fetch(url, config)

    // HTTP status code is ok (200-299)?
    if (response.ok) {
      // Handle HTTP 204 No Content response by returning an empty object
      if (response.status === 204) {
        return new Promise((resolve) => {
          resolve(JSON.parse("{}"))
        })
      } else {
        try {
          // Return a friendlier value, for calls that return {data: [..., ...]},
          // by returning just the Array.
          let respJson = await response.json()
          if (respJson.data && Array.isArray(respJson.data)) {
            return new Promise((resolve) => {
              resolve(respJson.data)
            })
          } else {
            return new Promise((resolve) => {
              resolve(respJson)
            })
          }
        } catch (error) {
          if (error instanceof Error) {
            throw new Error(error.message)
          } else {
            throw new Error('Unknown Error')
          }
        }
      }
    }

    // Oops. Status code is not OK. response.json() should return an
    // error response like : { status: '...', message: '...' }
    const { message } = await response.json()

    throw new Error(`${response.status} : ${response.statusText} : ${message}`)
  }
}
