import render from "./modules/render.js";
import getData from "./modules/api.js";

const url = "https://www.rijksmuseum.nl/api/nl/collection/?key=7TAeATmh";

getData(url).then((data) => {
  data.artObjects.forEach((artObject) => render(artObject));
});
