import { renderOverview } from "./overviewPage.js";
import getData from "./api.js"
import { clearElement } from './clear.js'



///link naar api 
const url = "https://www.rijksmuseum.nl/api/nl/collection/?key=7TAeATmh&ps=1000"; 


///////// button for all art objects ////////
export function noFilter(){

    clearElement(section1)
    getData(url).then((data) => {
        data.artObjects.forEach((artObject) => renderOverview(artObject));
    })
}


// ///////// button for cities////////
function cityFilter(city){
    
    clearElement(section1)
    getData(url).then((data) => 
    { let objectsOfArt = data.artObjects
        let objectsOfArt2 = (objectsOfArt).filter(function(filteredData)
        {
        return filteredData.productionPlaces == city } );
    {
        objectsOfArt2.forEach((artObject) => { renderOverview(artObject) } );
    }});
}


export function brusselFilter(){
    return cityFilter("Brussel (stad)")
}

export function amsterdamFilter(){
    return cityFilter("Amsterdam")
}

export function neurenbergFilter(){
    return cityFilter("Parijs")
}

export function utrechtFilter(){
    return cityFilter("Utrecht")
}
