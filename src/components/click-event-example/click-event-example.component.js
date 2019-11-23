const Deact = require('../../lib/deact')

const Button = require('../button/button.component')
const TextBlock = require('../text-block/text-block.component')

function ClickEventExample () {
  return Deact.createElement(
    'section',
    {},
    Button(
      {
        onclick: event => {
          const textBlock = event.target.parentElement.querySelector('.click-example-text')
          textBlock.style.display = 'block'
        },
        text: 'Reveal hidden text'
      }
    ),
    TextBlock({ className: 'click-example-text', hidden: true, text: 'You have done the good clicking! Solid job fam.' })
  )
}

module.exports = ClickEventExample
