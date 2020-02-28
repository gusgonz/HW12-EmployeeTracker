const mysql = require("mysql");
const inquirer = require("inquirer");

const connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "wwtwP1320",
  database: "top_songsDB"
});

connection.connect(function(err) {
  if (err) throw err;
  //Make sure we're calling our next function ONLY AFTER our connection to the database was successfully established
    // Insery function call here
});