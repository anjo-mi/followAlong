//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM
 
function getDrink(){
    let drink = document.querySelector('input').value
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            document.querySelector('img').src = data.drinks[0].strDrinkThumb
            let name = document.createElement('p')
            name.innerText = data.drinks[0].strDrink
            document.querySelector('h2').append(name)
            let instr = document.createElement('p')
            instr.innerText = data.drinks[0].strInstructions
            document.querySelector('h3').append(instr)

        })
        .catch(err => {
            console.log(`the error '${err}' occurred`)
        })
}

document.querySelector('button').addEventListener('click', getDrink)