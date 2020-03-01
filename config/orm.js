const connection = require('./connection.js');

const orm = {
    view: function (viewType, cb) {

        switch (viewType) {
            case 1:
                let queryString1 = `SELECT * FROM employees`;
                let query1 = connection.query(queryString1, (err, result) => {
                    if (err) throw err;

                    // console.log("\n", query1.sql); // display the final query string above the results
                    // console.log(result);

                    cb(result);
                });
                break;
            case 2:
                let queryString2 = `SELECT name, first_name, last_name FROM employees AS e JOIN roles AS r ON e.role_id = r.id JOIN departments AS de ON r.department_id = de.id Order BY name;`
                let query2 = connection.query(queryString2, (err, result) => {
                    if (err) throw err;

                    console.log("\n", query2.sql); // display the final query string above the results
                    // console.log(result);

                    cb(result);
                });
                break;

            case 4:
                let query4 = connection.query(`SELECT * FROM roles`, (err, result) => {
                    if (err) throw err;

                    console.log("\n", query4.sql); // display the final query string above the results
                    // console.log(result);

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
                let query1 = connection.query(queryString, ['employees', insertValues], (err, result) => {
                    if (err) throw err;

                    console.log("\n", query1.sql);

                    cb(result);
                });

                break;

            case 2:
                queryString += `(name)` + extra;
                let query2 = connection.query(queryString, ['departments', insertValues], (err, result) => {
                    if (err) throw err;

                    console.log("\n", query2.sql);

                    cb(result);
                });

                break;

            case 3:
                queryString += `(title, salary, department_id)` + extra;
                let query3 = connection.query(queryString, ['roles', insertValues], (err, result) => {
                    if (err) throw err;

                    console.log("\n", query3.sql);

                    cb(result);
                });
        }
    },

    remove: function (table, col, cb) {
        let query = connection.query(`DELETE FROM ?? WHERE id = ?`, [table, col], (err, result) => {
            if (err) throw err;

            console.log("\n", query.sql);

            cb(result);

        })
    }


}



module.exports = orm;

