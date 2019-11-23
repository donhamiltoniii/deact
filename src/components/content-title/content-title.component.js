const Deact = require('../../lib/deact')

function ContentTitle ({ text = 'no text provided' } = {}) {
  return Deact.createElement(
    "h2",
    {
      style: `
        margin: 1rem 0;
      `
    },
    text
  )
}

module.exports = ContentTitle
