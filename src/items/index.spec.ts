import nock from 'nock';
import Truestamp from '../index'

import {
  ItemRequest,
  EnvelopeResponse
} from "../superstruct"

const mockResp: EnvelopeResponse = {
  "hash": "7e95087d7a082c51e25cfa28e24f2299fcafddeac8d4781e84c9bceb0170ef42",
  "hashType": "sha-256",
  "data": {
    "hash": "d5f5991d785c3b4529e79a5edf4ac15c65125cb99d8a6324519517c929e218d2",
    "hashType": "sha-256",
    "signatures": [
      {
        "type": "signature",
        "signature": "hlyn6OXKRxUdnR_wzeNrmk52XmzF2MEIPxfPimZdKk5rPAZDfReQidur7kxGKT6fhCad2YdMLdfld2bmqw7aBA==",
        "publicKey": "Qrx1usC1HsvSNNuod9HM7eVc93p9n5Zt9Rd_v1YnBr0=",
        "signatureType": "ed25519"
      }
    ],
    "data": [
      {
        "timestamp": "2022-03-05T19:48:56.387Z",
        "people": [
          {
            "organizationName": "Truestamp Inc.",
            "roles": [
              "owner"
            ],
            "address": {
              "streetNo": "123",
              "streetName": "Main",
              "streetType": "St",
              "town": "Anytown",
              "region": "VA",
              "postcode": "12345",
              "countryCode": "US",
              "type": "address"
            },
            "type": "person"
          }
        ],
        "location": {
          "coordinate": {
            "latitude": "38.8895563",
            "longitude": "-77.0352546"
          },
          "type": "location"
        },
        "content": {
          "my_id": "abc123",
          "my_desc": "This is my important document",
          "arbitrary_data": "Any JSON data string, number, boolean, null, Array or Object can be stored in content"
        },
        "type": "item_data"
      },
      {
        "timestamp": "2022-03-05T19:48:56.387Z",
        "people": [
          {
            "givenName": "Glenn",
            "surname": "Rempe",
            "roles": [
              "creator",
              "inventor"
            ],
            "address": {
              "streetNo": "123",
              "streetName": "Main",
              "streetType": "St",
              "town": "Anytown",
              "region": "VA",
              "postcode": "12345",
              "countryCode": "US",
              "type": "address"
            },
            "type": "person"
          }
        ],
        "location": {
          "coordinate": {
            "latitude": "38.8895563",
            "longitude": "-77.0352546"
          },
          "type": "location"
        },
        "content": {
          "arbitrary_key_1": "foo",
          "arbitrary_key_2": "bar"
        },
        "type": "item_data"
      }
    ],
    "type": "item",
    "request": {
      "type": "item_req_props",
      "asn": 701,
      "colo": "IAD",
      "country": "US",
      "city": "Ashburn",
      "continent": "NA",
      "latitude": "39.01800",
      "longitude": "-77.53900",
      "postalCode": "20147",
      "metroCode": "511",
      "region": "Virginia",
      "regionCode": "VA",
      "timezone": "America/New_York"
    },
    "observableEntropy": "f9b45852a12fd10b07ffde75ba3fe3859591ac26ca027d6064ffb72f47a01d7b"
  },
  "signatures": [
    {
      "type": "signature",
      "publicKey": "Qrx1usC1HsvSNNuod9HM7eVc93p9n5Zt9Rd_v1YnBr0=",
      "signature": "zOFHlJFFR-zfI2u2xoNwwccN3dUTg2Fph-c_Owu4Di_Bo1YRbS474mFEcFuci0oEzFUBcpQWl2rraLE83ctyAw==",
      "signatureType": "ed25519",
      "signer": {
        "type": "person",
        "organizationName": "Truestamp Inc.",
        "email": "support@truestamp.com",
        "uri": "https://www.truestamp.com"
      }
    }
  ],
  "id": "truestamp_test_01FYYTHJEW3759XX6Y4HRB84AB_1648154430560000",
  "timestamp": "2022-03-24T20:40:30.560+00:00",
  "type": "envelope"
}

describe("Items resource", () => {
  test("createItem returns a Item", async () => {

    const scope = nock("https://api.truestamp.com")
      .post("/v1/items")
      .reply(201, mockResp)

    const c = new Truestamp({ apiKey: "XYZ" })

    let newItem: ItemRequest = {
      hash: mockResp.hash,
      hashType: mockResp.hashType,
    }

    let r = await c.createItem(newItem)

    expect(r).toEqual(mockResp)

    scope.done()
  })

  test("updateItem returns an updated Item", async () => {
    const scope = nock("https://api.truestamp.com")
      .put(`/v1/items/${mockResp.id}`)
      .reply(201, mockResp)

    const c = new Truestamp({ apiKey: "XYZ" })
    let r = await c.updateItem(mockResp.id, {
      hash: mockResp.hash,
      hashType: mockResp.hashType,
    })

    expect(r).toEqual(mockResp)

    scope.done()
  })
})
