const orm = require("../config/orm");
const cTable = require('console.table');

module.exports = (table, cb) => {

    orm.view(table, result => {

        console.table(result);
        cb();
    });
}