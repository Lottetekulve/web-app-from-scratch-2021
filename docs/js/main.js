import { renderArtObject } from './modules/detailPage.js';
import { createOverview } from './modules/buttons.js';
import { map } from './modules/mapandreduce.js'
import { reduce } from './modules/mapandreduce.js'

map()
reduce()


/////router routie functie /////
function router() {
    routie({'': createOverview})
    routie({'artobject/:objectNumber': renderArtObject})
}

router()

