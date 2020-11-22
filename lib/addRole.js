const { db, pool } = require('../db/connection');
const inquirer = require('inquirer');
// const viewRoles = require('./viewRoles');

//UPDATE to show list of departments and dept ids in order to select dept id
function addRole(index) {
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
                    if (err) {
                        console.log('error: ', err);
                    }
                    console.log(res);
                    console.log(`SUCCESS! ${newRole.title} has been added.\n`);
                    // viewRoles();
                    index();
                });
        });

};

module.exports = addRole;