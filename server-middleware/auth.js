var express = require('express')
var app = express()

const { Magic } = require('@magic-sdk/admin')
const mAdmin = new Magic(process.env.MAGIC_SECRET_KEY)

app.use(
  express.urlencoded({
    extended: true,
  })
)

app.use(express.json())

app.post('/login', (req, res) => {
  mAdmin.token.validate(req.body.token)
  res.status(200).json({
    token: req.body.token,
  })
})

app.get('/user', async function (req, res) {
  const DIDToken = req.headers.authorization

  const metadata = await mAdmin.users.getMetadataByToken(DIDToken)

  res.status(200).json({ user: metadata })
})

app.post('/logout', async function (req, res) {
  const DIDToken = req.headers.authorization

  await mAdmin.users.logoutByToken(DIDToken)
  res.status(200).json({ authenticated: false })
})

module.exports = app
