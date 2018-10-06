const db = require("../models");
const mongoose = require("mongoose");

module.exports = {

    findAll: function(req, res){
        if(req.query.uId === "true"){
            req.query.uId = req.session.userId
        };
        db.Post
            .find(req.query)
            .sort({dateAdded: -1})
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },

    findSome: function(req, res){
        db.Post
            .find({genre: req.params.genSwitch})
            .sort({dateAdded: -1})
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },

    findOne: function(req, res){
        req.params.id = mongoose.Types.ObjectId(req.params.id);
        db.Post
            .find({_id: req.params.id})
            .populate("comment")
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },

    create: function(req, res){
        db.Post 
            .create(req.body)
            .then(dbModel => {
                db.Genre.findOneAndUpdate(
                    {genre: dbModel.genre}, 
                    {$push: {post: dbModel._id}},
                    {upsert: true}
                ).then(upped => {
                    console.log("upped");
                });
                res.json(dbModel)
            })
            .catch(err => res.status(422).json(err));
    },

    update: function(req, res){
        req.body.id = mongoose.Types.ObjectId(req.body.id);
        db.Post 
            .findOneAndUpdate(
                {_id: req.body.id},
                {title: req.body.title, body: req.body.body, genre: req.body.genre}
            ).then(dbModel => {
                res.json(dbModel);
            })
            .catch(err => res.status(422).json(err));
    },

    delUpper: function(req, res){
        req.body.id = mongoose.Types.ObjectId(req.body.id);
        db.Post
            .findOneAndUpdate(
                {_id: req.body.id},
                {
                    body: req.body.body,
                    username: req.body.username,
                    deleted: req.body.deleted
                }
            ).then(dbModel =>{
                res.json(dbModel);
            })
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