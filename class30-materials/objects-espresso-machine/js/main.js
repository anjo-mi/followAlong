//Create an espresso machine constructor that makes machines with 4 properties and 3 methods


class Espresso{
    constructor(brand, color, size, shape){
        this.brand = brand
        this.color = color
        this.size = size
        this.shape = shape
    }
    dispense(){
        console.log(`your coffee is dispensing`)
    }
    heat(){
        console.log(`your coffee is heating`)
    }
    cool(){
        console.log(`dont touch, still cooling down`)
    }
}

let gaggia = new Espresso('Gaggia', 'black', 'large', 'box')