const Deact = require('../../lib/deact')

const Footer = require('../../components/footer/footer.component')
const Header = require('../../components/header/header.component')
const MainContent = require('../../components/main-content/main-content.component')

function Layout (...children) {
  return Deact.createElement(
    'section',
    {
      style: `
        display: grid;
        grid-template-rows: 6rem auto 8rem;
        min-height: 100vh;
      `
    },
    Header(),
    MainContent(
      ...children
    ),
    Footer()
  )
}

module.exports = Layout
