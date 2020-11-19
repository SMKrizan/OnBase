// route-handling npm package
const express = require('express');
// local file connection 
const db = require('./db/database');
// for working with encrypted environmental variables
require('dotenv').config();

// port designation ===============================================================================================
const PORT = process.env.PORT || 3001;
const app = express();

// local files connect
const apiRoutes = require('./routes/apiRoutes');

// middleware =====================================================================================================
// converts incoming data into key:value pairings; "false" indicates there is no nested data
app.use(express.urlencoded({ extended: false }));
// parses JSON data into req.body object
app.use(express.json());
// redirects api requests
app.use('/api', apiRoutes);

// default response for any requests not supported by the app (must follow all other requests)
app.use((req, res) => {
    res.status(400).end();
});

// starts server and indicates PORT location once connection to server is made ====================================
db.on('open', () => {
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
});