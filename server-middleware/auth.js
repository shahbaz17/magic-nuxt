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
  // console.log(req.body.token)

  mAdmin.token.validate(req.body.token)
  res.status(200).json({
    token: req.body.token,
  })
})

app.get('/user', async function (req, res) {
  // console.log(req.headers.authorization)
  // const DIDToken =
  //   'WyIweGQ4ODY2MmU2ZjU2MzRmMjQ2MTc5NzFmNGVjNzEyYThlM2E3NGZiZjJmYjRhM2UxZWQ4ODM5Nzk4NDBmZjExZDIyNGU2OTA5ZWZiNTI1ZTk4OTU5N2VjNTFiZWVkMGYwOTVmZjE2ZjNlODJlMDQwMGVlOGI1MWJjYjQ1ZTkxMjY3MWMiLCJ7XCJpYXRcIjoxNjE4MjY3NTM3LFwiZXh0XCI6MTYxODI2ODQzNyxcImlzc1wiOlwiZGlkOmV0aHI6MHhCMUQ3RDYwRTc4ODY3ZThFM2I5Q2FCQjBFYTBmQzVlMkI4Q2RGMjk2XCIsXCJzdWJcIjpcInFKeUFsM0VwRjBUQnZPYk80WnNwSGgzMmY1SVhWSTN6ckc2TUZpZ3dWbWc9XCIsXCJhdWRcIjpcImNZeVljaE02Um83QS1BVHUwT3ZWcmtfU2R1ZnhYUkRCRXJyMVRoT1J2RVU9XCIsXCJuYmZcIjoxNjE4MjY3NTM3LFwidGlkXCI6XCIyMWEzMjRkZi03OGVkLTQ0NjctODgwZi05ZjI5ZTJkNzI5YzFcIixcImFkZFwiOlwiMHgzZTFiMDQwNGUyNWQ4OGM2YjYxMDU1MWE5Mjk3MjBkOTJlYjVhNTUwODU0MmI3ODZlYWE2NmE0ZDcwYWU1NjE5NGE0MmMyZmJkNTNiOWNhNjVmMGY4OTA1OTg5ZTQxNTEwYzFkNDc5N2M4NmYwNTY4OTQyMDEyNjk4ZGVjYWU3YjFiXCJ9Il0'

  const DIDToken = req.headers.authorization

  const metadata = await mAdmin.users.getMetadataByToken(DIDToken)
  // console.log(metadata)
  res.status(200).json({ user: metadata })
})

app.post('/logout', async function (req, res) {
  const DIDToken = req.headers.authorization
  // console.log(DIDToken)

  await mAdmin.users.logoutByToken(DIDToken)
  res.status(200).json({ authenticated: false })
})

module.exports = app
