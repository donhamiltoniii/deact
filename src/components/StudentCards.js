const Deact = require("../libs/deact");

function StudentCards() {
  return Deact.create("section", { class: `student-cards` }, "");
}

module.exports = StudentCards;
