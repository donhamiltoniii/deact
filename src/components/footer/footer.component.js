const Deact = require('../../lib/deact')

function Footer () {
  return Deact.createElement(
    'footer',
    {
      style: `
        align-items: center;
        background-color: #fdb;
        color: #357;
        display: flex;
        justify-content: center;
      `
    },
    Deact.createElement(
      'small',
      {},
      `© ${new Date().getFullYear()} Deact`
    )
  )
}

module.exports = Footer
