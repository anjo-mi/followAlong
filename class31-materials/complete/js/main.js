// class Animal{
//     constructor(name){
//         this._name = name
//     }

//     get name(){
//         return this._name
//     }

//     speak(){
//         console.log(`${this._name} makes a sounds`)
//     }
// }

// class Dog extends Animal{
//     constructor(name,breed){
//         super(name)
//         this._breed = breed
//     }
//     get breed(){
//         return this._breed
//     }

//     speak(){
//         super.speak()
//         console.log(`${this._name} barks`)
//     }
// }

// class Cat extends Animal{
//     constructor(name, breed){
//         super(name)
//         this._breed = breed
//     }
//     get breed(){
//         return this._breed
//     }
//     speak(){
//         super.speak()
//         console.log(`${this._name} purrs`)
//     }
// }


class Animal{
    constructor(name){
        this._name = name
    }
    get name(){
        return this._name
    }
    speak(){
        console.log(`${this._name} makes a sound`)
    }
}
class Dog extends Animal{
    constructor(name,breed){
        super(name)
        this._breed = breed
    }
    get breed(){
        return this._breed
    }
    speak(){
        super.speak()
        console.log(`${this.name} barks`)
    }    
}
class Cat extends Animal{
    constructor(name,breed){
        super(name)
        this._breed = breed
    }
    get breed(){
        return this._breed
    }
    speak(){
        super.speak()
        console.log(`${this.name} meows`)
    }    
}

class SugarGlider extends Animal{
    constructor(name, flightDistance){
        super(name)
        this._flightDistance = flightDistance
    }
    get flightDistance(){
        return this._flightDistance
    }
    speak(){
        super.speak()
        console.log(`${this.name} screeched so loud your ears fell off`)
    }
}

let simba = new Dog('Simba','Shepard')
let machi = new Dog('The Machine','Pitbull')
let salem = new Cat('Salem', 'American Shorthair')
let luna = new SugarGlider('Luna', 160)

let farm = [simba,machi,salem, luna]

console.log(farm)

for( a of farm ){
    a.speak()
}