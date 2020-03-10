const connection = require('./connection.js');

const orm = {
    view: function (table, cb) {
        if (table) {
            let queryString = `SELECT * FROM ??`;
            connection.query(queryString, table, (err, result) => {
                if (err) throw err;

                cb(result);
            });
        } else {
            let queryString = `SELECT name, first_name, last_name FROM employees AS e JOIN roles AS r ON e.role_id = r.id JOIN departments AS de ON r.department_id = de.id Order BY name;`
            connection.query(queryString, (err, result) => {
                if (err) throw err;

                cb(result);
            });
        }
    },

    add: function (table, insertValues, cb) {
        let queryString = 'INSERT INTO ?? ';
        let extra = ' VALUES (?)';

        switch (table) {
            case "employees":
                queryString += `(first_name, last_name, role_id, manager_id)` + extra;
                break;

            case "departments":
                queryString += `(name)` + extra;
                break;

            case "roles":
                queryString += `(title, salary, department_id)` + extra;
                break;
        }

        connection.query(queryString, [table, insertValues], (err, result) => {
            if (err) throw err;

            cb(result);
        });
    },

    remove: function (table, id, cb) {
        connection.query(`DELETE FROM ?? WHERE id = ?`, [table, id], (err, result) => {
            if (err) throw err;

            cb(result);
        });
    },

    update: function (set, id, cb) {
        connection.query('UPDATE employees SET ? WHERE id=?', [set, id], (err, result) => {
            if (err) throw (err);

            cb(result);
        });
    }
}


module.exports = orm;

