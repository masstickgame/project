var knex = require('knex')({
    client: 'pg',
    connection: {
        host: '38.17.53.108',
        port : 19888,
        user: 'mas',
        password: '123456789',
        database: 'transfer_courses1'
    }
});


knex.raw("SELECT 1").then(() => {
        console.log("Database connected");
    })
    .catch((e) => {
        console.log("Database Not connected");
        console.error(e);
    });


module.exports.knex = knex;