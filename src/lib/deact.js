function render (element, container) {
  const domElement = element.type === 'TEXT_ELEMENT' ? document.createTextNode("") : document.createElement(element.type)

  const isProperty = key => key !== "children"

  Object.keys(element.props).filter(isProperty).forEach(name => {
    domElement[name] = element.props[name]
  })

  element.props.children.forEach(child => {
    render(child, domElement)
  })

  container.appendChild(domElement)
}

function createElement (type, props = {}, ...children) {
  return {
    type,
    props: {
      ...props,
      children: children.map(child =>
        typeof child === "object"
          ? child
          : createTextElement(child)
      )
    }
  }
}

function createTextElement (text) {
  return {
    type: 'TEXT_ELEMENT',
    props: {
      nodeValue: text,
      children: []
    }
  }
}

module.exports = {
  createElement,
  render
}
