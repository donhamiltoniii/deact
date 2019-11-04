const Deact = require("../libs/deact");
const AppTitle = require("./AppTitle");
const StudentsButton = require("./StudentsButton");
const Nav = require("./Nav");

function MainHeader() {
  return Deact.create("header", {}, [
    AppTitle("Deact is awesome!", "yellow"),
    Nav({}, StudentsButton())
  ]);
}

module.exports = MainHeader;
