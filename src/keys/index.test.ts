// using 'var' here to avoid 'cannot re-declare block-scoped variable' err
var nock = require("nock")
var Truestamp = require("../../dist/truestamp.cjs")

describe("Keys resource", () => {
  test("createApiKey returns a key", async () => {
    let mockResp = { key: "abc123" }

    const scope = nock("https://api.truestamp.com")
      .post("/v1/apikeys")
      .reply(201, mockResp)

    const TruestampClient = new Truestamp({ accessToken: "XYZ" })
    let r = await TruestampClient.createApiKey({
      refreshToken: "myrefreshtoken",
      description: "mydescription",
      ttl: 60
    })
    expect(r).toEqual(mockResp)

    scope.done()
  })
})
