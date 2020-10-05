const mongoose = require("mongoose")
const Schema = mongoose.Schema

const task_schema = new Schema({
  task_name: String,
  place_name: String,
  user_id: String,
  is_confirmed: Boolean,
  created_at: Date,
  updated_at: Date
})

exports.Task = mongoose.model("Task", task_schema);