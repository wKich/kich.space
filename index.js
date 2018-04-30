const https = require('https')
const fs = require('fs')
const path = require('path')
const express = require('express')
const app = express()

const options = {
  cert: fs.readFileSync(path.join(__dirname, 'sslcert', 'fullchain.pem')),
  key: fs.readFileSync(path.join(__dirname, 'sslcert', 'privkey.pem'))
}

app.use(express.static(path.join(__dirname, 'public')))

// app.listen(3000)
https.createServer(options, app).listen(3443)
