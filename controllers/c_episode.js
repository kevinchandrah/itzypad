const connect_episode = require('../models/model_episode');

async function eFind(data){
    const query = {title : data};
    return await connect_episode.find(query);
}

module.exports = {
    eFind
}