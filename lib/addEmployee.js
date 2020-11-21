    // manager 
    // that employee is then added to the database

const db = require('../db/connection');
const inquirer = require('inquirer');
const viewEmployees = require('./viewEmployees');


function addEmployee() {
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
                type: 'input',
                name: 'role_id',
                message: "Enter the new employee's role id (required):",
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log('the role id is required');
                        return false;
                    }
                }
            }
        ])
        .then(newEmployee => {
            console.log('newEmployee: ', newEmployee);
            console.log('Adding new employee:');
            db.query(`INSERT INTO employees SET ?`, newEmployee,
                function (err, res) {
                    if (err) throw err;
                    console.log(`SUCCESS! ${newEmployee.first_name} ${newEmployee.last_name} has been added.`)
                    viewEmployees();
                });
        });
};

module.exports = addEmployee;