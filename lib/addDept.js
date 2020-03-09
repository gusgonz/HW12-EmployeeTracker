const inquirer = require("inquirer");
const orm = require("../config/orm");

module.exports = (cb) => {
    inquirer
        .prompt([
            {
                type: 'input',
                message: 'Enter Department Name: ',
                name: 'name'
            }
        ])
        .then(answer => {
            let values = [answer.name];

            orm.add(2, values, (result) => {
                // console.log(result);
                if (result.affectedRows === 0) {
                    console.log('\nError adding department\n');
                } else {
                    console.log('\nDepartment Successfully Added!\n');
                }
                cb();
            });
        });

}