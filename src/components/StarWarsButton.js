const Button = require("./Button");

function StarWarsButton() {
  return Button(
    {
      class: "star-wars-button",
      onclick: () => {
        fetch("http://localhost:3000/students")
          .then(function(response) {
            return response.json();
          })
          .then(function(data) {
            console.log(data);
          });
        console.log("button clicked!");
      }
    },
    "Get Star Wars Person!"
  );
}

module.exports = StarWarsButton;
