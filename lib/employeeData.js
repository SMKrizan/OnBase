const express = require('express');
const router = express.Router();
const db = require('../db/dbConnect')

// display employees
router.get('/employees', (req, res) => {
    const sql = `SELECT * FROM employees`;
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