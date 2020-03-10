const inquirer = require("inquirer");

// models import
const view = require('../models/view');
const remove = require('../models/remove');
const update = require('../models/update');
const add = require('../models/add');

let choices = [
    "View All Employees",
    "View All Employees By Department",
    "View All Roles",
    "Add Employee",
    "Add Department",
    "Add Role",
    "Remove Employee",
    "Remove Department",
    "Remove Role",
    "Update Employee Role",
    "Update Employee Manager",
    "View Utilized Budget By Department"
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
                    view("employees", () => {
                        prompt();
                    });
                    break;

                case "View All Employees By Department":
                    view(null, () => {
                        prompt();
                    });
                    break;

                case "View All Roles":
                    view("roles", () => {
                        prompt();
                    });
                    break;

                case "Add Employee":
                    add('employees', () => {
                        prompt();
                    });
                    break;

                case "Add Department":
                    add('departments', () => {
                        prompt();
                    });
                    break;

                case "Add Role":
                    add('roles', () => {
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
                    remove(3, () => {
                        prompt();
                    });
                    break;

                case "Update Employee Role":
                    update('r', () => {
                        prompt();
                    });
                    break;

                case "Update Employee Manager":
                    update('m', () => {
                        prompt();
                    });
                    break;

                case "View Utilized Budget By Department":
                    view(false, () => {
                        prompt();
                    })
                    break;
            }
        });
}

module.exports = prompt;