const db = require('../db/connection')

const index = require('../index')

// WHEN I choose to view all departments
// THEN I am presented with a formatted table showing:
// department names
// department ids

// WHEN I choose to add a department
// THEN I am prompted to enter:
// name of the department
// that department is then added to the database

// display database
const displayDepts = () => {
    console.log('displaying departments...\n');
    db.query(`SELECT * FROM departments;`,
    function (err, res) {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        console.log(res);
        index.continueOrExit();
    });
};

module.exports = displayDepts();