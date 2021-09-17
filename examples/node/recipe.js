const crypto = require("crypto")

const Truestamp = require("@truestamp/truestamp-js")

const tsc = new Truestamp({
  accessToken:
    "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Ik16ZzNORFpDUlRRME5EazROakZETkRJNE1EY3dPVEpCTnpoR01FTkZOVFZCTXpCRFEwTXpNQSJ9.eyJpc3MiOiJodHRwczovL3RydWVzdGFtcC1kZXYuYXV0aDAuY29tLyIsInN1YiI6ImpNdk1COHU1eG0xNjBRc0JSbnUxdFJwejU1TGl2U1B2QGNsaWVudHMiLCJhdWQiOiJodHRwczovL2Rldi1hcGkudHJ1ZXN0YW1wLmNvbS8iLCJpYXQiOjE2MzA1MjM3NTksImV4cCI6MTYzMDYxMDE1OSwiYXpwIjoiak12TUI4dTV4bTE2MFFzQlJudTF0UnB6NTVMaXZTUHYiLCJzY29wZSI6ImNyZWF0ZTpkb2N1bWVudHMgcmVhZDpkb2N1bWVudHMgdXBkYXRlOmRvY3VtZW50cyBkZWxldGU6ZG9jdW1lbnRzIHJlYWQ6Y29tbWl0bWVudHMgY3JlYXRlOnRva2VucyByZWFkOmhlYXJ0YmVhdHMiLCJndHkiOiJjbGllbnQtY3JlZGVudGlhbHMiLCJwZXJtaXNzaW9ucyI6WyJjcmVhdGU6ZG9jdW1lbnRzIiwicmVhZDpkb2N1bWVudHMiLCJ1cGRhdGU6ZG9jdW1lbnRzIiwiZGVsZXRlOmRvY3VtZW50cyIsInJlYWQ6Y29tbWl0bWVudHMiLCJjcmVhdGU6dG9rZW5zIiwicmVhZDpoZWFydGJlYXRzIl19.AnQKhbcHUK_IgIrfWG8Z50y-OLUWCxdEp1GnzXGEAcjWhq608CH-fAR8IRcDJFUgQU8ibi5X6ucSVPRJny0YArgD8GjrpdqF31Vs7b-DF7vOyETwKOO0LoXHwp1FTDE99Pbh0-tf2F8pY39cszTydRZr7FaQCouwsBYHIVyF9Du4V7IzMEjOC1tXzEQW2f-iBMOytZTGqGBduFGU41DhjEBTi2LzIKxgcJ_LHTOQBwa4wo2O2zEJtw2YAhocA72VFuVJs1Rz0YQtbAVGMC6z97mHHHpIqqZhL6xUVqdkOPJBubFiWrbdlkaaXlcxq8TuHrPwACEB6x5PfASReZzA8w",
  apiEnv: 'development'
})

const createDocWithMessage = async (msg) => {
  let newDoc

  const msgHash = crypto.createHash("sha256").update(msg).digest("hex")

  try {
    newDoc = await tsc.createDocument({
      hash: msgHash,
      name: "sha2-256",
    })
  } catch (error) {
    console.error(error)
  }

  return newDoc
}

createDocWithMessage("Truestamp rocks!")
  .then((doc) => {
    console.log(JSON.stringify(doc, null, 2))
  })
  .catch((error) => {
    console.error(error)
  })

const getHealth = async () => {
  let health
  try {
    health = await tsc.getHealth()
  } catch (error) {
    console.error(error)
  }

  return health
}

getHealth()
  .then((h) => {
    console.log(JSON.stringify(h, null, 2))
  })
  .catch((error) => {
    console.error(error)
  })
