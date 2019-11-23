const Deact = require('../../lib/deact')

function Container (...children) {
  return Deact.createElement(
    "div",
    {
      style: `
        margin: 0 auto;
        max-width: 30rem;
        width: 90%;
      `
    },
    ...children
  )
}

module.exports = Container
