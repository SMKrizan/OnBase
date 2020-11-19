const inquirer = require('inquirer');
require('console.table');
const db = require('./db');
const lib = require('./lib');

// GIVEN a command-line application that accepts user input
// WHEN I start the application

// prompt user to select an option
const selectOption = () => {
    console.log(`
    =======================================================
    Select one of the following activities or exit to quit:
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
            let selection = activityOption.choices
            switch (selection) {
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
                    addEmployee();
                    break;
                case 'Update an employee role':
                    updateEmployee();
                    break;
                default:
                    exit();
            }
        });
};
selectOption()

// AS A business owner
// THEN I am presented with a formatted table showing employee data:
//employee ids
//first names
//last names
//job titles
//departments
//salaries
//and managers that employees report to

