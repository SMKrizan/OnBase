const express = require('express');
const router = express.Router();
const db = require('../db/connection')

// WHEN I choose to view all roles
// THEN I am presented with:
// job title
// role id
// department
// salary

// WHEN I choose to add a role
// THEN I am prompted to enter:
// name
// salary
// department
// that role is then added to the database



// display roles
db.connect('/roles', (req, res) => {
    const sql = `SELECT * FROM roles`;
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
    });
});

module.exports = router;