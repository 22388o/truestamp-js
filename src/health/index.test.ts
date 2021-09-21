// using 'var' here to avoid 'cannot re-declare block-scoped variable' err
var nock = require("nock")
var Truestamp = require("../../dist/truestamp.cjs")

describe("Health resource", () => {
  test("getHealth returns a health status", async () => {
    let mockResp = { status: 'pass' }

    const scope = nock("https://api.truestamp.com")
      .get("/v1/health")
      .reply(200, mockResp)

    const TruestampClient = new Truestamp({ accessToken: "XYZ" })
    let r = await TruestampClient.getHealth()

    expect(r).toEqual(mockResp)

    scope.done()
  })
})
