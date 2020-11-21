const db = require('../db/connection');
const index = require('./index');

function viewRoles() {
    
    console.log('Displaying employee roles:');
    db.query(`SELECT roles.id, title, salary, dept_name FROM roles
                LEFT JOIN departments ON dept_id = departments.id
                    ORDER BY dept_name, title`,
        function (err, res) {
            if (err) throw err;
            console.table(res)
            index();
        });
};

module.exports = viewRoles