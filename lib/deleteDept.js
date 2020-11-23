const { db, pool } = require('../db/connection');
const inquirer = require('inquirer');
// const viewDepts = require('./viewDepts');

// connects to database for a list of current departments
async function deptList() {
    return new Promise(function (resolve) {
        pool.getConnection()
            .then(connection => {
                const depts = connection.query(`SELECT departments.id, dept_name FROM departments`)
                connection.release();
                resolve(depts)
            });
    });
};

async function deleteDept(index) {
    let [depts, deptcols] = await deptList()
    const dept = depts.map(({ id, dept_name }) => ({
        name: dept_name,
        value: id
    }));

    return inquirer
        .prompt([
            {
                type: 'list',
                name: 'dept_name',
                message: "Select department for deletion:",
                choices: dept
            }
        ])
        .then(delDept => {
            console.log('Deleting department:');
            db.query(`DELETE FROM departments WHERE id = ?`, delDept.dept_name,
                function (err, res) {
                    if (err) {
                        console.log('error: ', err);
                    }
                    console.log(`SUCCESS! The department has been deleted.\n`);
                    index();
                })
        })
        .catch(err => {
            console.log(err);
        });


};

module.exports = deleteDept;