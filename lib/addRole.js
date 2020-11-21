const db = require('../db/connection');
const inquirer = require('inquirer');

const viewRoles = require('./viewRoles');

function addRole() {
    return inquirer
        .prompt([
            {
                type: 'input',
                name: 'title',
                message: "Enter the new role title (required):",
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log('Enter title of new role:');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'salary',
                message: "Enter a salary cap for the new role (required):",
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log('Enter max salary rate:');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'dept_id',
                message: "Enter a department id for the new role:",
            }
        ])
        .then(newRole => {
            console.log('Adding new employee role:');
            db.query(`INSERT INTO roles SET ?`, newRole,
                function (err, res) {
                    if (err) throw err;
                    console.log(`SUCCESS! ${newRole.title} has been added.`)
                    // viewRoles();
                    viewRoles();
                });
        });

};

module.exports = addRole;