const Deact = require("../libs/deact");

const Button = function(attributes, content) {
  return Deact.create("button", attributes, content);
};

module.exports = Button;
