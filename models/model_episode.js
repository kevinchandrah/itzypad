const mongoose = require('mongoose');
const { Int32 } = require('mongodb');

const episodeSchema = new mongoose.Schema({
    title: String,
    title_episode: String,
    episode: Number,
    html_book: String
});

const episode = mongoose.model('episode',episodeSchema);
module.exports = episode;