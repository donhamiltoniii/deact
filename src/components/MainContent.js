const Deact = require("../libs/deact");
const Container = require("./Container");

function MainContent() {
  return Deact.create("main", { class: `main-content` }, Container(""));
}

module.exports = MainContent;
