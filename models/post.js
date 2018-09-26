const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema({
  post: { type: String, required: true },
  link: { type: String, required: true },
  comment: [
    {
      type: Schema.Types.ObjectId,
      ref: "Comments"
    }
  ],
  date: { type: String, default: "000000 000" },
  dateAdded: {type: Date, default: Date.now}
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;