const Deact = require('../../lib/deact')

const Title = require('../title/title.component')

function Header () {
  return Deact.createElement(
    "header",
    {
      style: `
        align-items: center;
        background-color: #357;
        display: flex;
        padding: 1rem;
      `
    },
    Title(),
    Deact.createElement(
      'a',
      {
        href: 'https://donhamiltoniii.github.io/deact'
      },
      'Deact Homepage'
    )
  )
}

module.exports = Header
