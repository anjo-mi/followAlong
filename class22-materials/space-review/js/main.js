//Arrays

//Create and array of numbers. Sum all of the numbers. Alert the sum.

let nums = [1,4,87,34,23453,12]

let sum = nums.reduce((a,el) => a += el, 0)
console.log(sum)

//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared

function squared(arr){
    return arr.map(el => el = el**2)
}

console.log(squared(nums))

//Create a function that takes string
//Print the reverse of that string to the console

function reverse(str){
    let arr = str.split('')
    let newStr = arr.reverse().join('')
    return newStr
}

console.log(reverse('buttholes'))

//Create a function that takes in a string
//Alert if the string is a palindrome or not

function palindrome(str){
    if (str === reverse(str)){
        return 'palindrome'
    }else{
        return 'not a palindrome'
    }
}

console.log(palindrome('racecar'))

console.log(palindrome('buttholes'))