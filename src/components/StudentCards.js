const Deact = require("../lib/deact");

function StudentCards () {
  return Deact.create("section", { class: `student-cards` }, "");
}

module.exports = StudentCards;
