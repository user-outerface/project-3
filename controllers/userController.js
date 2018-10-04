const db = require('../models');
const mongoose = require('mongoose');

module.exports = {

    credGiver: function(req, res){
        let credPasser;
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
    },

    login: function(req, res){
        function cbackAuth(errIn, userIn){
            if(userIn && (errIn === null)){
                req.session.userId = userIn.id;
                req.session.userNam = userIn.userNam;
                res.json("/");
            } else {
                res.json("invalid");
            };
        };

        db.Users.authenticate(
            req.body.username,
            req.body.password,
            cbackAuth
        ).catch(err =>{
            res.status(422).json(err);
        });
    },

    signup: function(req, res){
        if(req.body.username &&
            req.body.password){
                var userData = {
                    username: req.body.username,
                    password: req.body.password
                };
                try{
                    db.Users
                        .create(userData, function(err, user){
                            if(err){
                                console.log(err);
                                res.json("invalid");
                            } else {
                                req.session.userId = user._id;
                                req.session.userNam = user.username;
                            };
                        }).catch(err =>{
                            res.status(422).json(err);
                        });
                } catch(err){
                    res.json("/login");
                };
            };
    }
};