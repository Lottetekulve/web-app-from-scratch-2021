import { render } from "./modules/render.js";
import getData from "./modules/api.js";
import { renderArtObject } from './modules/detailPage.js';
import { countThePlaces } from './modules/count.js';



/////filter en count functie /////
countThePlaces()



/////router routie functie /////
function router() {
  routie('artobject/:objectNumber', renderArtObject)
}

router()