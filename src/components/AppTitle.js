const Deact = require("../libs/deact");

const AppTitle = function(className, text) {
  return Deact.create(
    "h1",
    {
      class: `${className}`
    },
    text
  );
};

module.exports = AppTitle;
