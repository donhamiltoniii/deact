const Deact = require("./libs/deact");

Deact.render(
  Deact.create("header", [
    Deact.create("h1", "Hello World!"),
    Deact.create("nav", "nav nav nav")
  ]),
  document.querySelector(".app")
);
