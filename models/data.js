// /backend/data.js
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// this will be our data base's data structure 
const MessagesSchema = new mongoose.Schema(
  {
    id: Number,
    title: String,
    message: String,
    user: String,
    msgread: {type: Boolean, default: false},
  },
  { timestamps: true }
);

// export the new Schema so we could modify it using Node.js
module.exports = mongoose.model("Messages", MessagesSchema);