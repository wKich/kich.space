import * as https from 'https'
import * as fs from 'fs'
import * as path from 'path'
import * as dotenv from 'dotenv'
import * as express from 'express'
import * as morgan from 'morgan'

const app = express()

dotenv.config()

app.use(morgan('combined'))
app.use('/api', (_req, res) => res.sendStatus(501))
app.use('/static', express.static(path.join(__dirname, '/public')))
app.get('*', (_req, res) => res.sendFile(path.join(__dirname, '/public/index.html')))

app.listen(3000)

// NOTE Webpack replace process.env variables in compile time
const {
  env: { NODE_ENV },
} = process

if (NODE_ENV === 'production') {
  const options = {
    cert: fs.readFileSync(`${process.env.SSL_CERT_PATH}/fullchain.pem`),
    key: fs.readFileSync(`${process.env.SSL_CERT_PATH}/privkey.pem`),
  }

  https.createServer(options, app).listen(3443)
}
