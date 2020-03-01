const inquirer = require("inquirer");
const orm = require("./config/orm.js");

const prompt = () => {
  inquirer
    .prompt({
      name: "action",
      type: "rawlist",
      message: "What would you like to do?",
      choices: [
        "View All Employees", // 1
        "View All Employees By Department", // 2
        "View All Roles", // 3
        "Add Employee", // 1
        "Add Department", // 2
        "Add Role", // 3
        "Remove Employee", // 1
        "Remove Department", // 2
        "Remove Role", // 3
        "Update Employee Role", // 1
        "Update Employee Manager", // 2
        "View Utilized Budget By Department" // 1
      ]
    })
    .then(answer => {
      //Based on the selected action, call one of our functions to query the database
      switch (answer.action) {
        case "View All Employees":
          // 
          orm.view(1, result => {
            let results = '\nEmployees:\n\n';

            result.forEach(employee => {
              let niceString = `${employee.first_name} ${employee.last_name} \n`;
              results += niceString;
            });

            console.log(results);

            prompt();
          });
          break;

        case "View All Employees By Department":
          //

          orm.view(2, result => {

            let results = '\nEmployees by Department:\n\n';

            result.forEach(row => {
              let niceString = `${row.first_name} ${row.last_name}, ${row.name} \n`;
              results += niceString;
            });

            console.log(results);
            // console.log(result);

            prompt();
          });
          break;

        case "View All Roles":
          // 
          orm.view(4, result => {

            let results = '\nRoles:\n\n';

            result.forEach(row => {
              let niceString = `Title: ${row.title}, Salary: ${row.salary}, Department ID: ${row.department_id} \n`;
              results += niceString;
            });

            console.log(results);
            // console.log(result);

            prompt();
          });
          break;

        case "Add Employee":
          // 
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
                console.log('\nEmployee Added!\n');

                prompt();
              });
            });

          break;

        case "Add Department":
          // 
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
                console.log('\nDepartment Added!\n');

                prompt();
              });
            });

          break;

        case "Add Role":
          // 
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

                console.log('\nRole Added!\n');

                prompt();
              });
            });

          break;

        case "Remove Employee":
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
              let col = answer.id;
              orm.remove('employees', col, (result) => {
                console.log('\nEmployee Removed!\n');

                prompt();
              });
            });

          break;

        case "Remove Department":
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
              let col = answer.id;
              orm.remove('departments', col, (result) => {
                console.log('\nDepartment Removed!\n');

                prompt();
              });
            });
          break;

        case "Remove Role":
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
              let col = answer.id;
              orm.remove('roles', col, (result) => {
                console.log('\nRole Removed!\n');

                prompt();
              });
            });
          break;

        case "Update Employee Role":
          // 
          break;

        case "Update Employee Manager":
          // 
          break;

        case "View Utilized Budget By Department":
          // 
          break;
      }
    });
}

prompt();