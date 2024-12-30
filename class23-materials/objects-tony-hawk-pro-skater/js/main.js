//Create a Tony Hawk Pro Skater constructor that makes skating game characters with 4 properties and 3 methods


class Skater{
    constructor(name, board, shoes, skill){
    this.name = name
    this.board = board
    this.shoes = shoes
    this.skill = skill
    }
    ollie(){
        console.log('upsiedaisies')
    }
    grind(){
        console.log('skirrrrrrrrt')
    }
    twist(){
        console.log('bring it around town')
    }
    manual(){
        console.log('balance for like 15 minutes after time runs out')
    }
}

const tony = new Skater('tony hawk', 'TMNT', 'vans', 97)

const bam = new Skater('bam margara', 'TMNT', 'vans', 91)