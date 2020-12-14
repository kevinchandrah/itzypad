const express = require('express');
const router = express.Router();
const controller_user = require('../controllers/c_user');
const controller_book = require('../controllers/c_book');
const controller_episode = require('../controllers/c_episode');
const $ = require('jquery');
const fs = require('fs');

var warningMessage = "introduction_first";
var introduction_second = "introduction_second";
var introduction_third = "introduction_third";
var userStatus = "false";
var theme_web = "white";

//link pages =======================================================================================
router.get('/',
    async (req,res) => {
        //var userUsername = req.body.username;
        var search = req.session.search_data;
        delete req.session.search_data;
        if(!search){
            res.render('pages/home',{
                tasks: await controller_book.find(), 
                test: '',
                userStatus : userStatus, 
                allData : await controller_user.uFindUsername(req.session.data_user),
                alert : warningMessage,
                theme : theme_web
            });
        } else {
            res.render('pages/home',{
                tasks: await controller_book.findSearch(search), 
                test: search, 
                userStatus : userStatus,
                allData : await controller_user.uFindUsername(req.session.data_user),
                alert : warningMessage,
                theme : theme_web
            });
        }
        warningMessage = "";
    }
)
router.get('/list',
    async (req,res)=> {
        res.render('pages/list',{
            tasks : await controller_book.find(),userStatus : userStatus, 
            allData : await controller_user.uFindUsername(req.session.data_user),
            theme : theme_web
        });
    }
)
router.get('/register',
    async (req,res)=> {
        if(userStatus == "true")
            res.redirect('/');
        else 
            res.render('pages/register',{
                userStatus : userStatus, 
                allData : await controller_user.uFindUsername(req.session.data_user),
                alert : warningMessage,
                theme : theme_web
            });
        warningMessage = "";
    }
)
router.get('/login',
    async(req,res)=> {
        if(userStatus == "true")
            res.redirect('/');
        else 
            res.render('pages/login',{
                userStatus : userStatus,
                allData : await controller_user.uFindUsername(req.session.data_user),
                alert : warningMessage,
                theme : theme_web
            });
        warningMessage = "";
    }
)
router.get('/about',
    async (req,res)=> {
        res.render('pages/about',{
            userStatus : userStatus, 
            allData : await controller_user.uFindUsername(req.session.data_user),
            theme : theme_web
        });
    }
)

router.get('/description_book',
    async (req,res)=> {
        if(req.session.name_book){
            var name_book = req.session.name_book;
            const db_description_book = controller_book.findDescription(name_book);
            const db_description_episode = controller_episode.eFind(name_book);
            res.render('pages/description_book',{
                tasks : await db_description_book,
                episodes : await db_description_episode,userStatus : userStatus, 
                allData : await controller_user.uFindUsername(req.session.data_user),
                alert : introduction_second,
                theme : theme_web
            });
            delete req.session.name_book;
            introduction_second = "";
        } else {
            res.redirect('/');
        }
    }
)
router.get('/read_book',
    async(req,res)=> {
        if(req.session.read_book) {
            var data;
            try {
                data = fs.readFileSync(req.session.read_book,'utf-8');
                console.log('read data success!',data);
            } catch (err) {
                console.error(err)
            }
            res.render('pages/read_book',{
                tasks : data,
                userStatus : userStatus,
                allData : await controller_user.uFindUsername(req.session.data_user),
                alert : introduction_third,
                theme : theme_web
            });
            introduction_third = "";
        } else {
            res.redirect('/');
        }
    }
)
router.get('/user_setting',
    async(req,res)=> {
        if(userStatus == "true")
            res.render('pages/user_setting',{
                userStatus : userStatus,
                allData : await controller_user.uFindUsername(req.session.data_user),
                alert : warningMessage,
                theme : theme_web
            });
        else {
            res.redirect('/');
        }
    }
)

