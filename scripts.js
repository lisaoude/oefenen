// access div with id root in HTML
const app = document.getElementById('root')


// create img element 
const logo = document.createElement('img')

// get logo source
logo.src = 'logo.png'



// create div element
const container = document.createElement('div')

// set class attribute to container
container.setAttribute('class', 'container')


// place logo and container
app.appendChild(logo)
app.appendChild(container)



// create variable request and assign XMLHttpRequest to it
var request = new XMLHttpRequest()

// open connection with GET request and URL
request.open('GET', 'https://ghibliapi.herokuapp.com/films', true)

// access JSON data
request.onload = function () {
    var data = JSON.parse(this.response)

    if (request.status >= 200 && request.status < 400) {
        data.forEach((movie) => {

            // create div and set class attribute
            const card = document.createElement('div')
            card.setAttribute('class', 'card')

            // create h1 and set text content to movie title
            const h1 = document.createElement('h1')
            h1.textContent = movie.title

            const p = document.createElement('p')

            // limit to 300 characters per description
            movie.description = movie.description.substring(0, 300)

            // end description with three dots
            p.textContent = `${movie.description}...`

            // append cards to the container
            container.appendChild(card)

            // add h1 and p to each card
            card.appendChild(h1)
            card.appendChild(p)
        })

    } else {
        console.log('error')
    }
}

// send the request
request.send()
