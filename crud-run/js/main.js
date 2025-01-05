document.querySelectorAll('.option').forEach(option => {
    option.addEventListener('click', getSelection)
});


async function getSelection(e){
    e.preventDefault();
    const selection = e.target.getAttribute('name')
    try{
        const res = await fetch(`/api/${selection}`);
        const data = await res.json();

        const sprite = document.getElementById('sprite');
        let currentIndex = 0;
        const spriteStates = data.states

        setInterval(() => {
            sprite.style.opacity = '0';

            setTimeout(() => {

                sprite.className = spriteStates[currentIndex].class;
                sprite.style.backgroundPosition = spriteStates[currentIndex].position;
                sprite.style.height = spriteStates[currentIndex].height;
                sprite.style.width = spriteStates[currentIndex].width;
                sprite.style.opacity = '1';

                currentIndex = (currentIndex + 1) % spriteStates.length;
            },150);
        }, 400)
    }
    catch(e){
        console.log(e);
    }
}

document.addEventListener('DOMContentLoaded', cycleSprites);