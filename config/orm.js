const connection = require('./connection.js');

const orm = {
    view: function (viewType, col, table) {

        let queryString = `SELECT ?? FROM ??`;
        let groupBy = ' GROUP BY ??';
        switch (viewType) {
            case 1:
                connection.query('SELECT ?? FROM ??')
                break;
            case 2:
                break;
            case 
        }
    }
}



module.exports = orm;

