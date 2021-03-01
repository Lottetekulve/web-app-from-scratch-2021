import { renderArtObject } from './modules/detailPage.js';
import { countThePlaces } from './modules/count.js';
import { map } from './modules/mapandreduce.js'
import { reduce } from './modules/mapandreduce.js'

map()
reduce()

/////filter en count functie /////
countThePlaces()



/////router routie functie /////
function router() {
  routie('artobject/:objectNumber', renderArtObject)
}

router()