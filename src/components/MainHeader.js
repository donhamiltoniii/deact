const Deact = require("../libs/deact");
const AppTitle = require("./AppTitle");
const CohortsButton = require("./CohortsButton");
const Container = require("./Container");
const StudentsButton = require("./StudentsButton");
const Nav = require("./Nav");

function MainHeader() {
  return Deact.create(
    "header",
    {
      style: `background-color: #333; display: flex; justify-content: space-between; padding: 1rem;`
    },
    [
      AppTitle("yellow-text-color", "WCCI Student App"),
      Nav({}, [CohortsButton(), StudentsButton()])
    ]
  );
}

module.exports = MainHeader;
