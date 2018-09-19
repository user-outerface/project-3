const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const articleSchema = new Schema({
  _id: {
    type: Object,
    unique: true, 
    required: true,
    validate: {
      validator: function(id){
        mongoose.Types.ObjectId.isValid(id);
      },
      message: "This is not a valid id"
    }
  },
  headline: { type: String, required: true },
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

const Article = mongoose.model("Article", articleSchema);

module.exports = Article;
