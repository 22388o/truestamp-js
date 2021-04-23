// using 'var' here to avoid 'cannot re-declare block-scoped variable' err
var nock = require("nock")
var Truestamp = require("../../dist/truestamp.js")

describe("Documents resource", () => {
  test("createDocument returns a Document", async () => {
    let mockResp = {
      id: "7NmEPIZsw2Z0CIbtUvlG7p",
      revision: 0,
      hash: "mEiA0gB9jk4/3vLjRcgt9j0GCbgw3SVlZEb19hpubKa3V9g",
      hash_length: 32,
      hash_type: "sha2-256",
      hash_hex:
        "34801f63938ff7bcb8d1720b7d8f41826e0c3749595911bd7d869b9b29add5f6",
      hash_base64: "NIAfY5OP97y40XILfY9Bgm4MN0lZWRG9fYabmymt1fY=",
      timestamp: "2021-04-23T19:35:27.163Z",
    }

    const scope = nock("https://api.truestamp.com")
      .post("/v1/documents")
      .reply(201, mockResp)

    const c = new Truestamp({ apiKey: "XYZ" })
    let r = await c.createDocument({
      hash: mockResp.hash,
      type: mockResp.hash_type,
    })

    expect(r).toEqual(mockResp)

    scope.done()
  })

  test("updateDocument returns an updated Document", async () => {
    let mockResp = {
      id: "7NmEPIZsw2Z0CIbtUvlG7p",
      revision: 0,
      hash: "mEiA0gB9jk4/3vLjRcgt9j0GCbgw3SVlZEb19hpubKa3V9g",
      hash_length: 32,
      hash_type: "sha2-256",
      hash_hex:
        "34801f63938ff7bcb8d1720b7d8f41826e0c3749595911bd7d869b9b29add5f6",
      hash_base64: "NIAfY5OP97y40XILfY9Bgm4MN0lZWRG9fYabmymt1fY=",
      timestamp: "2021-04-23T19:35:27.163Z",
    }

    const scope = nock("https://api.truestamp.com")
      .put(`/v1/documents/${mockResp.id}`)
      .reply(201, mockResp)

    const c = new Truestamp({ apiKey: "XYZ" })
    let r = await c.updateDocument(mockResp.id, {
      hash: mockResp.hash,
      type: mockResp.hash_type,
    })

    expect(r).toEqual(mockResp)

    scope.done()
  })

  test("deleteDocument returns an empty object", async () => {
    let id = "7NmEPIZsw2Z0CIbtUvlG7p"

    const scope = nock("https://api.truestamp.com")
      .delete(`/v1/documents/${id}`)
      .reply(204, null)

    const c = new Truestamp({ apiKey: "XYZ" })
    let r = await c.deleteDocument(id)

    expect(r).toEqual({})

    scope.done()
  })
})
