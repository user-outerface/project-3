const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const genreSchema = new Schema({
  genre: { type: String, required: true },
  link: { type: String, required: true },
  post: [
    {
      type: Schema.Types.ObjectId,
      ref: "Post"
    }
  ],
  date: { type: String, default: "000000 000" },
  dateAdded: {type: Date, default: Date.now}
});

const Genre = mongoose.model("Genre", genreSchema);

module.exports = Genre;
