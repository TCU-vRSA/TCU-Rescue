require('dotenv').config()
const env = process.env

const express = require("express")
const app = express()

const line = require('@line/bot-sdk')
const line_config = {
  channelAccessToken: env.LINE_CHANNEL_ACCESS_TOKEN,
  channelSecret: env.LINE_CHANNEL_SECRET
}

app.post("/helper", line.middleware(line_config), (req, res) => {
  Promise
    .all(req.body.events.map(handleEvent))
    .then((result) => res.json(result))
    .catch(err => {
      console.log(err)
    })
})

const client = new line.Client(line_config)

app.listen(50006, () => {
  console.log("server started!")
})