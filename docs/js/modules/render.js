import { clearElement } from './detailPage.js'
////render for each artobject/////

export function render(data) {
  clearElement(section2)

  ///creating elememts///
  const
    app = document.getElementById("section1"),
    container = document.createElement("section"),
    picture = document.createElement("img"),
    link = document.createElement("a"),
    title = document.createElement("h2"),
    author = document.createElement("h3")
  ;
      

  /// putting values to the elements///
  picture.src = data.webImage.url;
  container.setAttribute('class', 'container');
  link.href = `#artobject/${data.objectNumber}`;
  title.textContent = data.title;
  author.textContent = data.principalOrFirstMaker;


  
  // puts the attributes in the containers or sections//
  link.appendChild(container);
  container.appendChild(picture);
  container.appendChild(title);
  container.appendChild(author);
  app.appendChild(link);

}
