// npm sql package connects to database and performs queries
const mysql = require('mysql2');

// connects application to mysql2 database
const db = new mysql.Database('./db/cms.db', err => {
    if (err) {
        return console.log(err.message);
    }
    console.log('Now connected to the CMS database.');
});

module.exports = db;