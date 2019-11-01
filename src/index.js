const Deact = require("./libs/deact");
const MainHeader = require("./components/MainHeader");

Deact.render(MainHeader(), document.querySelector(".app"));
