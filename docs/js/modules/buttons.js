import { render } from "./render.js";
import getData from "./api.js";

const url = "https://www.rijksmuseum.nl/api/nl/collection/?key=7TAeATmh&ps=1000"; 

function clearElement(element) {
    element.innerHTML = ''
}


///////// button for all art objects ////////
////////////////////////////////////////////
export function button1(){

    buttonFunction()

    const header = document.querySelector("header"),
    all = document.createElement("button");
    all.textContent = 'All art objects'

    header.appendChild(all);
                
    /* This sets the action to perform on a click event */
    all.onclick = function() {  
    buttonFunction()  
    }

    function buttonFunction () {
    clearElement(section1)
    getData(url).then((data) => {
        data.artObjects.forEach((artObject) => render(artObject));
    });
}
}



/////////all with production places////////
/////////////////////////////////////
export function button2(){

    const header = document.querySelector("header"),
    withProductionPlaces = document.createElement("button");
    withProductionPlaces.textContent = 'All with production places'

    header.appendChild(withProductionPlaces);
                
    
    /* This sets the action to perform on a click event */
    withProductionPlaces.onclick = function() {  
      buttonFunction2()  
      };  
    
    function buttonFunction2 () {
      clearElement(section1)
      getData(url).then((data) => 
      { let objectsOfArt = data.artObjects
        let objectsOfArt2 = (objectsOfArt).filter(function(filteredData)
        {
          return filteredData.productionPlaces != '' } );
      {
        objectsOfArt2.forEach((artObject) => { render(artObject) } );
    }});
    }
    }



///////// button for brussel ////////
/////////////////////////////////////
export function button3(){

    const header = document.querySelector("header"),
    brussel = document.createElement("button");
    brussel.textContent = 'Brussel'

    header.appendChild(brussel);

    /* This sets the action to perform on a click event */
    brussel.onclick = function() {  
    buttonFunction3()  
    };  

    function buttonFunction3 () {
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
}



///////// button for amsterdam////////
/////////////////////////////////////
export function button4(){


    const header = document.querySelector("header"),
    amsterdam = document.createElement("button");
    amsterdam.textContent = 'Amsterdam'

    header.appendChild(amsterdam);
                

    /* This sets the action to perform on a click event */
    amsterdam.onclick = function() {  
    buttonFunction4()  
    };  

    function buttonFunction4 () {
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
}

///////// button for neurenberg ////////
/////////////////////////////////////
export function button5(){


    const header = document.querySelector("header"),
    neurenberg = document.createElement("button");
    neurenberg.textContent = 'Neurenberg'

    header.appendChild(neurenberg);
                

    /* This sets the action to perform on a click event */
    neurenberg.onclick = function() {  
    buttonFunction5()  
    };  

    function buttonFunction5 () {
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
}

///////// button for utrecht ////////
/////////////////////////////////////
export function button6(){


    const header = document.querySelector("header"),
    utrecht = document.createElement("button");
    utrecht.textContent = 'Utrecht'

    header.appendChild(utrecht);
                

    /* This sets the action to perform on a click event */
    utrecht.onclick = function() {  
    buttonFunction6()  
    };  

    function buttonFunction6 () {
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
}

