// npm sql package connects to database and performs queries
const mysql = require('mysql2');

// create connection to MySQL database
const dbconnect = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.ROOT,
    password: process.env.PWD,
    database: "cms"
});


// calls connect() method on 'connection' to connect to database
dbconnect.connect (err => {
    if (err) {
        return console.log(err.message);
    }
    console.log('Now connected to the MySQL server.');
});

module.exports = dbconnect;