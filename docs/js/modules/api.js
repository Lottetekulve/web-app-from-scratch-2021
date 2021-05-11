///// get the data from de api//////
export default async function getData(url) {
  return fetch(url)
    .then((response) => response.json())
    .catch((err) => console.log("Error: " + err))
    .finally(function() {
      let 
          main = document.querySelector("main"),
          loader = document.createElement("img");

      loader.src = './images/loading12.gif';
      main.appendChild(loader);

      setTimeout(() => loader.style.display = 'none', 2000)
    })
}