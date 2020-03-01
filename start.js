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
        "View All Employees By Manager", // 3
        "View All Roles", // 4
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
          break;

        case "View All Employees By Department":
          // multiSearch();
          break;

        case "View All Employees By Manager":
          // rangeSearch();
          break;

        case "Add Employee":
          // songSearch();
          break;

        case "Add Department":
          // songAndAlbumSearch();
          break;

        case "Add Role":
          // 
          break;

        case "Remove Employee":
          // 
          break;

        case "Remove Department":
          // 
          break;

        case "Remove Role":
          // 
          break;

        case "Update Employee Role":
          // 
          break;

        case "Update Employee Manager":
          // 
          break;

        case "View All Roles":
          // 
          break;

        case "View Utilized Budget By Department":
          // 
          break;
      }
    });
}

prompt();