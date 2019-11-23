const Deact = require('../../lib/deact')

const Container = require('../container/container.component')

function MainContent (...children) {
  return Deact.createElement(
    "main",
    {},
    Container(...children)
  )
}

module.exports = MainContent