//redirect pages =======================================================================================
router.post('/l_home',
    async(req,res)=> {
        res.redirect('/');
    }
)
router.post('/l_list',
    async(req,res)=> {
        res.redirect('/list');
    }
)
router.post('/l_description_book',
    async(req,res)=> {
        req.session.name_book = req.body.name_book;
        //console.log(req.session.name_book);
        res.redirect('/description_book')
    }
)
router.post('/l_read_book',
    async(req,res)=> {
        req.session.read_book = req.body.link_episode;
        //console.log(req.session.read_book);
        res.redirect('read_book')
    }
)
router.post('/l_register',
    async(req,res)=> {
        res.redirect('/register');
    }
)
router.post('/l_login',
    async(req,res)=>{
        res.redirect('/login');
    }
)
router.post('/l_about',
    async(req,res)=> {
        res.redirect('/about');
    }
)
router.post('/user_setting',
    async(req,res)=> {
        res.redirect('/user_setting');
    }
)
router.post('/l_user_setting',
    async(req,res)=> {
        res.redirect('/user_setting');
    }
)
router.post('/l_user_logout',
    async(req,res)=> {
        userStatus = "false";
        delete req.session.data_user;
        res.redirect('/');
    }
)

// proses di user setting =======================================================================================
router.post('/change_password',
    async(req,res)=> {
        var old_pas = req.body.old_password;
        var new_pas = req.body.new_password;
        var new_pas_con = req.body.new_password_confirm;
        
        if(new_pas != new_pas_con){
            console.log("password tidak sama");
            warningMessage = "change_password_ide";
        } else if ( (await controller_user.uFindUsername(req.session.data_user)).length &&  (await controller_user.uFindPassword(old_pas)).length){
            console.log("data ketemu");
            controller_user.uUpdatePassword(req.session.data_user,new_pas);
            warningMessage = "change_password_suc";
        } else {
            console.log("password salah");
            warningMessage = "change_password_old";
        }
        res.redirect('/user_setting');
    }
)
router.post('/change_nickname',
    async(req,res)=> {
        var new_nick = req.body.nickname;
        controller_user.uUpdateNickname(req.session.data_user,new_nick);
        warningMessage = "change_nickname";
        res.redirect('/user_setting');
    }
)
router.post('/change_white_theme',
    async(req,res)=> {
        var data = 'white';
        controller_user.uUpdateWhite(req.session.data_user,data);
        warningMessage = "change_white_theme";
        res.redirect('/user_setting');
    }
)
router.post('/change_black_theme',
    async(req,res)=> {
        var data = 'black';
        controller_user.uUpdateBlack(req.session.data_user,data);
        warningMessage = "change_black_theme";
        res.redirect('/user_setting');
    }
)

// proses di home =======================================================================================
router.post('/search',
    async(req,res)=> {
        req.session.search_data = req.body.search;
        res.redirect('/');
    }
)
//proses di regiser =======================================================================================
router.post('/register_data',
    async(req,res)=> {
        const data_Username = req.body.username;
        const data_password = req.body.password;
        const data_Email = req.body.email;
        const data_nickname = req.body.nickname;
            
        const userCheck = controller_user.uFindUsername(data_Username);
        const emailCheck = controller_user.uFindEmail(data_Email);

        if((await userCheck).length ){
            console.log('username sudah dipakai');
            warningMessage = "register_failed_username";
            res.redirect('/register');
        }else if((await emailCheck).length) {
            console.log('email sudah dipakai');
            warningMessage = "register_failed_email";
            res.redirect('/register');
        }else if (data_password != req.body.con_password) {
            console.log('salah password');
            warningMessage = "register_failed_password";
            res.redirect('/register');
        }else{
            controller_user.uCreate(data_Username,data_password,data_Email,data_nickname);
            warningMessage = "register_Success";
            req.session.data_user = data_Username;
            req.session.loginStatus = true;
            res.redirect('/');
        }
    }
)

//proses di login =======================================================================================
router.post('/login_user',
    async(req,res)=> {
        const data_username = req.body.username;
        const data_password = req.body.password;

        if( (await controller_user.uFindUsername(data_username)).length &&  (await controller_user.uFindPassword(data_password)).length){
            userStatus = "true";
            req.session.data_user = req.body.username;
            warningMessage = "login_Success";
            res.redirect('/');
        } else {
            warningMessage = "login_Failed";
            res.redirect('/login');
        }
    }
)
module.exports = router;