const Deact = require("../lib/deact");
const Button = require("./Button");
const Http = require("../util/http");

function CohortForm () {
  function handleSubmit (event) {
    event.preventDefault();

    const titleInput = document.querySelector(".cohort-title");
    const cohortTitle = titleInput.value;

    fetch(`http://localhost:3000/cohorts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ title: cohortTitle })
    })
      .then(response => {
        return response.json();
      })
      .then(cohort => {
        console.log(cohort);
      });
  }

  return Deact.create("form", { onsubmit: handleSubmit }, [
    Deact.create(
      "input",
      { class: "cohort-title", name: "title", type: "text" },
      ""
    ),
    Button({ type: "submit" }, "Submit")
  ]);
}

module.exports = CohortForm;
