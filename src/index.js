const entry = document.querySelector(".app");

// entry.innerHTML = "<h1>Hello World!</h1>";

// const nav = create("nav", "nav nav nav");
// render(nav, header);

render(create("header", create("h1", "Hello World!")), entry);

function render(child, parent) {
  parent.append(child);
}

function create(element, content) {
  const createdElement = document.createElement(element);

  if (content instanceof String) {
    createdElement.innerHTML = content;
  } else {
    createdElement.append(content);
  }

  return createdElement;
}
