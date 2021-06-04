// using 'var' here to avoid 'cannot re-declare block-scoped variable' err
var nock = require("nock")
var Truestamp = require("../../dist/truestamp.js")

describe("Tokens resource", () => {
  test("getToken returns a token status", async () => {
    let mockResp = { token: "abc123" }

    const scope = nock("https://api.truestamp.com")
      .post("/v1/tokens")
      .reply(200, mockResp)

    const TruestampClient = new Truestamp({ accessToken: "XYZ" })
    let r = await TruestampClient.getToken()
    expect(r).toEqual(mockResp)

    scope.done()
  })
})
