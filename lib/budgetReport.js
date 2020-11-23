// View the total utilized budget of a department—i.e., the combined salaries of all employees in that department.

const { db, pool } = require('../db/connection');
const inquirer = require('inquirer');

// connects to database to view total utilized dept budget; the combined salaries of all employees in that department.
function budgetReport(index) {
    console.log('Displaying total salary budgets by department:');
    db.query(
        `SELECT dept_name, SUM(salary) 'total dept salary budget'
        FROM employees
        INNER JOIN roles ON role_id = roles.id
        LEFT JOIN departments ON dept_id = departments.id
        GROUP BY dept_name WITH ROLLUP;`,
        function (err, res) {
            if (err) {
                console.log('error: ', err);
            }
            console.table(res)
            index();
        });
};

module.exports = budgetReport;