const Deact = require('../../lib/deact')

const FlexContainer = require('../flex-container/flex-container.component')
const Link = require('../link/link.component')
const Title = require('../title/title.component')

function Header () {
  return Deact.createElement(
    "header",
    {
      style: `
        align-items: center;
        background-color: #357;
        display: flex;
        justify-content: space-between;
        padding: 1rem;
      `
    },
    Title(),
    FlexContainer({
      children: [
        Link({ href: 'https://donhamiltoniii.github.io/deact', text: 'Deact Homepage' }),
        Link({ href: 'https://github.com/donhamiltoniii/deact', text: 'Deact Docs' })
      ]
    })
  )
}

module.exports = Header
