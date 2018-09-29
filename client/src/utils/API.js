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

    deleteComm: function(commId){
        return axios.delete("/api/comm/" + commId);
    },
    deleteManyComm: function(genreid){
        return axios.delete("/api/comm/many-del/" + genreid)
    }
};