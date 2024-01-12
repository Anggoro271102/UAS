const mysql = require('mysql');
const env = require('dotenv');
const util = require('util');
env.config()


const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});



connection.connect((err) => {
    if(err){
        console.log(Error, err);
    }
    console.log("Database sudah bisa digunakan");
});

connection.query = util.promisify(connection.query).bind(connection)

module.exports = connection