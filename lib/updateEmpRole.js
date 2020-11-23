const { db, pool } = require('../db/connection');
const inquirer = require('inquirer');


// connects to database for a list of employees and their employee ids
async function employeeList() {
    return new Promise(function (resolve) {
        pool.getConnection()
            .then(connection => {
                const employees = connection.query(`SELECT employees.id, concat(first_name, ' ', last_name) Name FROM employees`)
                connection.release();
                resolve(employees)
            });
    });
};

// connects to database for a list of available roles
async function roleOptions() {
    return new Promise(function (resolve) {
        pool.getConnection()
            .then(connection => {
                const roles = connection.query(`SELECT roles.id, title FROM roles`)
                connection.release();
                resolve(roles)
            });
    });
};

// queries user with the output of 'employeeList' and 'roleOptions'
async function updateEmpRole(index) {
    let [employees, empcols] = await employeeList()
    const employee = employees.map(({ id, Name }) => ({
        name: Name + ': ' + id,
        value: id
    }));

    let [roles, rolecols] = await roleOptions()
    const role = roles.map(({ id, title }) => ({
        name: title,
        value: id
    }));

    return inquirer
        .prompt([
            {
                type: 'list',
                name: 'employees',
                message: "Select employee:",
                choices: employee
            },
            {
                type: 'list',
                name: 'roles',
                message: "Select employee's new role:",
                choices: role,
            },
            {
                type: 'confirm',
                name: 'updateManager',
                message: "Should the employee's manager also be updated?",
                default: true
            },            
            {
                type: 'list',
                name: 'managers',
                message: "Select employee's new manager:",
                choices: employee,
                when: ({ updateManager }) => {
                    if (updateManager) {
                        return true;
                    } else {
                        return false;
                    }
                }
            },
        ])
        .then(update => {
            console.log('Updating employee:');
            db.query(`UPDATE employees SET ? WHERE ?`, [{ role_id: update.roles }, { id: update.employees }],
                function (err, res) {
                    if (err) {
                        console.log('error: ', err);
                    }
                    console.log(`SUCCESS! The employee's role has been updated.\n`)
                    index();
                })
        })
        .catch(err => {
            console.log(err);
        });
};

module.exports = updateEmpRole;