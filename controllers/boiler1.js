const db = require("../models");
const mongoose = require("mongoose");

// Defining methods for the artiController
module.exports = {
  findAll: function(req, res) {
    db.Article
      .find(req.query)
      .populate("comment")
      .sort({ dateAdded: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    req.params.id = mongoose.Types.ObjectId(req.params.id);
    db.Article
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    req.body._id = mongoose.Types.ObjectId(req.body._id);
    db.Article
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    req.params.id = mongoose.Types.ObjectId(req.params.id);
    db.Article
      .findOneAndUpdate({ _id: req.params.id }, {
        $push: {comment: req.body}
      }, { new: true })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    req.params.id = mongoose.Types.ObjectId(req.params.id);
    db.Article
      .deleteOne({_id: req.params.id})
      .then(dbModel => {
        dbModel.idPass = req.params.id;
        res.json(dbModel)
      })
      .catch(err => res.status(422).json(err));
  }
};
