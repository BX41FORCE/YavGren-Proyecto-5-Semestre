const knex = require('knex')({
    client: 'mysql',
    connection:{
        host:'localhost',
        user: 'root',
        password: '123456789',
        database:'YavGreen' 
    }
})
module.exports = knex;
