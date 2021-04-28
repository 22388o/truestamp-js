import fetch from "isomorphic-unfetch"

type Config = {
  accessToken: string
  apiBaseUrl?: string
}

export abstract class Base {
  private accessToken: string
  private apiBaseUrl: string

  constructor(config: Config) {
    this.accessToken = config.accessToken
    this.apiBaseUrl = config.apiBaseUrl || "https://api.truestamp.com/v1/"
  }

  protected async request<T>(
    resource: string,
    reqOptions?: RequestInit
  ): Promise<T> {
    const url = this.apiBaseUrl + resource
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
          // Return a friendler value, for calls that return {data: [..., ...]},
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
          throw new Error(error.message)
        }
      }
    }

    // Oops. Status code is not OK.
    throw new Error(`${response.status} : ${response.statusText}`)
  }
}
