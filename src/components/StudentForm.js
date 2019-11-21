const Deact = require("../lib/deact");
const Button = require("./Button");
const Http = require("../util/http");

async function StudentForm () {
  function handleSubmit (event) {
    event.preventDefault();

    const name = document.querySelector(".student-name").value;
    const language = document.querySelector(".student-language").value;
    const imageUrl = document.querySelector(".student-image-url").value;
    const cohortId = document.querySelector(".cohort-id").value;

    fetch(`http://localhost:3000/students`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: name,
        language: language,
        imageUrl: imageUrl,
        cohortId: cohortId
      })
    })
      .then(response => {
        return response.json();
      })
      .then(student => {
        console.log(student);
      });
  }

  async function CohortsDropDown () {
    const cohortsResponse = await Http.getRequest(
      "http://localhost:3000/cohorts"
    );

    const cohortOptionElements = cohortsResponse.cohorts.map(cohort => {
      return Deact.create("option", { value: cohort._id }, cohort.title);
    });

    return Deact.create("select", { class: "cohort-id" }, cohortOptionElements);
  }

  return Deact.create("form", { onsubmit: handleSubmit }, [
    Deact.create(
      "input",
      { class: "student-name", placeholder: "Name", type: "text" },
      ""
    ),
    Deact.create(
      "input",
      { class: "student-language", placeholder: "Language", type: "text" },
      ""
    ),
    Deact.create(
      "input",
      { class: "student-image-url", placeholder: "Image Url", type: "text" },
      ""
    ),
    await CohortsDropDown(),
    Button({ type: "submit" }, "Submit")
  ]);
}

module.exports = StudentForm;
