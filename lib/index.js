const inquirer = require('inquirer');
require('console.table');

const viewDepts = require('./viewDepts');
const viewEmployees = require('./viewEmployees');
const viewRoles = require('./viewRoles');
const addRole = require('./addRole');
const addDept = require('./addDept');
const addEmployee = require('./addEmployee');
const updateEmployee = require('./updateEmployee');

const index = () => {
    // prompt user to select an option
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
                        viewDepts(index);
                        break;
                    case 'VIEW EMPLOYEES':
                        viewEmployees(index);
                        break;
                    case 'VIEW ROLES':
                        viewRoles(index);
                        break;
                    case 'ADD DEPARTMENT':
                        addDept(index);
                        break;
                    case 'ADD ROLE':
                        addRole(index);
                        break;
                    case 'ADD EMPLOYEE':
                        addEmployee(index);
                        break;
                    case 'UPDATE EMPLOYEE ROLE':
                        updateEmployee(index);
                        break;
                    default:
                        exit();
                }
            })
            .catch(err => {
                console.log(err);
            });
};

    // Exit the application
    // function exit() {
    //     console.log("Your session has ended.");
    //     process.exit();
    // };
// };

module.exports = index;