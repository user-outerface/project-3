const db = require("../models");
const mongoose = require("mongoose");

// Defining methods for the genreController
module.exports = {
  findAll: function(req, res) {
    db.Genre
      .find(req.query)
      .sort({ dateAdded: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    req.params.id = mongoose.Types.ObjectId(req.params.id);
    db.Genre
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    req.body._id = mongoose.Types.ObjectId(req.body._id);
    db.Genre
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    req.params.id = mongoose.Types.ObjectId(req.params.id);
    db.Genre
      .findOneAndUpdate({ _id: req.params.id }, {
        $push: {post: req.body}
      }, { new: true })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    req.params.id = mongoose.Types.ObjectId(req.params.id);
    db.Genre
      .deleteOne({_id: req.params.id})
      .then(dbModel => {
        dbModel.idPass = req.params.id;
        res.json(dbModel)
      })
      .catch(err => res.status(422).json(err));
  }
};
