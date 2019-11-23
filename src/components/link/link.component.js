const Deact = require('../../lib/deact')

function Link ({ href = 'invslid', text = 'Name the link!' } = {}) {
  return Deact.createElement(
    'a',
    {
      href,
      style: `
        color: #fdb;
        cursor: pointer;
        margin-left: 1rem;
      `
    },
    text
  )
}

module.exports = Link
