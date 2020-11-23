const inquirer = require('inquirer');
require('console.table');

// connections to all files utilizing "index" as a callback function
const viewDepts = require('./viewDepts');
const viewEmployees = require('./viewEmployees');
const viewRoles = require('./viewRoles');
const budgetReport = require('./budgetReport');
const addRole = require('./addRole');
const addDept = require('./addDept');
const addEmployee = require('./addEmployee');
const updateEmployee = require('./updateEmpRole');
const deleteDept = require('./deleteDept');
const deleteRole = require('./deleteRole');
const deleteEmployee = require('./deleteEmployee');

// enables user to make selections for interacting with content management system
const index = () => {
    return inquirer
        .prompt([
            {
                type: 'list',
                name: 'activity',
                message: 'What would you like to do?',
                choices: [
                    'VIEW DEPARTMENTS',
                    'VIEW EMPLOYEES',
                    'VIEW ROLES',
                    'VIEW BUDGET REPORT',
                    'ADD EMPLOYEE',
                    'ADD DEPARTMENT',
                    'ADD ROLE',
                    'UPDATE EMPLOYEE ROLE',
                    'DELETE DEPARTMENT',
                    'DELETE EMPLOYEE',
                    'DELETE ROLE',
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
                case 'VIEW BUDGET REPORT':
                    budgetReport(index);
                    break;
                case 'ADD DEPARTMENT':
                    addDept(index);
                    break;
                case 'ADD EMPLOYEE':
                    addEmployee(index);
                    break;
                case 'ADD ROLE':
                    addRole(index);
                    break;
                case 'UPDATE EMPLOYEE ROLE':
                    updateEmployee(index);
                    break;
                case 'DELETE EMPLOYEE':
                    deleteEmployee(index);
                    break;
                case 'DELETE DEPARTMENT':
                    deleteDept(index);
                    break;
                case 'DELETE ROLE':
                    deleteRole(index);
                    break;
                default:
                    exit();
            }
        })
        .catch(err => {
            console.log(err);
        });
};

// exit the application
const exit = () => {
    console.log("Your session has ended.");
    process.exit();
};

module.exports = index;