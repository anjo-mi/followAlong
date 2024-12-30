//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const date = document.querySelector('input').value
  const url = `https://api.nasa.gov/planetary/apod?api_key=EmAXVAhewaJUX1DRWDaD7rDwwJU9zxR4nLnH45SJ&date=${date}`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        if (data['media_type'] === 'image'){
          document.querySelector('img').src = data.hdurl
        }else if(data['media_type'] === 'video'){
          document.querySelector('img').remove()
          let vid = document.querySelector('iframe')
          vid.style.display = 'block'
          vid.style.height = '400px'
          vid.style.margin = '0 auto' 
          vid.src = data.url
        }
        document.querySelector('h3').innerText = data.explanation
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

