const mysql = require("mysql");
const inquirer = require("inquirer");

// const connection = mysql.createConnection({
//   host: "localhost",

//   // Your port; if not 3306
//   port: 3306,

//   // Your username
//   user: "root",

//   // Your password
//   password: "wwtwP1320",
//   database: "top_songsDB"
// });

// connection.connect(function(err) {
//   if (err) throw err;
//   //Make sure we're calling our next function ONLY AFTER our connection to the database was successfully established
//     // Insery function call here
// });


const prompt = () => {
    inquirer
    .prompt({
      name: "action",
      type: "rawlist",
      message: "What would you like to do?",
      choices: [
        "View All Employees",
        "View All Employees By Department",
        "View All Employees By Manager",
        "Add Employee",
        "Add Department",
        "Add Role",
        "Remove Employee",
        "Remove Department",
        "Remove Role",
        "Update Employee Role",
        "Update Employee Manager",
        "View All Roles",
        "View Utilized Budget By Department"
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