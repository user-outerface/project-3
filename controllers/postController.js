const db = require("../models");
const mongoose = require("mongoose");

module.exports = {

    findAll: function(req, res){
        db.Post
            .find(req.query)
            .sort({dateAdded: -1})
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },

    create: function(req, res){
        db.Post 
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }

};

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