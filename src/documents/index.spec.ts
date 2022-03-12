// using 'var' here to avoid 'cannot re-declare block-scoped variable' err
var nock = require("nock")
import Truestamp from '../index'

describe("Documents resource", () => {
  test("createDocument returns a Document", async () => {
    let mockResp = {
      id: "01FFTTBFBHJRHH404AE9QHPK7E_0",
      hashBase64: "YiXkwoi6v71gdqb72CpOzr8PpSBYRxmDQ5Tln3q/fPI=",
      hashHex: "6225e4c288babfbd6076a6fbd82a4ecebf0fa520584719834394e59f7abf7cf2",
      hashType: "sha2-256",
      description: "This is a description",
      timestamp: "2021-08-02T20:29:59.604+00:00",
    }

    const scope = nock("https://api.truestamp.com")
      .post("/v1/documents")
      .reply(201, mockResp)

    const c = new Truestamp({ accessToken: "XYZ" })
    let r = await c.createDocument({
      hash: mockResp.hashBase64,
      hashType: mockResp.hashType,
      description: mockResp.description,
    })

    expect(r).toEqual(mockResp)

    scope.done()
  })

  test("updateDocument returns an updated Document", async () => {
    let mockResp = {
      id: "01FFTTBFBHJRHH404AE9QHPK7E_0",
      hashBase64: "YiXkwoi6v71gdqb72CpOzr8PpSBYRxmDQ5Tln3q/fPI=",
      hashHex: "6225e4c288babfbd6076a6fbd82a4ecebf0fa520584719834394e59f7abf7cf2",
      hashType: "sha2-256",
      description: "This is a description",
      timestamp: "2021-08-02T20:29:59.604+00:00",
    }

    const scope = nock("https://api.truestamp.com")
      .put(`/v1/documents/${mockResp.id}`)
      .reply(201, mockResp)

    const c = new Truestamp({ accessToken: "XYZ" })
    let r = await c.updateDocument(mockResp.id, {
      hash: mockResp.hashBase64,
      hashType: mockResp.hashType,
      description: mockResp.description,
    })

    expect(r).toEqual(mockResp)

    scope.done()
  })

  test("deleteDocument returns an empty object", async () => {
    let id = "01FFTTBFBHJRHH404AE9QHPK7E_0"

    const scope = nock("https://api.truestamp.com")
      .delete(`/v1/documents/${id}`)
      .reply(204, null)

    const c = new Truestamp({ accessToken: "XYZ" })
    let r = await c.deleteDocument(id)

    expect(r).toEqual({})

    scope.done()
  })
})
