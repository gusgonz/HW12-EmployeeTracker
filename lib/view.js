const orm = require("../config/orm");

module.exports = (action, cb) => {
    switch (action) {
        case 1:
            // 
            orm.view(1, result => {
                let results = '\nEmployees:\n\n';

                result.forEach(employee => {
                    let niceString = `${employee.first_name} ${employee.last_name} \n`;
                    results += niceString;
                });

                cb(results);
            });
            break;

        case 2:
            //

            orm.view(2, result => {

                let results = '\nEmployees by Department:\n\n';

                result.forEach(row => {
                    let niceString = `${row.first_name} ${row.last_name}, ${row.name} \n`;
                    results += niceString;
                });

                cb(results);
            });
            break;

        case 3:
            // 
            orm.view(3, result => {

                let results = '\nRoles:\n\n';

                result.forEach(row => {
                    let niceString = `Title: ${row.title}, Salary: ${row.salary}, Department ID: ${row.department_id} \n`;
                    results += niceString;
                });

                cb(results);
            });
            break;
    }
}