const inquirer = require("inquirer");
const orm = require("../config/orm");

module.exports = (cb) => {
    inquirer
        .prompt([
            {
                type: 'input',
                message: 'Enter Role Title: ',
                name: 'title'
            },
            {
                type: 'input',
                message: 'Enter Role Salary: ',
                name: 'salary'
            },
            {
                type: 'input',
                message: `Enter Role's Department ID: `,
                name: 'depid'
            }
        ])
        .then(answer => {
            let values = [answer.title, answer.salary, answer.depid];

            orm.add(3, values, (result) => {


                if (result.affectedRows === 0) {
                    console.log('\nError adding employee!\n');
                } else {
                    console.log('\nRole Successfully Added!\n');
                }
                cb();
            });
        });

}