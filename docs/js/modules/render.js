export function render(data) {
  clearElement(section2)

  const app = document.getElementById("section1"),
      container = document.createElement("section"),
      picture = document.createElement("img"),
      link = document.createElement("a"),
      title = document.createElement("h2"),
      author = document.createElement("h3");


  picture.src = data.webImage.url;
  container.setAttribute('class', 'container');
  link.href = `#artobject/${data.objectNumber}`;
  title.textContent = data.title;
  author.textContent = data.principalOrFirstMaker;

  
  // puts the attributes in the containers
  link.appendChild(container);
  container.appendChild(picture);
  container.appendChild(title);
  container.appendChild(author);

  //puts anchor als child van de app
  app.appendChild(link);


  function clearElement(element) {
    element.innerHTML = ''
  }

}
