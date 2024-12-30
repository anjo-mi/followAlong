// *Variables*
// Declare a variable and assign it to your fav drink as a string. Make sure there is no whitespace on either side of the string, and print the value to the console

let favDrink = 'water'
console.log(favDrink.trim())

//Declare a variable, assign it a string of multiple words, and check to see if one of the words is "apple".

let words = 'clearly im not gona put that bs word in here'

if (words.split(' ').some(el => el === 'apple')){
    console.log('its there')
}else{
    console.log('we dont like them apples')
}

console.log(words.search('apples'))

// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible

function rps(){
    let rando = Math.floor(Math.random() * 3)
    rando === 0 ? console.log('rock') : rando === 1 ? console.log('paper') : rando === 2 ? console.log('scissors') : console.log('you messed up')
    return rando
}

rps()

// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function

function userRPS(str){
    let bot = rps()
    str = str.toLowerCase()
    str === 'rock' ? str = 0 : str === 'paper' ? str = 1 : str === 'scissors' ? str = 2 : console.log('you messed up')
    if (str === bot){
        console.log('draw')
    }else if((str === 0 && bot === 1) || (str === 1 && bot === 2) || (str === 2 && bot === 0)){
        console.log('bot wins')
    }else if((str === 0 && bot === 2) || (str === 2 && bot === 1) || (str === 1 && bot === 0)){
        console.log('user wins')
    }
}

//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each game to the console.


function playABunch(arr){
    arr.forEach(el => userRPS(el))
}

playABunch(['scissors', 'paper', 'rock', 'rock'])