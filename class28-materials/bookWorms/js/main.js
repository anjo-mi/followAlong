// 9780140328721
// 9780786965601

if (!localStorage.getItem('hist')){
  localStorage.setItem('hist', '')
}

document.querySelector('h2').textContent = localStorage.getItem('hist')

document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){

  const choice = document.querySelector('input').value
  console.log(choice)
  const url = `https://openlibrary.org/isbn/${choice}.json`
  
  fetch(url)
  .then(res => res.json())
  .then(data => {
    console.log(data)
    let hist = localStorage.getItem('hist') + ' / ' + data.title
    localStorage.setItem('hist', hist)
    document.querySelector('h2').textContent = localStorage.getItem('hist')
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

