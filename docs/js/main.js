import { render } from "./modules/render.js";
import getData from "./modules/api.js";

const url = "https://www.rijksmuseum.nl/api/nl/collection/?key=7TAeATmh&ps=200";

getData(url).then((data) => {
  data.artObjects.forEach((artObject) => render(artObject));
});


import routie from './modules/routie.js'

//calls router that will start the app
// routie()

// getData(url).then((details) => {
//   data.artObjects.forEach((artObject) => detailPage(artObject));
// });

