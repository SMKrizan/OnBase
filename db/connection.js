// for working with encrypted environmental variables
require('dotenv').config();
// npm sql package connects to database and performs queries
const mysql = require('mysql2/promise');



// create connection to MySQL database
const db = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.DB_PWD,
    database: "cms"
});

const pool = mysql.createPool({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.DB_PWD,
    database: "cms",
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
  });


// calls connect() method on 'con' to connect to database
// connection.connect (err => {
//     if (err) {
//         return console.log(err.message);
//     }
//     console.log('\n(now connected to the onBase (MySQL) server)');
// });

module.exports = { db, pool }; 