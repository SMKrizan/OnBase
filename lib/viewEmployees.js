const { db, pool } = require('../db/connection');
// const index = require('./index');

function viewEmployees(index) {

    console.log('Displaying employee data:');
    db.query(`SELECT e.id, e.first_name, e.last_name, title, salary, dept_name, CONCAT(m.first_name, ' ', m.last_name) 'reports to:'
                FROM employees e
                LEFT JOIN roles ON e.role_id = roles.id         
                LEFT JOIN departments ON roles.dept_id = departments.id
                LEFT JOIN employees m ON e.manager_id = m.id;`,
        function (err, res) {
            if (err) {
                console.log('error: ', err);
            }
            // log SELECT results
            console.table(res);
            index();
        });
};

module.exports = viewEmployees