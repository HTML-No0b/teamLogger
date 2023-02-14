const mysql = require("mysql");
const inquirer = require("inquirer");
require("console.table");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "September#97",
  database: "trackerDB",
});

connection.connect(function (err) {
  if (err) throw err;
  firstPopup();
});

function firstPopup() {
  inquirer.prompt({
    type: "list",
    name: "question",
    message: "Make a decision",
    choices: [
      {
        name: "view all departments",
        value: "view_all_departments",
      },
    ],
  })
  .then(res=>{
    switch (res.question) {
      case "view_all_departments":
          viewAllDepartments();
        break;
    
      default:
        break;
    }
  })
}

function viewAllDepartments(){
  // console.log('departments',connection.promise())
  return connection.query("SELECT department.id,department.name FROM department")
}
