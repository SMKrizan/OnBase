const { db, pool } = require('../db/connection');
const inquirer = require('inquirer');
require('console.table');


// connects to database for a list of employees and their employee ids
async function employeeList() {
    return new Promise (function(resolve) {
        pool.getConnection()
            .then(connection => {
                const employees = connection.query(`SELECT employees.id, concat(first_name, ' ', last_name) Name FROM employees`)
                connection.release();
                console.log('employees: ', employees);
                resolve(employees)
            });
    });
};

// connects to database for a list of available roles
async function roleOptions() {
    return new Promise (function(resolve) {
        pool.getConnection()
           .then(connection => {
               const roles = connection.query(`SELECT roles.id, title FROM roles`)
               connection.release();
               console.log('roles: ', roles);
               resolve(roles)
           });
    });
};

// queries user with the output of 'employeeList' and 'roleOptions'
async function updateEmployee(index) {
    let [employees, empcols] = await employeeList()
    console.log('employees: ', employees)
    const employee = employees.map(({id, Name}) => ({
        name: Name + ': ' + id,
        value: id
    }));

    let [roles, rolecols] = await roleOptions()
    console.log('roles: ', roles)
    const role = roles.map(({id, title}) => ({
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
                choices: role
            },
        ])
        .then(update => {
            console.log('Updating employee:');
            db.query(`UPDATE employees SET ? WHERE ?`, [{role_id: update.roles}, {id: update.employees}],
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

module.exports = updateEmployee;
