const Deact = require("../libs/deact");
const Button = require("./Button");
const Http = require("../utils/http");
const StudentCard = require("./StudentCard");

function StudentsButton() {
  function renderStudents() {
    Http.getRequest("http://localhost:3000/students", function({ students }) {
      students.forEach(student => {
        Deact.render(
          StudentCard(student),
          document.querySelector(".student-cards")
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
    "Students"
  );
}

module.exports = StudentsButton;
