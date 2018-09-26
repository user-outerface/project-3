const db = require("../models");
const mongoose = require("mongoose");

module.exports = {
    findAll: function(req, res) {
        db.Comments
          .find(req.query)
          .sort({ dateAdded: -1 })
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      },
      create: function(req, res){
          db.Comments
            .create(req.body)
            .then(dbModel =>{
                res.json(dbModel);
            });
      },
      removeMany: function(req, res){
        db.Comments
            .deleteMany({"post": req.params.id})
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
      },
      removeOne: function(req, res){
          req.params.id = mongoose.Types.ObjectId(req.params.id);
          db.Comments
            .deleteOne({_id: req.params.id})
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
      }
};