// WHEN I choose to add a role
// THEN I am prompted to enter:
// name
// salary
// department
// that role is then added to the database

const db = require('../db/connection');

function addRole(index) {

    console.log('Adding an employee role:\n');
    db.query(`SELECT roles.id, title, salary, dept_name FROM roles
                LEFT JOIN department ON dept_id = department.id
                    ORDER BY dept_name, title`,
        function (err, res) {
            if (err) throw err;
            cnsole.log('Success: a new role has been added.')
            console.table(res);
            viewRoles();
        });
};

module.exports = addRole;