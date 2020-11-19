// for working with encrypted environmental variables
require('dotenv').config();
// npm sql package connects to database and performs queries
const mysql = require('mysql2');


// create connection to MySQL database
const dbConnect = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.DB_PWD,
    database: "cms"
});


// calls connect() method on 'dbConnect' to connect to database
dbConnect.connect (err => {
    if (err) {
        return console.log(err.message);
    }
    console.log('Now connected to the MySQL database server.');
});

module.exports = dbConnect; 