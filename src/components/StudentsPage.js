const Deact = require("../libs/deact");
const StudentCards = require("./StudentCards");
const StudentForm = require("./StudentForm");

async function StudentsPage() {
  return Deact.create("article", { class: "students-page" }, [
    await StudentForm(),
    StudentCards()
  ]);
}

module.exports = StudentsPage;
