const Deact = require("../lib/deact");

const Nav = function (attributes, content) {
  return Deact.create("nav", attributes, content);
};

module.exports = Nav;
