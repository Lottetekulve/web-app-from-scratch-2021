import getData from './api.js'

export default function renderArtObject (objectNumber) {
    const url = `https://www.rijksmuseum.nl/api/nl/collection/${objectNumber.toUpperCase()}?key=7TAeATmh`

    getData(url).then((data) => {
        renderSingleArtObject(data.artObject)
  })
}

function renderSingleArtObject(data) {
  clearElement(blok)
  const app = document.getElementById("blok2");
  
  //container aanmaken per artObject
  const container = document.createElement("div");
  container.setAttribute('class', 'container2')

  //image aanmaken per artObject
  const picture = document.createElement("img");
  picture.src = data.webImage.url;

  // Link naar rijksmuseum pagina van artObject
  const link = document.createElement("a");
  link.href = data.links.web;
  link.target = "_blank";

  //titel van elk artObject weergeven in h1
  const title = document.createElement("h2");
  title.textContent = data.title;

  // p aangemaakt voor principalOrFirstMaker
  const auteur = document.createElement("h3");
  auteur.textContent = data.principalOrFirstMaker;

  // puts container als child van anchor. Link dus om hele container heen
  link.appendChild(container);

  //puts () als child van container
  container.appendChild(picture);
  container.appendChild(title);
  container.appendChild(auteur);
  app.appendChild(link);

  function clearElement(element) {
    element.innerHTML = ''
    }
}

