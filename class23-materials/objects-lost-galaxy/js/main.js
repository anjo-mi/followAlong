//Create a dog object that has four properties and three methods

let puppers = {
    name: 'drogo',
    breed: 'boxer',
    color: 'bronze',
    isGoodBoy: true,
    bark: function(){
        alert('someones here but ill do nothing about it')
    },
    cuddle: function(){
        alert('of course im not too big for your lap')
    },
    play: function(){
        alert('lemme chase down that ball!')
    }
}

puppers.soccer = function(){
    alert('pele of the pups')
}

puppers.soccer()