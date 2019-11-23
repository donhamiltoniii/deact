const Deact = require('../../lib/deact')

const ClickEventExample = require('../../components/click-event-example/click-event-example.component')
const ContentTitle = require('../../components/content-title/content-title.component')
const FlexContainer = require('../../components/flex-container/flex-container.component')
const Layout = require('../../components/layout/layout.component')
const TextBlock = require('../../components/text-block/text-block.component')

const text = [
  "With the Deact library, you can stop worrying about exactly how to handle the DOM manipulation that you want to achieve and just worry about actually building the application you want. Deact is based heavily on the React library. This is a reference application for me, Don Hamilton, to understand the inner workings of a library like React.",
  "Have a look at the source code for this page to see just exactly how this sort of component system works."
]

function App () {
  return Deact.createElement(
    "section",
    {},
    Layout(
      ContentTitle({ text: "Welcome to our Deact Example" }),
      FlexContainer({
        children: text.map(item => TextBlock({ fontSize: `0.8rem`, text: item })),
        direction: 'column',
      }),
      ClickEventExample()
    )
  )
}

module.exports = App
