//this is good boiler. We can use this for reference for later

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

    getArts: function(){
        return axios.get("/api/arti");
    },

    getArt: function(id){
        return axios.get("/api/arti/" + id);
    },

    deleteArt: function(id){
        return axios.delete("/api/arti/" + id);
    },

    saveArt: function(artData){
        return axios.post("/api/arti", artData);
    },

    upArt: function(id, artData){
        return axios.put(("/api/arti/" + id), artData);
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
    deleteManyComm: function(artiid){
        return axios.delete("/api/comm/many-del/" + artiid)
    }
};