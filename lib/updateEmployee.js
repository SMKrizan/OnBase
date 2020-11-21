const { db, pool } = require('../db/connection');
const inquirer = require('inquirer');
require('console.table');
// const mysql2 = require('mysql2/promise');
// const viewEmployees = require('./viewEmployees');
// const employeesResults = [];
// const rolesResults = [];

// WHEN I choose to update an employee role
// THEN I am prompted to:
// select an employee
// update and their new role
// this information is then updated in the database
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
                message: "Select employee (required):",
                choices: employee
            },
            {
                type: 'list',
                name: 'roles',
                message: "Select the employee's new role (required):",
                choices: role
            },
        ])
        .then(update => {
            console.log('update: ', update);
            console.log('update.employees: ', update.employees);
            console.log('update.roles: ', update.roles)
            console.log('Updating employee:');
            db.query(`UPDATE employees SET role_id = ? WHERE employees.id = ?`, update.roles, update.employees,
                function (err, res) {
                    if (err) {
                        console.log('error: ', err);
                    }
                    console.log(res)
                    console.log(`SUCCESS! The employee role has been updated.`)
                    index();
                })
        })
        .catch(err => {
            console.log(err);
        });
};

module.exports = updateEmployee;
