const Deact = require("../lib/deact");

function StudentCard (student) {
  return Deact.create("section", { class: `student-card` }, [
    Deact.create("h3", { class: `student-card__name` }, student.name),
    Deact.create(
      "img",
      { class: `student-card__avatar`, src: student.imageUrl },
      ""
    ),
    Deact.create("p", { class: `student-card__language` }, student.language)
  ]);
}

module.exports = StudentCard;
