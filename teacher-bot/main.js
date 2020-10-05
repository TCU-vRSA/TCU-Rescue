require('dotenv').config()
const env = process.env

const messages = require("./messages")

const uuid = require("uuid")

const express = require("express")
const app = express()

const AWS = require("aws-sdk")
AWS.config.update({
  accessKeyId: env.AWS_ACCESS_KEY_ID,
  secretAccessKey: env.AWS_SECRET_ACCESS_KEY,
  region: env.AWS_REGION
})
const db_client = new AWS.DynamoDB.DocumentClient({ apiVersion: '2012-08-10' });

const line = require('@line/bot-sdk')
const line_config = {
  channelAccessToken: env.LINE_CHANNEL_ACCESS_TOKEN,
  channelSecret: env.LINE_CHANNEL_SECRET
}

app.post("/webhook", line.middleware(line_config), (req, res) => {
  Promise
    .all(req.body.events.map(handleEvent))
    .then((result) => res.json(result))
    .catch(err => {
      console.log(err)
    })
})

const client = new line.Client(line_config)

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
    const params = {
      TableName: "tr_task",
      Item: {
        id: uuid.v4(),
        task_name: event.message.text,
        user_id: event.source.userId,
        is_confirmed: false,
        created_at: new Date().getTime(),
        updated_at: new Date().getTime()
      }
    }
    const result = db_client.put(params, (err, data) => {
      return !err
    })

    if (result) {
      return client.replyMessage(event.replyToken, messages.choose_classroom)
    }
    else {
      return client.replyMessage(event.replyToken, messages.error)
    }
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