const app = document.getElementById('root')

const foto = document.createElement('img')
foto.src = 'rijksmuseum.jpg'

const container = document.createElement('div')
container.setAttribute('class', 'container')

app.appendChild(foto)
app.appendChild(container)


const request = new XMLHttpRequest()

//open dmv GET en de link
request.open('GET', 'https://www.rijksmuseum.nl/api/nl/collection/?key=7TAeATmh', true)

request.onload = function (){
//hier komt begin van accessing json data

    const data = JSON.parse(this.response)

    if (request.status >= 200 && request.status < 400) {
        data.artObjects.forEach((data) => {

        const blok = document.createElement('div')
        blok.setAttribute('class', 'blok')

        const titel = document.createElement('h1')
        titel.textContent = data.longTitle

        const p = document.createElement('p')
        p.textContent = data.links.web
        
        container.appendChild(blok)
        blok.appendChild(titel)
        blok.appendChild(p)
        })
    
      } else {
        console.log('error')
    
      }
    }

//send request 
request.send()
