//Create a constructor with 4 properties and 3 methods
class Pizza {
    constructor(dough, sauce, toppings, cheese, slices){
        this.dough = dough
        this.sauce = sauce
        this.toppings = toppings
        this.cheese = cheese
        this.slices = slices
    }
    toss() {
        console.log(`FLIP THAT ${this.dough} dough`)
    }
    bake() {
        console.log(`wait for the cheese to be ${this.cheese}`)
    }
    slice() {
        console.log(`cut into ${this.slices} slices`)
    }
}

let pizza = new Pizza('fresh', 'creamy', ['chicken', 'bacon', 'peppers'], 'melty', 8)
