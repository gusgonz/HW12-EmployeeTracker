const inquirer = require("inquirer");
const orm = require("../config/orm");

module.exports = (action, cb) => {
    switch (action) {
        case 1:
            // 
            inquirer
                .prompt([
                    {
                        type: 'input',
                        message: 'Enter ID of employee you wish to remove: ',
                        name: 'id'
                    }
                ])
                .then(answer => {
                    let id = answer.id;
                    orm.remove('employees', id, (result) => {

                        if (result.affectedRows === 0) {
                            console.log('\nError removing employee! Most likely that employee id does not exist.\n');
                        } else {
                            console.log('\nEmployee Removed!\n');
                        }

                        cb();
                    });
                });

            break;

        case 2:
            // 
            inquirer
                .prompt([
                    {
                        type: 'input',
                        message: 'Enter ID of department you wish to remove: ',
                        name: 'id'
                    }
                ])
                .then(answer => {
                    let id = answer.id;
                    orm.remove('departments', id, (result) => {
                        if (result.affectedRows === 0) {
                            console.log('\nError removing department! Most likely that department id does not exist.\n');
                        } else {
                            console.log('\nDepartment Removed!\n');
                        }

                        cb();
                    });
                });
            break;

        case 3:
            // 
            inquirer
                .prompt([
                    {
                        type: 'input',
                        message: 'Enter ID of role you wish to remove: ',
                        name: 'id'
                    }
                ])
                .then(answer => {
                    let id = answer.id;
                    orm.remove('roles', id, (result) => {
                        if (result.affectedRows === 0) {
                            console.log('\nError removing role! Most likely that role id does not exist.\n');
                        } else {
                            console.log('\nRole Removed!\n');
                        }

                        cb();
                    });
                });
            break;
    }
}

