const https = require("https");
const fs = require("fs");
const path = require("path");
const dotenv = require("dotenv");
const express = require("express");
const app = express();

dotenv.config();

app.use(express.static(path.join(__dirname, "public")));

app.listen(3000);

if (process.env.NODE_ENV === "production") {
  const options = {
    cert: fs.readFileSync(`${process.env.SSL_CERT_PATH}/fullchain.pem`),
    key: fs.readFileSync(`${process.env.SSL_CERT_PATH}/privkey.pem`)
  };

  https.createServer(options, app).listen(3443);
}
