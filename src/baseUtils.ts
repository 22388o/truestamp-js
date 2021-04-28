export const BASE_URI_DEVELOPMENT = "https://dev-api.truestamp.com/v1/"
export const BASE_URI_STAGING = "https://staging-api.truestamp.com/v1/"
export const BASE_URI_PRODUCTION = "https://api.truestamp.com/v1/"

export function getApiBaseUriForEnv(env: string): string {
  switch (env) {
    case "development":
      return BASE_URI_DEVELOPMENT

    case "staging":
      return BASE_URI_STAGING

    case "":
    case "production":
      return BASE_URI_PRODUCTION

    default:
      throw new Error(`invalid environment : '${env}'`)
  }
}

export function applyMixins(derivedCtor: any, baseCtors: any[]) {
  baseCtors.forEach((baseCtor) => {
    Object.getOwnPropertyNames(baseCtor.prototype).forEach((name) => {
      Object.defineProperty(
        derivedCtor.prototype,
        name,
        // @ts-ignore
        Object.getOwnPropertyDescriptor(baseCtor.prototype, name)
      )
    })
  })
}
