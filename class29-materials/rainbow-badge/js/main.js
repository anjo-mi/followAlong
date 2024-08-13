//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const poke1 = document.querySelector('#poke1').value
  const poke2 = document.querySelector('#poke2').value
  const url = 'https://pokeapi.co/api/v2/pokemon/'+poke1
  const url2 = 'https://pokeapi.co/api/v2/pokemon/'+poke2
  let pokeStore = []
  let pokeImg = []



  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data.species.url)
        document.getElementById('pokeImg1').src = data.sprites.front_default
        
        pokeStore.push(data.types[0].type.name)
        pokeImg.push(data.sprites.front_shiny)
        
        fetch(url2)
        .then(res => res.json()) // parse response as JSON
        .then(data => {
          console.log(data)
          document.getElementById('pokeImg2').src = data.sprites.front_default
          
          document.getElementById('pokeImg2')
          pokeStore.push(data.types[0].type.name)
          pokeImg.push(data.sprites.front_shiny)
      
          if((pokeStore[0] === "grass" && pokeStore[1] === 'water')){
            document.querySelector('#pokeImg1').src = pokeImg[0]
            document.querySelector('#pokeImg2').src = pokeImg[1]
            document.querySelector('h2').innerText = " 2x > "
          }
        })
        .catch(err => {
            console.log(`error ${err}`)
        });


      })
      .catch(err => {
          console.log(`error ${err}`)
      });      
}

const url = 'https://pokeapi.co/api/v2/pokemon/charmander'
const url2 = 'https://pokeapi.co/api/v2/pokemon/pikachu'

fetch(url)
  .then(res => res.json())
  .then(data => {
    console.log(data)
  })
  .catch(err => {
    console.log(`the error ${err}, occurred`)
  })


fetch(url2)
  .then(res => res.json())
  .then(data => {
    console.log(data)
  })
  .catch(err => {
    console.log(`the error ${err}, occurred`)
  })