const index = require('./lib/index.js');
console.log('index: ', index);

const init = () => {
    console.log(`
    =======================================================
    ***** Welcome to onBase Content Management System *****
    You may choose one of the following activities or exit:
    =======================================================
    `)
    index();
}

module.exports = init()