const Deact = require("../libs/deact");
const MainContent = require("./MainContent");
const MainHeader = require("./MainHeader");

function App() {
  return Deact.create("section", { class: `app-container` }, [
    MainHeader(),
    MainContent()
  ]);
}

module.exports = App;
