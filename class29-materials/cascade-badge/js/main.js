//Arrays
//Your pokemon party order which is a list of pokemon has been leaked to Misty. Please create a function that reverses your list and prints it to the console. 

let pokes = ['pikachu', 'charmander', 'mewtoo', 'butt']

const reversePartyOrder = partyArr => {
    let reversed = partyArr.reverse()
    console.log(reversed)
    return reversed
}

console.log(reversePartyOrder(pokes))

//Given two integer arrays a, b, both of length >= 1, create a program that returns true if the sum of the squares of each element in a is strictly greater than the sum of the cubes of each element in b.

const squaresVsCubes = (a,b) => {
    return a.reduce((a,el) => a + el**2 ,0) > b.reduce((a,el) => a + el**3 ,0) ? console.log(`a's squares are larger`) : console.log(`b's cubes are greater or equal`)
}

let arr1 = [9,8,7]
let arr2 = [1,2,3]
let arr3 = [1,1,1]

squaresVsCubes(arr1,arr2)
squaresVsCubes(arr2,arr1)
squaresVsCubes(arr3,arr3)


//Return a new array consisting of elements which are multiple of their own index in input array (length > 1).
// Some cases:
// [22, -6, 32, 82, 9, 25] =>  [-6, 32, 25]
// [68, -1, 1, -7, 10, 10] => [-1, 10]

const indexIsDivisor = arr => arr.filter((el,i) => el % i === 0)

let a = [22, -6, 32, 82, 9, 25]
let b = [68, -1, 1, -7, 10, 10]

console.log(indexIsDivisor(a))
console.log(indexIsDivisor(b))


//Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.Return your answer as a number.

const sumStrings = arr => arr.reduce((a,el) => a + +el, 0)

console.log(sumStrings(['2','4','9','56']))