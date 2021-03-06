const db = require('../models');
const mongoose = require('mongoose');

module.exports = {

    credGiver: function(req, res){
        let credPasser;
        try{
            if(req.session.userId){
                credPasser = {
                    uId: req.session.userId,
                    uNam: req.session.userNam
                };
            } else {
                credPasser = {
                    uId: "",
                    uNam: ""
                };
            };
            res.json(credPasser);
        } catch(err){
            res.status(422).json(err);
        };
    },

    login: function(req, res){
        function cbackAuth(errIn, userIn){
            if(userIn && (errIn === null)){
                req.session.userId = userIn._id;
                req.session.userNam = userIn.username;
                res.json("/");
            } else {
                res.json("invalid");
            };
        };

        db.Users.authenticate(
            req.body.username,
            req.body.password,
            cbackAuth
        );
    },

    logout: function(req, res){
        if(req.session.userId){
            req.session.userId = "";
            req.session.userNam = "";
            res.json("/");
        } else {
            res.json("invalid");
        };
    },

    signup: function(req, res){
        var userData = {
            username: req.body.username,
            password: req.body.password
        };
        db.Users
            .create(userData)
            .then(user =>{
                req.session.userId = user._id;
                req.session.userNam = user.username;
                res.json("/");
            })
            .catch(err =>{
                res.status(422).json(err);
            }); 
    }
};