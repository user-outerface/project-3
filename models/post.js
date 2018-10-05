const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema({
  title: { type: String, required: true },
  body: { type: String, required: true },
  genre: {type: String, required: true},
  uId: {type: String, required: true},
  username: {type: String, required: true},
  comment: [
    {
      type: Schema.Types.ObjectId,
      ref: "Comments"
    }
  ],
  dateAdded: {type: Date, default: Date.now}
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;