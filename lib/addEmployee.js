const { db, pool } = require('../db/connection');
const inquirer = require('inquirer');

// connects to database for a list of roles
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

// connects to database for a list of possible managers and their employee ids
async function managerList() {
    return new Promise(function (resolve) {
        pool.getConnection()
            .then(connection => {
                const managers = connection.query(`SELECT employees.id, concat(first_name, ' ', last_name) Manager FROM employees`)
                connection.release();
                resolve(managers)
            });
    });
};

// prompts user for input to add a new employee
async function addEmployee(index) {
    let [roles, rolecols] = await roleOptions()
    const role = roles.map(({ id, title }) => ({
        name: title,
        value: id
    }));

    let [managers, mgrcols] = await managerList()
    const manager = managers.map(({ id, Manager }) => ({
        name: Manager + ': ' + id,
        value: id
    }));

    return inquirer
        .prompt([
            {
                type: 'input',
                name: 'first_name',
                message: "Enter the new employee's first name (required):",
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log('a first name is required');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'last_name',
                message: "Enter the new employee's last name (required):",
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log('a last name is required');
                        return false;
                    }
                }
            },
            {
                type: 'list',
                name: 'role_id',
                message: "Select new employee's role:",
                choices: role
            },
            {
                type: 'list',
                name: 'manager_id',
                message: "Select new employee's manager:",
                choices: manager
            }
        ])
        .then(newEmployee => {
            console.log('Adding new employee:');
            db.query(`INSERT INTO employees SET ?`, newEmployee,
                function (err, res) {
                    if (err) {
                        console.log('error: ', err);
                    }
                    console.log(`SUCCESS! ${newEmployee.first_name} ${newEmployee.last_name} has been added.\n`)
                    index();
                });
        });
};

module.exports = addEmployee;