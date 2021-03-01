// function to make the loading element with the timer

export default function loading(){
    let 
        main = document.querySelector("main"),
        loader = document.createElement("img");

    loader.src = './images/loading12.gif';
    main.appendChild(loader);

    setTimeout(() => loader.style.display = 'none', 2000);
}