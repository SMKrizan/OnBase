const express = require('express');
const router = express.Router();
const db = require('../../db/database')

// display database
router.get('/cms', (req, res) => {
    const sql = `SELECT * FROM CMS`
})