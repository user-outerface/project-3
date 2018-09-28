const db = require("../models");
const mongoose = require("mongoose");

module.exports = {

    findAll: function(req, res){
        db.Post
            .find(req.query)
    }

}

// const postSchema = new Schema({
//     title: { type: String, required: true },
//     body: { type: String, required: true },
//     comment: [
//       {
//         type: Schema.Types.ObjectId,
//         ref: "Comments"
//       }
//     ],
//     dateAdded: {type: Date, default: Date.now}
// });