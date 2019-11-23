const Deact = require('../../lib/deact')

function Title () {
  return Deact.createElement(
    "h1",
    {
      style: `
        color: #fdb;
      `
    },
    "Deact Intro"
  )
}

module.exports = Title
