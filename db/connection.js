// for working with encrypted environmental variables
require('dotenv').config();
// npm sql package connects to database and performs queries
const mysql = require('mysql2');


// create connection to MySQL database
const connection = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.DB_PWD,
    database: "cms"
});


// calls connect() method on 'con' to connect to database
connection.connect (err => {
    if (err) {
        return console.log(err.message);
    }
    console.log('Now connected to the MySQL database server.');
});

module.exports = connection; 