const inquirer = require('inquirer');
require('console.table');

const viewDepts = require('./viewDepts');
const viewEmployees = require('./viewEmployees');
const viewRoles = require('./viewRoles');
const addRole = require('./addRole');

const index = () => {

    // prompt user to select an option
    const selectAction = () => {
        console.log(`
    =======================================================
    ***** Welcome to onBase Content Management System *****
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
                        addDepartment();
                        break;
                    case 'ADD ROLE':
                        addRole(viewRoles);
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
            });
        // .catch(err => {
        //     console.log(err);
        // });

    };

    selectAction()

    // // Select another CMS activity or exit the application
    // const continueOrExit = () => {
    //     return inquirer
    //     .prompt([
    //         {
    //             type: 'confirm',
    //             name: 'continueOrExit',
    //             message: 'Would you like to continue?',
    //             default: true
    //             }
    //         ])
    //         .then((selection) => {
    //             if (selection.continueOrExit) {
    //                 selectAction();
    //             } else {
    //                 exit();
    //             }
    //         });
    // };

    // Exit the application
    // function exit() {
    //     console.log("Your session has ended.");
    //     process.exit();
    // };
};

module.exports = index;