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
  inquirer
    .prompt({
      type: "list",
      name: "question",
      message: "Make a decision",
      choices: [
        "Add department",
        "Add role",
        "Add employee",
        "View all departments",
      ],
    })
    .then((res) => {
      switch (res.question) {
        case "view_all_departments":
          viewAllDepartments();
          break;
        case "add roll":
          addRoll();
          break;
        case "Add Employee":
          addEmployee();
          break;

        default:
      }
    });
};

function addRole() {
  inquirer
  .prompt([
    {
      type: "input",
      message: "What role are you adding?",
      name: "Name"
    },
    {
      type: "input",
      message: "What is the salery for this position",
      name: "salary"
    },
    {
      type:"input",
      message:"Whats the Department #?",
      name:"departmentID"
    }
  ])
  .then(function(answer){
  connection.query('INSERT INTO role (title,salary,department_id)',[answer.Name,answer.salary,answer.departmentID],
  function (err, res){
    if(err) throw err;
    console.table(res)
  }
  )
})
}
function viewAllDepartments() {
  // console.log('departments',connection.promise())
  return connection.query(
    "SELECT department.id,department.name FROM department"
  );
}
