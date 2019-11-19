const Deact = require("./libs/deact");
const App = require("./components/App");

Deact.render(App(), document.querySelector(".app"));
