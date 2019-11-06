const Deact = require("../libs/deact")
const MainContent = require("../components/MainContent")
const MainHeader = require("../components/MainHeader")

function App() {
    return Deact.create("section", { class: `app-container` }), [
        MainHeader(),
        MainContent();
    ])
}