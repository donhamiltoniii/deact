const Deact = require("./lib/deact");
const App = require("./components/App");

Deact.render(App(), document.querySelector(".app"));
