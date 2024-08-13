//Create an a class and extend it - Can be anything you would like it to be! 

class Animal{
    constructor(name){
        this._name = name
    }

    get name(){
        return this._name
    }

    speak(){
        console.log(`${this.name} makes a sound`)
    }
}

class SugarGlider extends Animal{
    constructor(name, flightDist){
        super(name)
        this._flightDist = flightDist
    }

    get flightDist(){
        return this._flightDist
    }

    speak(){
        super.speak()
        return `${this.name} screeched so loud you'd think it was in saved by the bell`
    }
}

let luna = new SugarGlider('Luna', 150)

console.log(luna.speak())
console.log(luna.name)
console.log(luna.flightDist)
console.log(`${luna.name} flew ${luna.flightDist} feet and upon landing immediately, ${luna.speak()}`)
luna._name = 'beers'
console.log(luna._name)
console.log(luna.name)