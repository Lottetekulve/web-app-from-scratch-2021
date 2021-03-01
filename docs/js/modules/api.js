///// get the data from de api//////
export default function getData(url) {
  return fetch(url)
    .then((response) => response.json())
    .catch((err) => console.log("Error: " + err));
}


