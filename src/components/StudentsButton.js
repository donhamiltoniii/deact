const Deact = require("../libs/deact");
const AppTitle = require("./AppTitle");
const Button = require("./Button");
const Http = require("../utils/http");

function StudentsButton() {
  return Button(
    {
      class: "students-button",
      onclick: () => {
        Http.getRequest("http://localhost:3000/students", function({
          students
        }) {
          students.forEach(student => {
            Deact.render(
              AppTitle(student.name, "yellow"),
              document.querySelector(".app")
            );
          });
        });
      }
    },
    "Get Students!"
  );
}

module.exports = StudentsButton;
