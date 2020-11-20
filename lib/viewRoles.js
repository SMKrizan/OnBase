const db = require('../db/connection');
const inquirer = require('inquirer');

function viewRoles(index) {

    console.log('Displaying employee roles:\n');
    db.query(`SELECT roles.id, title, salary, dept_name FROM roles
                LEFT JOIN department ON dept_id = department.id
                    ORDER BY dept_name, title`,
        function (err, res) {
            if (err) throw err;
            console.table(res);
            index();
        });
};

module.exports = viewRoles