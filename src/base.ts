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
  apiKey: string
  apiEnv?: string
}

export type ReqHeaders = {
  Authorization: string
  'Content-Type': string
  Accept: string
}

export class HTTPResponseError extends Error {
  public response: Response
  // @ts-ignore-next-line
  constructor (response: Response, ...args) {
    super(`${response.status} ${response.statusText}`, ...args);
    this.response = response;
  }
}

export class ValidationError extends Error {
  constructor (message: string) {
    super(message);
    this.name = "ValidationError";
  }
}

function checkStatus(response: Response) {
  if (response.ok) {
    // response.status >= 200 && response.status < 300
    return response;
  } else {
    throw new HTTPResponseError(response);
  }
}

export abstract class Base {
  private apiKey: string
  private apiEnv: string

  constructor (config: Config) {
    this.apiKey = config.apiKey
    this.apiEnv = config.apiEnv || "production"
  }

  protected async request<T>(
    resource: string,
    reqOptions?: RequestInit
  ): Promise<T> {
    const url = getApiBaseUriForEnv(this.apiEnv) + resource

    const headers: ReqHeaders = {
      Authorization: "Bearer " + this.apiKey,
      "Content-Type": "application/json",
      Accept: "application/json",
    }

    const config: RequestInit = {
      ...reqOptions,
      headers,
    }

    let response = await fetch(url, config)

    try {
      checkStatus(response);
    } catch (error) {
      if (error instanceof HTTPResponseError) {
        // console.error(error);
        // const errorBody = await error.response.text();
        // console.error(`Error: ${error.message}`);
        throw error;
      }
    }

    let respJson = await response.json()

    return new Promise((resolve) => {
      resolve(respJson)
    })
  }
}
