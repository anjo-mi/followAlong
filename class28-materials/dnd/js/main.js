//Example fetch using DnD5eAPI - place subclasses in ul
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const choice = document.querySelector('input').value
  const url = `https://www.dnd5eapi.co/api/spells/${choice.split(' ').join('-')}`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        document.querySelector('h2').textContent = data.name
        let classes = []
        data.classes.forEach(el => {
            classes.push(el.name)
        })
        document.querySelector('h3').textContent = classes.join(', ')
        
        let subClasses = []
        data.subclasses.forEach(el => {
            subClasses.push(el.name)
        })
        document.querySelector('h4').textContent = subClasses.join(', ')
        
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

