const { db, pool } = require('../db/connection');
const inquirer = require('inquirer');
// const index = require('./index');

// ORDER results by employee id
const employeesById = `SELECT e.id, e.first_name, e.last_name, title, salary, dept_name, CONCAT(m.last_name, ', ', m.first_name) manager FROM employees e LEFT JOIN roles ON e.role_id = roles.id LEFT JOIN departments ON roles.dept_id = departments.id LEFT JOIN employees m ON e.manager_id = m.id;`

// ORDER results by manager
const employeesByMgr = employeesById.replace(";", ` ORDER BY manager;`)

// ORDER results by department
const employeesByDpt = employeesById.replace(";", ` ORDER BY dept_name;`)

// query user to select display option and display results
function viewEmployees(index) {
    return inquirer
        .prompt([
            {
                type: 'list',
                name: 'orderBy',
                message: 'How would you like the report to be displayed?',
                choices: [
                    {
                        name: 'order by employee id',
                        value: employeesById
                    },
                    {
                        name: 'order by manager',
                        value: employeesByMgr
                    },
                    {
                        name: 'order by department',
                        value: employeesByDpt
                    }
                ]}
        ])
        .then((selection) => {
            db.query(selection.orderBy,
                function (err, res) {
                    if (err) {
                        console.log('error: ', err);
                    }
                    // log SELECT results
                    console.table(res);
                    index();
                });
        });
};

module.exports = viewEmployees