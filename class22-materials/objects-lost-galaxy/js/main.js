//Create a mouse object that has four properties and three methods

let mouse = {
    color: 'black',
    brand: 'logitech',
    hasScroll: true,
    shape: 'ovular',
    hasMovementBall: false,
    leftClick: function(){
        console.log('this was clicked by the left button')
    },
    rightClick: function(){
        console.log('this was clicked by the right button')
    },
    move: function(){
        console.log('the mouse was moved')
    }
}

mouse.rightClick()
mouse.leftClick()
mouse.move() 