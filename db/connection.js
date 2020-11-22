// for working with encrypted environmental variables
require('dotenv').config();
// npm sql package connects to database and performs queries
const mysql = require('mysql2');
const mysql2 = require('mysql2/promise');


// create connection to MySQL database
const db = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.DB_PWD,
    database: "cms"
});

// calls connect() method on 'db' to connect to database
db.connect(function (err) {
    if (err) {
        return console.log(err.message);
    }
    console.log('\n(now connected to the onBase database)');
});

// creates pooled connected to allow multiple queries
const pool = mysql2.createPool({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.DB_PWD,
    database: "cms",
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
  });


module.exports = { db, pool }; 