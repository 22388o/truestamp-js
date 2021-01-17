const nock = require('nock')
const Truestamp = require('../../dist/index.js')

describe('Heartbeat resource', () => {
    test('getHeartbeat returns a heartbeat status', async () => {

        let mockResp = { ok: true, timestamp: '2021-01-16T02:48:46.548Z' }

        const scope = nock('https://api.truestamp.com')
          .get('/v1/heartbeat')
          .reply(200, mockResp)
        
        const TruestampClient = new Truestamp({ apiKey: 'XYZ' })
        let r = await TruestampClient.getHeartbeat()
        
        expect(r).toEqual(mockResp)

        scope.done()
    })
})
