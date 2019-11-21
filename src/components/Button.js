const Deact = require("../lib/deact");

const Button = function (attributes, content) {
  return Deact.create("button", attributes, content);
};

module.exports = Button;
