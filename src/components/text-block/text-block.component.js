const Deact = require('../../lib/deact')

function TextBlock ({ className = '', fontSize = '1rem', hidden = false, text = "no text provided" } = {}) {
  return Deact.createElement(
    "p",
    {
      className,
      style: `
        display: ${hidden ? 'none' : 'block'};
        font-size: ${fontSize};
        line-height: 1.4;
        margin-bottom: 1rem;
      `
    },
    text
  )
}

module.exports = TextBlock
