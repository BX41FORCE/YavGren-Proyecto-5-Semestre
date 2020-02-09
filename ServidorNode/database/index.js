const knex = require('knex')({
    client: 'mysql',
    connection:{
        host:'localhost',
        user: 'root',
        password: '12345',
        database:'YavGreen' 
    }
})
module.exports = knex;
