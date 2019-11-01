const entry = document.querySelector(".app");

// entry.innerHTML = "<h1>Hello World!</h1>";

// render(nav, header);

render(
  create("header", [
    create("h1", "Hello World!"),
    create("nav", "nav nav nav")
  ]),
  entry
);

function render(child, parent) {
  parent.append(child);
}

function create(element, content) {
  console.log("working");
  const createdElement = document.createElement(element);

  if (typeof content === "string") {
    createdElement.innerHTML = content;
  } else if (content instanceof HTMLElement) {
    createdElement.append(content);
  } else if (content instanceof Array) {
    content.forEach(function(htmlElement) {
      createdElement.append(htmlElement);
    });
  } else {
    throw new Error("Not a valid content-type for element");
  }

  return createdElement;
}
