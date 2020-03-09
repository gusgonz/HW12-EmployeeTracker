const inquirer = require("inquirer");
const orm = require("../config/orm");

module.exports = (cb) => {
    inquirer
        .prompt([
            {
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
            }
        ])
        .then(answer => {
            let values = [answer.first_name, answer.last_name, answer.roleid, (answer.managerid === 'n' ? null : answer.managerid)];

            orm.add(1, values, (result) => {
                // console.log(result);
                if (result.affectedRows === 0) {
                    console.log('\nError adding employee\n');
                } else {
                    console.log('\nEmployee Successfully Added!\n');
                }
                cb();
            });
        });
}