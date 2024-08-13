// Variables
//You are getting ready to face Brock for the Boulder Badge. You want three pokemon on your team that each have evolved at least once. You have bulbasaur which is at level 5 and evolves at level 16, caterpie which is at level 1 and evolves at level 7, and weedle which is at level 1 and evolves at level 7. Create three variables to store the number of rare candies each of your pokemon would need to evolve (rare candies increase your level by one). Finally, create a fourth variable named totalCandies that sums all the rare candies you would need. 


let levelBulbasaur = 5
let levelCaterpie = 1
let levelWeedle = 1

let evolveBulb = 16
let evolveCat = 7
let evolveWee = 7

let bulbCandies = evolveBulb - levelBulbasaur
let catCandies = evolveCat - levelCaterpie
let weedCandies = evolveWee - levelWeedle

let candiesNeeded = bulbCandies + catCandies + weedCandies

console.log(candiesNeeded)

//Conditionals And Functions
//You have a charmander in your party. Charmander can only battle if the temperature is above 0 degrees celcius. Create one function that converts a Fahrenheit value to Celcius and another fuction that tells you wheither or not charmander can battle

const convertFahrToCels = degrees => (degrees - 32) * 5/9

const canCharmanderFight = temp => convertFahrToCels(temp) > 0 ? console.log('bring the HEEEEAAAAATTTTT!!!') : console.log('get charmander a sweater')

canCharmanderFight(32)

canCharmanderFight(44)

canCharmanderFight(12)

//Loops
//You have joined an undeground pokemon leauge. In this league, trainers can use any number of pokemon. Print to the console "Pikachu I choose you" x times where x is the number of pokemon the trainer you are battling has in their party

let competitorsPokemon = 4

const bringOutTheChu = opponents => {
    for (let i = 1 ; i <= opponents ; i++){
        console.log('pikachu I choose you!')
    }
}


bringOutTheChu(competitorsPokemon)