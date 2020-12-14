const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    username: String,
    password: String,
    email: String,
    nickname: String,
    theme: String
});

const user = mongoose.model('user',userSchema);
module.exports = user;