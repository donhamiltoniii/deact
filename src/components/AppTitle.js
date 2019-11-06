const Deact = require("../libs/deact");

function AppTitle(className, text) {
  return Deact.create(
    "h1",
    {
      class: `${className}`
    },
    text
  );
}

module.exports = AppTitle;
