const Deact = require("../libs/deact");
const Nav = require("./Nav");

function MainHeader() {
  return Deact.create(
    "header",
    {
      style: `background-color: #000; display: flex; justify-content: space-between; padding: 1rem;`
    },
    "Heavy Metal Haven"
    // [ AppTitle(), Nav({}, [ArtistsButton()]) ]
  );
}

module.exports = MainHeader;
