const Deact = require("../libs/deact");
const AppTitle = require("./AppTitle");
const Button = require("./Button");

function StudentsButton() {
  return Button(
    {
      class: "students-button",
      onclick: () => {
        fetch("http://localhost:3000/students")
          .then(function(response) {
            return response.json();
          })
          .then(function(students) {
            students.forEach(student => {
              Deact.render(
                AppTitle(student.name, "red"),
                document.querySelector(".app")
              );
            });
            console.log(data);
          })
          .catch(function(error) {
            console.log(error);
          });
        console.log("button clicked!");
      }
    },
    "Get Students!"
  );
}

module.exports = StudentsButton;
