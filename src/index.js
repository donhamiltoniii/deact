const Deact = require("./lib/deact");
const App = require('./containers/app/app.component')

Deact.render(App(), document.querySelector(".app"));
