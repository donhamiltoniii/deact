const Deact = require("../libs/deact");
const AppTitle = require("./AppTitle");
const StarWarsButton = require("./StarWarsButton");
const Nav = require("./Nav");

function MainHeader() {
  return Deact.create("header", {}, [
    AppTitle("Deact is awesome!", "yellow"),
    Nav({}, StarWarsButton())
  ]);
}

module.exports = MainHeader;
