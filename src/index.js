const Deact = require("./libs/deact");

Deact.render(
  Deact.create("header", {}, [
    Deact.create("h1", {}, "Hello World!"),
    Deact.create(
      "nav",
      {},
      Deact.create(
        "button",
        {
          onclick: () => {
            console.log("button clicked!");
          }
        },
        "Get Star Wars Person!"
      )
    )
  ]),
  document.querySelector(".app")
);
