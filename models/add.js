const inquirer = require("inquirer");
const orm = require("../config/orm");


module.exports = (table, cb) => {
    let questions;

    switch (table) {
        case 'employees':
            questions =
                [{
                    type: 'input',
                    message: 'Enter Employee First Name: ',
                    name: 'first_name'
                },
                {
                    type: 'input',
                    message: 'Enter Employee Last Name: ',
                    name: 'last_name'
                },
                {
                    type: 'input',
                    message: 'Enter Employee Role ID: ',
                    name: 'roleid'
                },
                {
                    type: 'input',
                    message: `Enter the Employee's Manager ID:  
              (Enter 'n' if this employee doesn't have a manager)`,
                    name: 'managerid'
                }];
            break;

        case 'departments':
            questions =
                [{
                    type: 'input',
                    message: 'Enter Department Name: ',
                    name: 'name'
                }];
            break;

        case 'roles':
            questions =
                [{
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
                }];
            break;


    }

    inquirer
        .prompt(questions)
        .then(answer => {
            let values;

            switch (table) {
                case 'employees':
                    values = [answer.first_name, answer.last_name, answer.roleid, (answer.managerid === 'n' ? null : answer.managerid)];
                    break;

                case 'departments':
                    values = [answer.name];
                    break;

                case 'roles':
                    values = [answer.title, answer.salary, answer.depid];
                    break;
            }

            orm.add(table, values, (result) => {
                if (result.affectedRows === 0) {
                    console.log('\nError adding!\n');
                } else {
                    console.log('\nSuccessfully Added!\n');
                }
                cb();
            });
        });
}