import * as https from 'https'
import * as fs from 'fs'
import * as path from 'path'
import * as dotenv from 'dotenv'
import express from 'express'
import morgan from 'morgan'

const app = express()

dotenv.config()

app.use(morgan('combined'))
app.use(express.static(path.join(__dirname, 'public')))

app.listen(3000)

if (process.env.NODE_ENV === 'production') {
  const options = {
    cert: fs.readFileSync(`${process.env.SSL_CERT_PATH}/fullchain.pem`),
    key: fs.readFileSync(`${process.env.SSL_CERT_PATH}/privkey.pem`),
  }

  https.createServer(options, app).listen(3443)
}
