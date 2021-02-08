export default function render(data) {
  const app = document.getElementById("blok");

  //container aanmaken per artObject
  const container = document.createElement("div");
  container.setAttribute('class', 'container')

  //image aanmaken per artObject
  const picture = document.createElement("img");
  picture.src = data.webImage.url;

  // Link naar rijksmuseum pagina van artObject
  const link = document.createElement("a");
  link.href = data.links.web;
  link.target = "_blank";

  //titel van elk artObject weergeven in h1
  const title = document.createElement("h2");
  title.textContent = data.title;

  // p aangemaakt voor principalOrFirstMaker
  const auteur = document.createElement("h3");
  auteur.textContent = data.principalOrFirstMaker;

  // puts container als child van anchor. Link dus om hele container heen
  link.appendChild(container);
  

  //puts () als child van container
  container.appendChild(picture);
  container.appendChild(title);
  container.appendChild(auteur);

  //puts anchor als child van de app
  app.appendChild(link);
}
