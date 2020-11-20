const db = require('../db/connection')
const index = require('../index')
const deptData = { displayDepts, addDept }

// WHEN I choose to view all departments
// THEN I am presented with a formatted table showing:
// department names
// department ids

// display all departments
const displayDepts = () => {
    console.log('displaying departments...\n');
    db.query(`SELECT * FROM department;`,
    function (err, res) {
        if (err) throw err;
        console.table(res);
        index.continueOrExit();
    });
};

// WHEN I choose to add a department
// THEN I am prompted to enter:
// name of the department
// that department is then added to the database
const addDept = () => {
    console.log('adding new department...\n');
    db.query(`SET ? WHERE ?`,
    {
        dept_name: '',
    },
    function (err, res) {
        if (err) throw err;
        console.log('the department has been added')
        console.table(res);
        displayDepts();
    });
};

module.exports = deptData