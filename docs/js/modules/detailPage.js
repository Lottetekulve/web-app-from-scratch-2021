import getData from './api.js'
import { clearElement } from './clear.js'

///function for detail page///
export function renderArtObject (objectNumber) {
    const url = `https://www.rijksmuseum.nl/api/nl/collection/${objectNumber.toUpperCase()}?key=7TAeATmh`

    getData(url).then((data) => {
        renderSingleArtObject(data.artObject)
  })
}


//function for each art object///

function renderSingleArtObject(data) {
  clearElement(section1)

  //create elements//
  const app = document.getElementById("section2"),
    container = document.createElement("section"),
    picture = document.createElement("img"),
    title = document.createElement("h2"),
    author = document.createElement("h3"),
    objectNr = document.createElement("h4"),
    productionPlace = document.createElement("p"),
    button = document.createElement("a"),
    back = document.createElement("p");

    //give values to the elements//
  container.setAttribute('class', 'container2');
  button.href = " "
  back.textContent = "Back";
  picture.src = data.webImage.url;
  title.textContent = data.longTitle;
  author.textContent = data.principalOrFirstMaker;
  objectNr.textContent = data.objectNumber;
  productionPlace.textContent = data.productionPlaces;

  // puts the attributes in the containers and sections
  app.appendChild(button)
  app.appendChild(container);
  button.appendChild(back);
  container.appendChild(picture);
  container.appendChild(title);
  container.appendChild(author);
  container.appendChild(objectNr);
  container.appendChild(productionPlace);

}

