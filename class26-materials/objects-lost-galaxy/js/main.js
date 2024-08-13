//Create a pizza object that has four properties and three methods


const pizza = {
    dough: 'fresh',
    sauce: 'creamy',
    toppings: ['chicken', 'pepperoni'],
    cheese: 'melty',
    bake: () => {
        console.log(`your pizza is ready`)
    },
    tossed: () => {
        console.log(`FLIP THAT ${this.dough} DOUGH!!!`)
    },
    slice: () => {
        console.log(`make sure you don't drag that ${this.cheese} cheese or these ${this.toppings}`)
    }
}