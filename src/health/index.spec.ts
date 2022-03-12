import nock from 'nock';
import Truestamp from '../index'

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
