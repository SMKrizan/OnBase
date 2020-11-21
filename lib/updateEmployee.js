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
