const Deact = require("../libs/deact");
const MainContent = require("./MainContent");
const MainHeader = require("./MainHeader");

async function App() {
  return Deact.create("section", { class: `app-container` }, [
    await MainHeader(),
    MainContent()
  ]);
}

module.exports = App;
