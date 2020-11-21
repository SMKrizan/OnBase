const inquirer = require('inquirer');
require('console.table');

const viewDepts = require('./viewDepts');
const viewEmployees = require('./viewEmployees');
const viewRoles = require('./viewRoles');
const addRole = require('./addRole');
const addDept = require('./addDept');
const addEmployee = require('./addEmployee');

const index = () => {
    // prompt user to select an option
    // const selectAction = () => {
        return inquirer
            .prompt([
                {
                    type: 'list',
                    name: 'activity',
                    message: 'What would you like to do?',
                    choices: [
                        'VIEW DEPARTMENTS',
                        'VIEW ROLES',
                        'VIEW EMPLOYEES',
                        'ADD DEPARTMENT',
                        'ADD ROLE',
                        'ADD EMPLOYEE',
                        'UPDATE EMPLOYEE ROLE',
                        'EXIT'
                    ],
                },
            ])
            .then((selection) => {
                switch (selection.activity) {
                    case 'VIEW DEPARTMENTS':
                        viewDepts();
                        break;
                    case 'VIEW EMPLOYEES':
                        viewEmployees();
                        break;
                    case 'VIEW ROLES':
                        viewRoles();
                        break;
                    case 'ADD DEPARTMENT':
                        addDept();
                        break;
                    case 'ADD ROLE':
                        addRole();
                        break;
                    case 'ADD EMPLOYEE':
                        addEmployee();
                        break;
                    case 'UPDATE EMPLOYEE ROLE':
                        updateEmployee();
                        break;
                    default:
                        exit();
                }
            })
            .catch(err => {
                console.log(err);
            });
};
    // selectAction()

    // Exit the application
    // function exit() {
    //     console.log("Your session has ended.");
    //     process.exit();
    // };
// };

module.exports = index;