const inquirer = require("inquirer");
const orm = require("../config/orm");

module.exports = (route, cb) => {

    let questions = (route === 'm') ?
        [{
            type: 'input',
            message: 'Enter ID of employee whose manager you wish to update: ',
            name: 'id'
        },
        {
            type: 'input',
            message: `Enter employee's new Manager's ID: `,
            name: 'newid'
        }]
        :
        [{
            type: 'input',
            message: 'Enter ID of employee whose role you wish to update: ',
            name: 'id'
        },
        {
            type: 'input',
            message: `Enter employee's new Role ID: `,
            name: 'newid'
        }];

    inquirer
        .prompt(questions)
        .then(answer => {
            let set = (route === 'r') ? { role_id: answer.newid } : { manager_id: answer.newid };
            orm.update(set, answer.id, (result) => {
                if (result.affectedRows === 0) {
                    console.log('\nError updating!\n');
                } else {
                    console.log('\nUpdate Successful!\n');
                }

                cb();
            });
        });
}