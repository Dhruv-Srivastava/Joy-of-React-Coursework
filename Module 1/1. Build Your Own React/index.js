function render(reactElement, containerDOMElement) {
  /* Your code here! */
  
  // Step 1: Create the element
  const element=document.createElement(reactElement.type)

  // Step 2: Add text content to the element creater
  element.textContent=reactElement.children;
  
  // Step 3: Add all of the attributes;
  const attributes=Object.keys(reactElement.props)
  attributes.forEach(attribute=>element.setAttribute(attribute,reactElement.props[attribute]))

  
  // Step 4: Append the element to the container.
  containerDOMElement.append(element)
}

const reactElement = {
  type: 'a',
  props: {
    href: 'https://wikipedia.org/',
    style:"color:red;text-decoration:none;"
  },
  children: 'Read more on Wikipedia',
};

const containerDOMElement =
  document.querySelector('#root');

render(reactElement, containerDOMElement);