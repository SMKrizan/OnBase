const inquirer = require('inquirer');
require('console.table');

const deptData = require('./lib/deptData');
const empData = require('./lib/empData')
const roleData = require('./lib/roleData')

// prompt user to select an option
const selectAction = () => {
    console.log(`
    =======================================================
     ** Welcome to the onBase Content Management System **
    You may choose one of the following activities or exit:
    =======================================================
    `)
    return inquirer
        .prompt([
            {
                type: 'list',
                name: 'activity',
                message: 'What would you like to do?',
                choices: [
                    'View all departments', 
                    'View all roles', 
                    'View all employees',
                    'Add a department',
                    'Add a role',
                    'Add an employee',
                    'Update an employee role',
                    'Exit'
                ],
            },
        ])
        .then((selection) => {
            console.log("selection.activity: ", selection.activity)
            switch (selection.activity) {
                case 'View all departments':
                    displayDepartments();
                    break;
                case 'View all roles':
                    displayRoles();
                    break;
                case 'View all employees':
                    displayEmployees();
                    break;
                case 'Add a department':
                    addDepartment();
                    break;
                case 'Add a role':
                    addRole();
                    break;
                case 'Add an employee':
                    eaddEmployee();
                    break;
                case 'Update an employee role':
                    eupdateEmployee();
                    break;
                default:
                    exit();
            }
        });
        // .catch(err => {
        //     console.log(err);
        // });
    
};
selectAction()

// Select another CMS activity or exit the application
const continueOrExit = () => {
    return inquirer
        .prompt([
            {
                type: 'confirm',
                name: 'continueOrExit',
                message: 'Would you like to continue?',
                default: true
            }
        ])
        .then((selection) => {
            if (selection.continueOrExit) {
                selectAction();
            } else {
                exit();
            }
        });
};

// Exit the application
function exit() {
    console.log("Your session has ended.");
    process.exit();
};