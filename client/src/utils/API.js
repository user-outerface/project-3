// this is good boiler. We can use this for reference for later

import axios from "axios";

export default {
    // searchArtics: (urlPass) =>{
    //     const {Topic, StartYear, EndYear} = urlPass;
    //     let startPass = StartYear;
    //     let endPass = EndYear;
    //     return (axios.get(`https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=${nyArty}&q=${Topic}&begin_date=${startPass}0101&end_date=${endPass}1231`));
    // },

    getTopics: function(){
        return axios.get("/api/topic");
    },

    getTopic: function(id){
        return axios.get("/api/topic/" + id);
    },

    deleteTopic: function(id){
        return axios.delete("/api/topic/" + id);
    },

    saveTopic: function(topicData){
        return axios.post("/api/topic", topicData);
    },

    upTopic: function(id, topicData){
        return axios.put(("/api/topic/" + id), topicData);
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
    deleteManyComm: function(topicid){
        return axios.delete("/api/comm/many-del/" + topicid)
    }
};