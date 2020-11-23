const index = require('./lib/index.js');

const init = () => {
    console.log(`
    ================================================================
       ****  Welcome to the onBase Content Management System  ****
    Please choose one of the following activities (or exit to quit):
    ================================================================
    `)
    index();
}

module.exports = init()