const orm = require("../config/orm");

module.exports = (table, cb) => {

    orm.view(table, result => {
        switch (table) {
            case 'employees':
                var results = '\nEmployees:\n\n';

                result.forEach(employee => {
                    let niceString = `${employee.first_name} ${employee.last_name} \n`;
                    results += niceString;
                });

                console.log(results);
                cb();
                break;

            case 'roles':
                var results = '\nRoles:\n\n';

                result.forEach(row => {
                    let niceString = `Title: ${row.title}, Salary: ${row.salary}, Department ID: ${row.department_id} \n`;
                    results += niceString;
                });

                console.log(results);
                cb();
                break;

            case null:
                var results = '\nEmployees by Department:\n\n';

                result.forEach(row => {
                    let niceString = `${row.first_name} ${row.last_name}, ${row.name} \n`;
                    results += niceString;
                });

                console.log(results);
                cb();
                break;

            case false:
                var results = '\nBudget Utilization by Department:\n\n';

                result.forEach(row => {
                    let niceString = `${row.name}: $${row.sum}\n`;
                    results += niceString;
                });
                console.log(results);

                cb();
                break;
        }
    });
}