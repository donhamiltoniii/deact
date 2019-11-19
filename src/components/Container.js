const Deact = require("../libs/deact");

function Container(children) {
  return Deact.create("div", { class: `container` }, children);
}

module.exports = Container;
