import { render } from "./modules/render.js";
import getData from "./modules/api.js";
import renderArtObject from './modules/detailPage.js';


const url = "https://www.rijksmuseum.nl/api/nl/collection/?key=7TAeATmh&ps=200";

getData(url).then((data) => {
  data.artObjects.forEach((artObject) => render(artObject));
});

function router() {
  routie('artobject/:objectNumber', renderArtObject)
}

router()
