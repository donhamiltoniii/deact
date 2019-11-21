const Deact = require("../lib/deact");
const Button = require("./Button");
const Http = require("../util/http");
const StudentCard = require("./StudentCard");
const StudentsPage = require("./StudentsPage");

async function StudentsButton () {
  async function renderStudents () {
    document.querySelector(".main-content .container").innerHTML = "";
    Deact.render(
      await StudentsPage(),
      document.querySelector(".main-content .container")
    );
    Http.getRequest("http://localhost:3000/students", function (response) {
      const { cohorts, students } = response;
      students.forEach(function (student) {
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
      onclick: await renderStudents,
      style: `border-color: #eee; color: #eee;`
    },
    "Students"
  );
}

module.exports = StudentsButton;
