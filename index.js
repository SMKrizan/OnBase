const inquirer = require('inquirer');
require('console.table');
// const db = require('./db');
const emp = require('./lib/empData');
const role = require('./lib/roleData');
const dept = require('./lib/deptData');


// prompt user to select an option
const selectOption = () => {
    console.log(`
    =======================================================
    Select one of the following activities or exit:
    =======================================================
    `)
    return inquirer
        .prompt([
            {
                type: 'list',
                name: 'activityOption',
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
                ]
            }
        ])
        .then(selection => {
            switch (selection.choices) {
                case 'View all departments':
                    dept.displayDepartments();
                    break;
                case 'View all roles':
                    role.displayRoles();
                    break;
                case 'View all employees':
                    emp.displayEmployees();
                    break;
                case 'Add a department':
                    dept.addDepartment();
                    break;
                case 'Add a role':
                    role.addRole();
                    break;
                case 'Add an employee':
                    emp.addEmployee();
                    break;
                case 'Update an employee role':
                    emp.updateEmployee();
                    break;
                default:
                    exit();
            }
        });
};
selectOption()

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
            if (selection.continueOrExit === true) {
                selectOption();
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


// AS A business owner
// THEN I am presented with a formatted table showing employee data:
//employee ids
//first names
//last names
//job titles
//departments
//salaries
//and managers that employees report to


module.exports = continueOrExit();