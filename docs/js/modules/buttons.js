import { render } from "./render.js";
import getData from "./api.js";
import loading from "./loading.js";
import { clearElement } from './detailPage.js'



///link naar api 
const url = "https://www.rijksmuseum.nl/api/nl/collection/?key=7TAeATmh&ps=1000"; 


///////// button for all art objects ////////
export function noFilter(){
    loading()

    clearElement(section1)
    getData(url).then((data) => {
        data.artObjects.forEach((artObject) => render(artObject));
    })
}


/////////all with production places////////
export function filterAll(){
    loading()
      
    clearElement(section1)
    getData(url).then((data) => { 
        let objectsOfArt = data.artObjects
        let objectsOfArt2 = (objectsOfArt).filter(function(filteredData) {
            return filteredData.productionPlaces != '' 
        });    
        objectsOfArt2.forEach((artObject) => { 
            render(artObject) 
        });
    });
}



///////// button for brussel ////////
export function brusselFilter(){
    loading()

    clearElement(section1)
    getData(url).then((data) => 
    { let objectsOfArt = data.artObjects
        let objectsOfArt2 = (objectsOfArt).filter(function(filteredData)
        {
        return filteredData.productionPlaces == "Brussel" } );
    {
        objectsOfArt2.forEach((artObject) => { render(artObject) } );
    }});
}



///////// button for amsterdam////////
export function amsterdamFilter(){
        loading()
    
        clearElement(section1)
        getData(url).then((data) => 
        { let objectsOfArt = data.artObjects
            let objectsOfArt2 = (objectsOfArt).filter(function(filteredData)
            {
            return filteredData.productionPlaces == "Amsterdam" } );
        {
            objectsOfArt2.forEach((artObject) => { render(artObject) } );
        }});
}

///////// button for neurenberg ////////
export function utrechtFilter(){
        loading()
    
        clearElement(section1)
        getData(url).then((data) => 
        { let objectsOfArt = data.artObjects
            let objectsOfArt2 = (objectsOfArt).filter(function(filteredData)
            {
            return filteredData.productionPlaces == "Utrecht" } );
        {
            objectsOfArt2.forEach((artObject) => { render(artObject) } );
        }});
}



///////// button for utrecht ////////
export function neurenbergFilter(){
        loading()
    
        clearElement(section1)
        getData(url).then((data) => 
        { let objectsOfArt = data.artObjects
            let objectsOfArt2 = (objectsOfArt).filter(function(filteredData)
            {
            return filteredData.productionPlaces == "Neurenberg" } );
        {
            objectsOfArt2.forEach((artObject) => { render(artObject) } );
        }});
    }

