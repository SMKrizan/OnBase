const { db, pool } = require('../db/connection');
// const index = require('./index');

function viewRoles(index) {
    
    console.log('Displaying employee roles:');
    db.query(`SELECT roles.id, title, salary, dept_name FROM roles
                LEFT JOIN departments ON dept_id = departments.id`,
        function (err, res) {
            if (err) {
                console.log('error: ', err);
            }
            console.table(res)
            index();
        });
};

module.exports = viewRoles