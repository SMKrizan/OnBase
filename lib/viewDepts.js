const { db, pool } = require('../db/connection');
// const index2 = require('./index.js');
// console.log('index2: ', index2)

function viewDepts(index) {

    console.log('Displaying all departments:');
    db.query(`SELECT * FROM departments;`,
        function (err, res) {
            if (err) {
                console.log('error: ', err);
            } 
            console.table(res);
            // db.end();
            index();
        });
};

module.exports = viewDepts