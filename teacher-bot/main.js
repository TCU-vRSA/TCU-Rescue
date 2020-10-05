require('dotenv').config()
const env = process.env

const messages = require("./messages")
const model = require("./model")

const express = require("express")
const app = express()

const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost/tr_task")
const Task = model.Task

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

async function handleEvent(event) {
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
    const task = new Task({
      task_name: event.message.text,
      place_name: "",
      user_id: event.source.userId,
      is_confirmed: false,
      created_at: new Date().getTime(),
      updated_at: new Date().getTime()
    })

    const result = await task.save()
      .then(() => { return true })
      .catch(err => {
        console.log(err)
        return false
      })

    if (result) {
      return client.replyMessage(event.replyToken, messages.choose_classroom)
    }
    else {
      return client.replyMessage(event.replyToken, messages.error)
    }
  }

  if (messages.classroom_list.includes(event.message.text)) {
    let id = ""
    const is_confirmed = await Task.find({ "user_id": event.source.userId })
      .sort({ updated_at: -1 })
      .limit(1)
      .then(data => {
        id = data[0]._id
        return data[0].is_confirmed
      })
      .catch(err => {
        console.log(err)
        return true
      })

    if (!is_confirmed) {
      const result = Task.update({ "_id": id },
        {
          $set: {
            is_confirmed: true,
            place_name: event.message.text,
            updated_at: new Date().getTime()
          }
        })
        .then(() => {
          return true
        })
        .catch(err => {
          return false
        })

      if (result) {
        return client.replyMessage(event.replyToken, messages.finish)
      }
      else {
        return client.replyMessage(event.replyToken, messages.error)
      }
    }
    else {
      return client.replyMessage(event.replyToken, messages.error)
    }
  }

  return client.replyMessage(event.replyToken, {
    type: 'text',
    text: "このメッセージは対応していません。選択肢から選んでください。"
  });
}

app.listen(50005, () => {
  console.log("server started!")
})