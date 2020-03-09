const inquirer = require("inquirer");
const orm = require("../config/orm");

const view = require('./view');
const addEmployee = require('./addEmployee');
const addDepartment = require('./addDept');
const addRole = require('./addRole');
const remove = require('./remove');

let choices = [
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
];

const prompt = () => {
    inquirer
        .prompt({
            name: "action",
            type: "rawlist",
            message: "What would you like to do?",
            choices: choices
        })
        .then(answer => {
            //Based on the selected action, call one of our functions to query the database
            switch (answer.action) {
                case "View All Employees":
                    view(1, (results) => {
                        console.log(results);
                        prompt();
                    });
                    break;

                case "View All Employees By Department":
                    view(2, (results) => {
                        console.log(results);
                        prompt();
                    });
                    break;

                case "View All Roles":
                    view(3, (results) => {
                        console.log(results);
                        prompt();
                    });
                    break;

                case "Add Employee":
                    addEmployee(() => {
                        prompt();
                    });
                    break;

                case "Add Department":
                    addDepartment(() => {
                        prompt();
                    });
                    break;

                case "Add Role":
                    addRole(() => {
                        prompt();
                    });
                    break;

                case "Remove Employee":
                    // 
                    remove(1, () => {
                        prompt();
                    });
                    break;

                case "Remove Department":
                    remove(2, () => {
                        prompt();
                    });
                    break;

                case "Remove Role":
                    // 
                    remove(3, () => {
                        prompt();
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

module.exports = prompt;