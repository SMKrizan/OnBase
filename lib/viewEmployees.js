const { db, pool } = require('../db/connection');
// const index = require('./index');

// WHEN I choose to view all employees
// THEN I am presented with employee data, including:
// and managers that employees report to
function viewEmployees(index) {

    console.log('Displaying employee data:');
    db.query(`SELECT employees.id, first_name, last_name, title, salary, dept_name
                FROM employees
                LEFT JOIN roles ON employees.role_id = roles.id
                LEFT JOIN departments ON roles.dept_id = departments.id
                ORDER BY dept_name, last_name;`,
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