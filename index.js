const express = require ('express');
const bodyParses = require('body-parser');
const session = require('express-session');
const layouts = require('express-ejs-layouts');

const mongoose = require('mongoose');
const url = 'mongodb+srv://itzypad:wpuntar2020@cluster0.gw8jt.mongodb.net/itzypad?retryWrites=true&w=majority';
mongoose.connect(url,{useNewUrlParser: true, useUnifiedTopology: true});
const port = process.env.PORT || 3000 //local ganti jadi 3000

const db = mongoose.connection;
db.once('open', () => {
    console.log('Connected');
})

const app = express();
app.set('view engine','ejs');

app.use(session({
    secret: 'som3_s3cret_key5',
    cookie: {}
}))

app.use(bodyParses.urlencoded());
app.use(express.static('public'));

app.use('/css', express.static(__dirname + 'public/css'));
app.use('/js', express.static(__dirname + 'public/js'));
app.use('/asset', express.static(__dirname + 'public/asset'));

app.use(layouts);
app.set('layout', 'layouts/main.ejs');

app.set('layout extractStyles', true);
app.set('layout extracScripts', true);

const indexRoutes = require('./routes/index_page');

app.use('/',indexRoutes);

app.listen(3000);
// local =>  console.log('server run at port 3000....');

app.listen(port,() => {
    console.log(`Server running at port `+port);
});