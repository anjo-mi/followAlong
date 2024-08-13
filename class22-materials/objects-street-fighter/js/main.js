//Create a street fighter constructor that makes fighting game characters with 4 properties and 3 methods

function Fighter(name, size, strength, ability, abilityCanUse){
    this.name = name
    this.size = size
    this.strength = strength
    this.ability = ability
    this.abilityCanUse = abilityCanUse
    this.punch = function(){
        console.log(`you threw hands and connected for ${this.strength} damage`)
    }
    this.kick = function(){
        console.log(`playin a little footy in this bitch, got him for ${this.strength * 1.5} damage`)
    }
    this.jump = function(){
        console.log(`cudi zone: we soarin ${this.size * 3} off the ground`)
    }
    this.specialMove = function(){
        if (this.abilityCanUse){
            console.log(`nailed him with the ${this.ability} for ${this.strength * 5} damage`)
        }else{
            console.log(`your ${this.ability} has been rendered useless`)
        }
    }
}

const ryu = new Fighter('ryu', 2, 4, 'hadduken', true)

ryu.punch()
ryu.kick()
ryu.jump()
ryu.specialMove()

ryu.abilityCanUse = false

ryu.specialMove()
