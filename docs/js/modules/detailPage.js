import getData from './api.js'


///function for detail page///
export function renderArtObject (objectNumber) {
    const url = `https://www.rijksmuseum.nl/api/nl/collection/${objectNumber.toUpperCase()}?key=7TAeATmh`

    getData(url).then((data) => {
        renderSingleArtObject(data.artObject)
  })
}


//clean element function
export function clearElement(element) {
  element.innerHTML = ''
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
    productionPlace = document.createElement("p");

    //give values to the elements//
  container.setAttribute('class', 'container2');
  picture.src = data.webImage.url;
  title.textContent = data.longTitle;
  author.textContent = data.principalOrFirstMaker;
  objectNr.textContent = data.objectNumber;
  productionPlace.textContent = data.productionPlaces;

  // puts the attributes in the containers and sections
  app.appendChild(container);
  container.appendChild(picture);
  container.appendChild(title);
  container.appendChild(author);
  container.appendChild(objectNr);
  container.appendChild(productionPlace);

}

