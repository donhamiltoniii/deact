const Deact = require('../../lib/deact')

function Button ({ onclick = () => console.error('unimplemented event!'), text = 'Add some label text!' } = {}) {
  return Deact.createElement(
    'button',
    {
      onclick,
      style: `
        border: 1px solid var(--dark-blue);
        border-radius: 1rem;
        color: var(--dark-blue);
        cursor: pointer;
        font-size: 0.7rem;
        font-weight: bold;
        margin-bottom: 1rem;
        padding: 0.5rem 1rem;
      `
    },
    text
  )
}

module.exports = Button
