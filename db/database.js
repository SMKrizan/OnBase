// npm sql package connects to database and performs queries
const mysql = require('mysql2');

//
const db = require('db');

// create connection to MySQL database
const connection = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.ROOT,
    password: process.env.PWD,
    database: CMS
});


// calls connect() method on 'connection' to connect to database
connection.connect (err => {
    if (err) {
        return console.log(err.message);
    }
    console.log('Now connected to the MySQL server.');
});

module.exports = connection;