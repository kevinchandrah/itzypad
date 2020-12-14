const connect_book = require('../models/model_book');

async function find(){
    return await connect_book.find({});
}
async function findSearch(data){
    //const query = {$text: {$search: data}};
    /*console.log(connect_book.find({ $text: { $search: data } }));
    try{
        return await connect_book.find({ $text: { $search: data } });

    } catch {
        console.log("fail (tidak ada salah)");
    }*/
    return await connect_book.find({});
    
    /*const query ={title: data};
    return await connect_book.find(query);*/

}
async function findDescription(data){
    const query = {title: data};
    return await connect_book.find(query);
}


module.exports = {
    find,
    findSearch,
    findDescription
}