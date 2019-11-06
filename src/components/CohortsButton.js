const Deact = require("../libs/deact");
const Button = require("./Button");
const CohortForm = require("./CohortForm");
const Http = require("../utils/http");

function CohortsButton() {
  //   function renderCohorts() {
  // Http.getRequest("http://localhost:3000/students", function({ students }) {
  //   students.forEach(student => {
  //     Deact.render(
  //       StudentCard(student),
  //       document.querySelector(".student-cards")
  //     );
  //   });
  // });
  //   }
  function renderCohortForm() {
    Deact.render(CohortForm(), document.querySelector(".main-content"));
  }

  return Button(
    {
      class: "cohorts-button",
      onclick: renderCohortForm,
      style: `border-color: #eee; color: #eee;`
    },
    "Cohorts"
  );
}

module.exports = CohortsButton;
