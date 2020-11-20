const db = require('../db/connection')

function viewDepts(index) {

    console.log('Displaying all departments:\n');
    db.query(`SELECT * FROM department;`,
        function (err, res) {
            if (err) throw err;
            console.table(res);
            // db.end();
            index();
        });

};

//     // WHEN I choose to add a department
//     // THEN I am prompted to enter:
//     // name of the department
//     // that department is then added to the database
//     const addDept = () => {
//         console.log('adding new department...\n');
//         db.query(`SET ? WHERE ?`,
//         {
//             dept_name: '',
//         },
//         function (err, res) {
//             if (err) throw err;
//             console.log('the department has been added')
//             console.table(res);
//             displayDepts();
//         });
//     };
// };



module.exports = viewDepts