const { db, pool } = require('../db/connection');
const inquirer = require('inquirer');
// const viewDepts = require('./index');

// connects to database for a list of current departments
async function rolesList() {
    return new Promise(function (resolve) {
        pool.getConnection()
            .then(connection => {
                const roles = connection.query(`SELECT roles.id, title FROM roles`)
                connection.release();
                resolve(roles)
            });
    });
};

async function deleteRole(index) {
    let [roles, rolcols] = await rolesList()
    const role = roles.map(({ id, title }) => ({
        name: title,
        value: id
    }));

    return inquirer
        .prompt([
            {
                type: 'list',
                name: 'title',
                message: "Select role title for deletion:",
                choices: role
            }
        ])
        .then(delRole => {
            console.log('Deleting role:');
            db.query(`DELETE FROM roles WHERE id = ?`, delRole.title,
                function (err, res) {
                    if (err) {
                        console.log('error: ', err);
                    }
                    console.table('res', res)
                    console.log(`SUCCESS! ${delRole.title} has been deleted.\n`);
                    index();
                })
        })
        .catch(err => {
            console.log(err);
        });


};

module.exports = deleteRole;