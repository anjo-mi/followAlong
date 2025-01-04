function cycleSprites(){
    const sprite = document.getElementById('sprite');
    let currentIndex = 0;
    const spriteStates = [
        {class: 'sprite-one', position: '-3px -112px'},
        {class: 'sprite-two', position: '-152px -120px'},
        {class: 'sprite-three', position: '-897px -112px'},
        {class: 'sprite-four', position: '-1010px -103px'},
    ];

    setInterval(() => {
        sprite.style.opacity = '0';

        setTimeout(() => {

            sprite.className = spriteStates[currentIndex].class;
            sprite.style.backgroundPosition = spriteStates[currentIndex].position;
            sprite.style.opacity = '1';

            currentIndex = (currentIndex + 1) % spriteStates.length;
        },150);
    }, 400)
}

document.addEventListener('DOMContentLoaded', cycleSprites);