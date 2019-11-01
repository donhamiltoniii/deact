const Deact = require("../libs/deact");

const AppTitle = function(text, textColor) {
  return Deact.create(
    "h1",
    {
      style: `background-color: blue; color: ${textColor};`
    },
    text
  );
};

module.exports = AppTitle;
