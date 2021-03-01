import { render } from "./modules/render.js";
import getData from "./modules/api.js";
import renderArtObject from './modules/detailPage.js';
import { button1 } from './modules/buttons.js'
import { button2 } from './modules/buttons.js'
import { button3 } from './modules/buttons.js'
import { button4 } from './modules/buttons.js'
import { button5 } from './modules/buttons.js'
import { button6 } from './modules/buttons.js'


/////url van API/////

const url = "https://www.rijksmuseum.nl/api/nl/collection/?key=7TAeATmh&ps=1000";




/////filter functie via buttuns /////


button1()
button2()
button3()
button4()
button5()
button6()



/////router routie functie /////

function router() {
  routie('artobject/:objectNumber', renderArtObject)
}

router()










// let brussel = [0]
// function countBrussel() { 
//   getData(url).then((data) => { 
//     data.artObjects.forEach((artObject) => { 
//       if (data.artObjects.productionPlaces == '') 
//       { brussel.push('1') 
      
// }})
// return brussel
// })}

// countBrussel()


