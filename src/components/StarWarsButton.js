const Button = require("./Button");

function StarWarsButton() {
  return Button(
    {
      class: "star-wars-button",
      onclick: () => {
        console.log("button clicked!");
      }
    },
    "Get Star Wars Person!"
  );
}

module.exports = StarWarsButton;
