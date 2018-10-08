const mongoose = require("mongoose");
// Save a reference to the Schema constructor
const Schema = mongoose.Schema;

const blogPost = new Schema({
      author: {
        type: String,
        require: true,
        default: "Ben Gear"
      },
      title: {
        type: String,
        require: true,
      },
      body: {
        type: String,
        require: true,
      },
      img: {
        type: String,
        require: true,
      },
      audio: {
        type: String
      },
      published: {
        type: Date,
        default: Date.now
      },
      category: {
        type: String,
        default: "Personal"
      },
      keywords: Array,
      comments: [{
        type: Schema.Types.ObjectId,
        ref: "Comments"
    }]
    
  });

  module.exports = mongoose.model("BlogPost", blogPost);