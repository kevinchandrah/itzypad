const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    _id: String,
    title: String,
    description: String,
    genre: String,
    artist: String,
    author: String,
    recommendation: String,
    year: String,
    cover: String,
    html_book: String
});

const book = mongoose.model('book',bookSchema);
book.createIndexes();
module.exports = book;



//input data
/*
const User = mongoose.model('book', userSchema);

const testUser = new User({
    username:'teja',
    email:'testing@mail.com',
    password:'123'
});
*/
//get all data

//const book = mongoose.model('book',bookSchema);
/*
const testBook = new book({
    title: 'aaa',
    description: 'a',
    genre: 'ad',
    artist: 'ae',
    author: 'ar',
    recommendation: 'ax',
    year: 'ac',
    cover: 'aa',
    html_book: 'as'
});
testBook.save;*/
/*
const checkAll = book.find();
checkAll.exec((err,book) =>{
    if(book) console.log(book);
})*/


//testUser.save();