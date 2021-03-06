import axios from "axios";

export default {

    handleTermChange(term) {
        return axios.get(`https://api.giphy.com/v1/gifs/search?q=${term.replace(/\s/g, '+')}&api_key=dc6zaTOxFJmzC&rating=pg-13`);
    },

    getPosts: function(){
        return axios.get("/api/post");
    },

    getUserPosts: function(){
        const query = {
            uId: "true"
        };
        return axios.get("/api/post", {params: query});
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

    getUserComms: function(){
        const query = {
            uId: "true"
        };
        return axios.get("/api/comm", {params: query})
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
        return axios.post("/api/user/login", creds);
    },

    signup: function(creds){
        return axios.post("/api/user", creds);
    },

    logout: function(){
        return axios.get("/api/user/out");
    }
};