module.exports = {
  render(child, parent) {
    parent.append(child);
  },
  create(element, content) {
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
};
