import getData from './api.js'
import { 
    noFilter, 
    brusselFilter,
    amsterdamFilter,
    utrechtFilter, 
    neurenbergFilter
} from './filter.js'


/////url van API/////

const url = "https://www.rijksmuseum.nl/api/nl/collection/?key=7TAeATmh&ps=100";


//function for counting the places
export function createOverview() {


// function that counts the times a city is mentioned in de api as productionPlaces

  async function countCity(data, city) { 
      let count = 0
      data.artObjects.forEach(artObject => {
        if (artObject.productionPlaces == city) { 
          count++ 
        } else if (!city) {
          count++
        }
      })
      return count
  }

  // Function that puts the numbres to the cities and connects the buttons with the functions 

  async function buttonCreate() {

    const header = document.querySelector("header")
    const div = document.createElement("div");
    const data = await getData(url)
    const brusselCount = await countCity(data, 'Brussel (stad)')
    const amsterdamCount = await countCity(data, 'Amsterdam')
    const utrechtCount = await countCity(data, 'Utrecht')
    const neurenbergCount = await countCity(data, 'Parijs')
    const allCount = await countCity(data)
  
    const buttons = [
      {
        name: `All art objects ${allCount}`,
        function: noFilter
      },
      {
          //// name of the city with the number of how many art objects have Brussel as their production place
        name: `Brussel ${brusselCount}`,
        /// says function is brusselfunctie and brusselfunction get imported from buttons.js at the top of the page
        function: brusselFilter
      },
      {
        name: `Amsterdam ${amsterdamCount}`,
        function: amsterdamFilter
      },
      {
        name: `Utrecht ${utrechtCount}`,
        function: utrechtFilter
      },
      {
        name: `Parijs ${neurenbergCount}`,
        function: neurenbergFilter 
  
      },
    ]
    
      /// creates for each const button a clickable button in html with an eventlistener. 
    buttons.forEach((button) => {
      const btn = document.createElement("button");
      // the buttons gets its name here
      btn.textContent = button.name;
      // the function for each buttons is called here: button.function. These functions will only happen when clicked on the button.
      btn.addEventListener('click', button.function);
      // puts the button in the div
      div.appendChild(btn)
      header.appendChild(div)
    })
  }

  buttonCreate()
  noFilter()

}