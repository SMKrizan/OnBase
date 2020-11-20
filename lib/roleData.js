const db = require('../db/connection');
const index = require('../index');

const roleData = { displayRoles }

// display roles
const displayRoles = () => {
    console.log('displaying roles...\n');
    db.query(`SELECT roles.id, title, salary, dept_name FROM roles
            LEFT JOIN department ON dept_id = department.id
                ORDER BY dept_name, title`,
        function(err, res) {
            if (err) throw err;
            console.table(res);
            index.continueOrExit();               
        });
};
// WHEN I choose to add a role
// THEN I am prompted to enter:
// name
// salary
// department
// that role is then added to the database

module.exports = roleData