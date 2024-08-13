//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM

let mixedDrinkList = []

function MixedDrinks(name, instructions){
    this.name = name
    // this.photo = photo
    this.instructions = instructions

    mixedDrinkList.push(this)
}

function getDrink(drinkName){
    for (let key in mixedDrinkList){
        if (drinkName.toLowerCase() === mixedDrinkList[key].name.toLowerCase()){
            return mixedDrinkList[key]
        }
    }return null
}

const marg = new MixedDrinks('margherita' , 'idk shake it')
const jack = new MixedDrinks('Jack Daniels', 'just pour it')
const whiteRussian = new MixedDrinks('white russian',  'ask the dude')

console.log(getDrink('margherita'))
console.log(getDrink('jack daniels'))
console.log(getDrink('White Russian'))

console.log(mixedDrinkList)