//Arrays

//Create and array of numbers. Sum all of the numbers. Alert the sum.

let arr = Array(5,43,34,14,657)
alert(arr.reduce((a,el) => a += el, 0))

//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared

function palmerSquares(arr){
    return arr.map(el => el**2)
}
alert(palmerSquares(arr))

//Create a function that takes string
//Print the reverse of that string to the console

function backwards(str){
    return str.split('').reverse().join('')
}

alert(backwards('butthole'))

//Create a function that takes in a string
//Alert if the string is a palindrome or not

function palindrome(str){
    return str === backwards(str) ? 'its a drome' : 'not a drome'
}

console.log(palindrome('racecar'))
console.log(palindrome('butthole'))