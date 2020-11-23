const { db, pool } = require('../db/connection');
const inquirer = require('inquirer');
// const viewDepts = require('./index');

// connects to database for a list of current departments
async function empList() {
    return new Promise(function (resolve) {
        pool.getConnection()
            .then(connection => {
                const employees = connection.query(`SELECT employees.id, CONCAT(first_name, ' ', last_name) AS Name FROM employees`)
                connection.release();
                resolve(employees)
            });
    });
};

async function deleteEmployee(index) {
    let [employees, empcols] = await empList()
    const employee = employees.map(({ id, Name }) => ({
        name: Name,
        value: id
    }));

    return inquirer
        .prompt([
            {
                type: 'list',
                name: 'Name',
                message: "Select employee for deletion:",
                choices: employee
            }
        ])
        .then(delEmp => {
            console.log('Deleting employee:');
            db.query(`DELETE FROM employees WHERE id = ?`, delEmp.Name,
                function (err, res) {
                    if (err) {
                        console.log('error: ', err);
                    }
                    console.table('res', res)
                    console.log(`SUCCESS! The employee has been deleted.\n`);
                    index();
                })
        })
        .catch(err => {
            console.log(err);
        });


};

module.exports = deleteEmployee;