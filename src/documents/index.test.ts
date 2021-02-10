// using 'var' here to avoid 'cannot re-declare block-scoped variable' err
var nock = require('nock')
var Truestamp = require('../../dist/index.js')

describe('Documents resource', () => {
    test('createDocument returns a NewDocumentResponse', async () => {

        let mockResp = {
          id: "294jJ3YUoH1IEEm8GSabOs",
          revision: 0,
          hash: "ee71a3f26314cdab8a518f36179d5f98f613f99320f6212d2d0bb588cb2988f2",
          timestamp: "2020-05-13T23:30:18.789Z"
        }

        const scope = nock('https://api.truestamp.com')
          .post('/v1/documents')
          .reply(201, mockResp)
        
        const c = new Truestamp({ apiKey: 'XYZ' })
        let r = await c.createDocument({hash: mockResp.hash})
        
        expect(r).toEqual(mockResp)

        scope.done()
    })
})
