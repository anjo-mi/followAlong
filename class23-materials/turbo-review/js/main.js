// *Variables*
// Declare a variable and assign it to a sentance as a string. Alert if the sentance is a question

let str = 'kinda pumped that i feel like im getting this.'

let arr = str.split('')

arr[arr.length - 1] === '?' ? alert('thats a question') : alert('not a question')

//Declare a variable, assign it a string of multiple words, replace every "jr. dev" with "software engineer", and print it to the console

let bio = 'im kyle, i go by anjomi, and im currently a jr. dev'

let betterBio = bio.replaceAll('jr. dev', 'software engineer')

alert(betterBio)

// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible

function rps(){
    let rando = Math.floor(Math.random() * 3)
    return rando === 0 ? 'rock' : rando === 1 ? 'paper' : 'scissors'
}

// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function

function userRPS(str){
    let botRPS = rps()
    if ((str === 'rock' && botRPS === 'scissors') || (str === 'paper' && botRPS === 'rock') || (str === 'scissors' && botRPS === 'paper')){
        alert('user wins')
    }else if(str === botRPS){
        alert('thats a draw')
    }else{
        alert('bot wins')
    }
}

//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each game to the console.

function bestOf(arr){
    arr.forEach(el => userRPS(el))
}

bestOf(['rock', 'rock', 'rock', 'paper', 'rock', 'paper', 'scissors'])