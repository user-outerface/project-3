// this is good boiler. We can use this for reference for later

import axios from "axios";

export default {
    // searchArtics: (urlPass) =>{
    //     const {Topic, StartYear, EndYear} = urlPass;
    //     let startPass = StartYear;
    //     let endPass = EndYear;
    //     return (axios.get(`https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=${nyArty}&q=${Topic}&begin_date=${startPass}0101&end_date=${endPass}1231`));
    // },

    handleTermChange(term) {
        return axios.get(`http://api.giphy.com/v1/gifs/search?q=${term.replace(/\s/g, '+')}&api_key=dc6zaTOxFJmzC&limit=1`);
    },

    getPosts: function(){
        return axios.get("/api/post");
    },

    getSomePosts: function(genSwitch){
        return axios.get("/api/post/some/" + genSwitch);
    },

    getPost: function(id){
        return axios.get("/api/post/one/" + id);
    },

    makePost: function(postData){
        return axios.post("/api/post", postData);
    },

    editPost: function(postData){
        return axios.put("/api/post", postData);
    },
    //don't forget to scrub the user data too later
    delUpper: function(postData){
        return axios.put("/api/post/scrubbed", postData);
    },

    getGenres: function(){
        return axios.get("/api/genre");
    },

    getGenre: function(id){
        return axios.get("/api/genre/" + id);
    },

    deleteGenre: function(id){
        return axios.delete("/api/genre/" + id);
    },

    saveGenre: function(genreData){
        return axios.post("/api/genre", genreData);
    },

    upGenre: function(id, genreData){
        return axios.put(("/api/genre/" + id), genreData);
    },

    getComms: function(){
        return axios.get("/api/comm");
    },
    
    saveComm: function(commData){
        return axios.post("/api/comm", commData);
    },

    upComm: function(commData){
        return axios.put("/api/comm", commData);
    },

    deleteComm: function(comser){
        return axios.delete("/api/comm/" + comser.postId + "/" + comser.commId);
    },

    deleteManyComm: function(genreid){
        return axios.delete("/api/comm/many-del/" + genreid)
    },

    getCreds: function(){
        return axios.get("/api/user/creds");
    },

    login: function(creds){
        console.log("user log in");
        return axios.post("/api/user/login", creds);
    },

    signup: function(creds){
        console.log("user sign up");
        return axios.post("/api/user", creds);
    }
};