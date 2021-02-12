<!-- Add a link to your live demo in Github Pages 🌐-->
Link naar live demo: https://lottetekulve.github.io/web-app-from-scratch-2021/

<!-- ☝️ replace this description with a description of your own work -->
Rijksmuseaum webapp. Data gekregen uit API.
API link: https://www.rijksmuseum.nl/api/nl/collection/?key=7TAeATmh

Week 2
![](img/actordiagram.png)


Week 1

Dit is de eerste week van het vak Wafs, deze week heb ik voor het eerst data uit een API gehaald door middel van JS. Deze data ga ik gebruiken om een webapp te maken voor het rijksmuseum. Een klein deel van de data staat nu al in de HTML. 
<!-- replace the code in the /docs folder with your own, so you can showcase your work with GitHub Pages 🌍 -->

<!-- Add a nice poster image here at the end of the week, showing off your shiny frontend 📸 -->

<!-- Maybe a table of contents here? 📚 -->
Content:

Ik gebruik nu alleen nog de titel van het kunstwerk en de link naar het kunstwerk op de website van t rijksmuseum. Ik ga aankomende week kijken anar wat voor content ik wil gaan gebruiken.


<!-- How about a section that describes how to install this project? 🤓 -->
Dit is hoe ik de data heb opgehaald uit de API:

const request = new XMLHttpRequest() 

request.open('GET', 'https://www.rijksmuseum.nl/api/nl/collection/?key=7TAeATmh', true)

request.onload = function (){}

request.send()

<!-- ...but how does one use this project? What are its features 🤔 -->


<!-- What external data source is featured in your project and what are its properties 🌠 -->

<!-- Maybe a checklist of done stuff and stuff still on your wishlist? ✅ -->

Done:
- Data uit API gehaald
- Begin gemaakt van de HTML, CSS en JS
- Eerste elementen in de html geplaatst

Do:
- Bedenken welke data ik nodig heb
- Bedenken wat voor webapp ik wil gaan maken, wat gaat functie zijn etc.

<!-- How about a license here? 📜 (or is it a licence?) 🤷 -->

