require('dotenv').config()
const env = process.env

const messages = require("./messages")

const express = require("express")
const app = express()

// const mongoose = require("mongoose")
// mongoose.connect("localhost:50006://mongo/tcurescue")

const line = require('@line/bot-sdk')

const config = {
  channelAccessToken: env.LINE_CHANNEL_ACCESS_TOKEN,
  channelSecret: env.LINE_CHANNEL_SECRET
}

app.post("/webhook", line.middleware(config), (req, res) => {
  Promise
    .all(req.body.events.map(handleEvent))
    .then((result) => res.json(result))
    .catch(err => {
      console.log(err)
    })
})

const client = new line.Client(config)

function handleEvent(event) {
  if (event.type !== 'message' || event.message.type !== 'text') {
    return Promise.resolve(null);
  }

  if (event.message.text === "Zoom関連のヘルプ") {
    return client.replyMessage(event.replyToken, messages.zoom)
  }

  if (event.message.text === "教室設備関連のヘルプ") {
    return client.replyMessage(event.replyToken, messages.classroom)
  }

  if (event.message.text === "PC関連のヘルプ") {
    return client.replyMessage(event.replyToken, messages.pc)
  }

  if (messages.submsg_list.includes(event.message.text)) {
    // TODO: DBにタスク情報追加(第1段階)する処理を書く
    return client.replyMessage(event.replyToken, messages.choose_classroom)
  }

  if (messages.classroom_list.includes(event.message.text)) {
    // TODO: DBにタスク情報追加(第2段階)する処理を書く
    // TODO: 直接教室名を入力したときに弾くためのバリデーションを書く
    return client.replyMessage(event.replyToken, messages.finish)
  }

  return client.replyMessage(event.replyToken, {
    type: 'text',
    text: "このメッセージは対応していません。選択肢から選んでください。"
  });
}

app.listen(50005, () => {
  console.log("server started!")
});