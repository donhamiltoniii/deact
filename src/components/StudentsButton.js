const Deact = require("../libs/deact");
const AppTitle = require("./AppTitle");
const Button = require("./Button");
const Http = require("../utils/http");

function StudentsButton() {
  function renderStudents() {
    Http.getRequest("http://localhost:3000/students", function({ students }) {
      students.forEach(student => {
        Deact.render(
          AppTitle("", student.name),
          document.querySelector(".container")
        );
      });
    });
  }

  return Button(
    {
      class: "students-button",
      onclick: renderStudents,
      style: `border-color: #eee; color: #eee;`
    },
    "Get Students!"
  );
}

module.exports = StudentsButton;
