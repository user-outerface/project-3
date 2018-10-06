const db = require("../models");
const mongoose = require("mongoose");

module.exports = {
    findAll: function(req, res) {
        if(req.query.uId === "true"){
            req.query.uId = req.session.userId
        };
        db.Comments
          .find(req.query)
          .sort({ dateAdded: -1 })
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
    },
    create: function(req, res){
        db.Comments
        .create(req.body.comment)
        .then(dbModel =>{
            db.Post.findOneAndUpdate(
                {_id: req.body.id},
                {$push: {comment: dbModel._id} }
            ).then(upped =>{
                console.log("upped");
            })
            .catch(err => console.log(err));
            res.json(dbModel);
        })
        .catch(err => res.status(422).json(err));
    },
    removeMany: function(req, res){
        db.Comments
            .deleteMany({"post": req.params.id})
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    removeOne: function(req, res){
        req.params.cId = mongoose.Types.ObjectId(req.params.cId);
        req.params.pId = mongoose.Types.ObjectId(req.params.pId);
        db.Post.findOneAndUpdate(
            {_id: req.params.pId},
            {$pull: {comment: req.params.cId}}
        )
        .then(dbModel => {
            db.Comments
                .deleteOne({_id: req.params.cId})
                .catch(err => console.log(err));
            res.json(dbModel);
        })
        .catch(err => res.status(422).json(err));
    },
    update: function(req, res){
        req.body.id = mongoose.Types.ObjectId(req.body.id);
        db.Comments
            .findOneAndUpdate(
                {_id: req.body.id},
                {comment: req.body.comment}
            )
            .then(dbModel =>{
                res.json(dbModel);
            })
            .catch(err => res.status(422).json(err));
    }
};