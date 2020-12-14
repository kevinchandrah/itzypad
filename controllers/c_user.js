const connect_user = require('../models/model_user');

async function uFindUsername(data){
    const query = {username : data};
    return await connect_user.find(query);
}
async function uFindPassword(data){
    const query = {password : data};
    return await connect_user.find(query);
}
async function uCreate(username,password,email,nickname){
    const data_user = new connect_user({
        username : username,
        password : password,
        email : email,
        nickname : nickname,
        theme : white
    })
    return await data_user.save()
}
async function uUpdatePassword(data_user,new_data){
    const query_search = {username : data_user};
    const query_update = {password : new_data};
    return await connect_user.findOneAndUpdate(query_search,query_update);
}
async function uUpdateNickname(data_user,new_data){
    const query_search = {username : data_user};
    const query_update = {nickname : new_data};
    return await connect_user.findOneAndUpdate(query_search,query_update);
}
async function uUpdateWhite(data_user,new_data){
    const query_search = {username : data_user};
    const query_update = {theme : new_data};
    return await connect_user.findOneAndUpdate(query_search,query_update); 
}
async function uUpdateBlack(data_user,new_data){
    const query_search = {username : data_user};
    const query_update = {theme : new_data};
    return await connect_user.findOneAndUpdate(query_search,query_update);
}

async function uFindEmail(data){
    const query = {email : data};
    return await connect_user.find(query);
}

module.exports = {
    uFindUsername,
    uFindPassword,
    uFindEmail,
    uCreate,
    uUpdatePassword,
    uUpdateNickname,
    uUpdateWhite,
    uUpdateBlack
}
