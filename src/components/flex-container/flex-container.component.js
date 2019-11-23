const Deact = require('../../lib/deact')

function FlexContainer ({ children = [], direction = 'row' } = {}) {
  return Deact.createElement(
    "div",
    {
      style: `
        display: flex;
        flex-direction: ${direction};
      `
    },
    ...children
  )
}

module.exports = FlexContainer
