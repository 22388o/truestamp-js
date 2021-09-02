// using 'var' here to avoid 'cannot re-declare block-scoped variable' err
var nock = require("nock")
var Truestamp = require("../../dist/truestamp.js")

describe("Tokens resource", () => {
  test("createToken returns a token status", async () => {
    let mockResp = { token: "abc123" }

    const scope = nock("https://api.truestamp.com")
      .post("/v1/tokens")
      .reply(201, mockResp)

    const TruestampClient = new Truestamp({ accessToken: "XYZ" })
    let r = await TruestampClient.createToken({
      refreshToken: "myrefreshtoken",
      description: "mydescription",
    })
    expect(r).toEqual(mockResp)

    scope.done()
  })
})
