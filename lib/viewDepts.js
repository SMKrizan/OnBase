const db = require('../db/connection');
const index2 = require('./index.js');
console.log('index2: ', index2)

function viewDepts() {

    console.log('Displaying all departments:');
    db.query(`SELECT * FROM departments;`,
        function (err, res) {
            if (err) throw err;
            console.table(res);
            // db.end();
            index();
        });

};

module.exports = viewDepts