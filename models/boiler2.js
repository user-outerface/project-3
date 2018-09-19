const mongoose = require("mongoose"),
    Schema = mongoose.Schema
;

const commentSchema = new Schema({
    comment: {
        type: String,
        validate: [
            function(input){
                return input.length >= 1;
            },
            "Please create a valid comment"
        ],
    },
    article: String
});

const Comments = mongoose.model("Comments", commentSchema);

module.exports = Comments;