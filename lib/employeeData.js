const db = require('../db/dbConnect')

// WHEN I choose to view all employees
// THEN I am presented with employee data, including:
// employee ids
// first names
// last names
// job titles
// departments
// salaries
// and managers that employees report to

// display employees
displayEmployees = () => {
    console.log('displaying employees...\n');
    const sql = 'SELECT id, first_name, last_name FROM employees'
                'LEFT JOIN employees ON employees.manager_id = employees.id AS [Reports to]'
                'LEFT JOIN roles ON employees.role_id = roles.title AS [Job Title]'
                'LEFT JOIN roles ON employees.role_id = roles.salary AS [Salary]';
                'LEFT JOIN department ON roles.dept_id = department.dept_name AS [Department]'
    const params = [];
    db.all(sql, params, (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json({
            message: 'success',
            data: rows
        });
      // Log all results of the SELECT statement
      console.log(res);
      connection.end();
    });
};

// WHEN I choose to add an employee
// THEN I am prompted to enter:
// first name
// last name
// role
// manager 
// that employee is then added to the database

// addEmployee = () => {
//     console.log('adding new employee...\n');
//     const query = connection.query(
//       'SET ? WHERE ?',
//       {
//         first_name: '',
//         last_name: '',
//         role: '',
//         manager: ''
//       },
//       function(err, res) {
//         if (err) throw err;
//         console.log(res.affectedRows + ' product inserted!\n');
//         // Call updateProduct() AFTER the INSERT completes
//         updateProduct();
//       }
//     );
//     // logs the actual query being run
//     console.log(query.sql);
//   };
  

// WHEN I choose to update an employee role
// THEN I am prompted to:
// select an employee
// update and their new role
// this information is then updated in the database

// updateEmployee = () => {
//     console.log('Updating employee...\n');
//     const query = connection.query(
//       'UPDATE employees SET ? WHERE ?',
//       [
//         {
//           id: ''
//         },
//         {
//           role: ''
//         }
//       ],
//       function(err, res) {
//         if (err) throw err;
//         console.log(res.affectedRows + ' products updated!\n');
//         // Call deleteProduct() AFTER the UPDATE completes
//         deleteProduct();
//       }
//     );
//     // logs the actual query being run
//     console.log(query.sql);
//   };
  

module.exports = displayEmployees;