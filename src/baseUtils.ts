export function getApiBaseUriForEnv(env: string): string {
  switch (env) {
    case "development":
      return "https://dev-api.truestamp.com/v1/"

    case "staging":
      return "https://staging-api.truestamp.com/v1/"

    case "production":
      return "https://api.truestamp.com/v1/"

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
