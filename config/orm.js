const connection = require('./connection.js');

const orm = {
    view: function (viewType, cb) {

        switch (viewType) {
            case 1:
                let queryString1 = `SELECT * FROM employees`;
                connection.query(queryString1, (err, result) => {
                    if (err) throw err;

                    cb(result);
                });
                break;
            case 2:
                let queryString2 = `SELECT name, first_name, last_name FROM employees AS e JOIN roles AS r ON e.role_id = r.id JOIN departments AS de ON r.department_id = de.id Order BY name;`
                connection.query(queryString2, (err, result) => {
                    if (err) throw err;

                    cb(result);
                });
                break;

            case 3:
                connection.query(`SELECT * FROM roles`, (err, result) => {
                    if (err) throw err;

                    cb(result);
                });

        }
    },

    add: function (addType, insertValues, cb) {
        let queryString = 'INSERT INTO ?? ';
        let extra = ' VALUES (?)';

        switch (addType) {
            case 1:
                queryString += `(first_name, last_name, role_id, manager_id)` + extra;
                connection.query(queryString, ['employees', insertValues], (err, result) => {
                    if (err) throw err;

                    cb(result);
                });

                break;

            case 2:
                queryString += `(name)` + extra;
                connection.query(queryString, ['departments', insertValues], (err, result) => {
                    if (err) throw err;

                    cb(result);
                });

                break;

            case 3:
                queryString += `(title, salary, department_id)` + extra;
                connection.query(queryString, ['roles', insertValues], (err, result) => {
                    if (err) throw err;

                    cb(result);
                });
        }
    },

    remove: function (table, id, cb) {
        connection.query(`DELETE FROM ?? WHERE id = ?`, [table, id], (err, result) => {
            if (err) throw err;

            cb(result);
        });
    }
}


module.exports = orm;

