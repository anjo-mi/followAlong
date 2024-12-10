const update = document.getElementById('update-button')

update.addEventListener('click', (e) => {
    e.preventDefault()
    console.log('button clicked')
    fetch('http://localhost:3000/quotes', {
        method: 'put',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            name: 'poop',
            quote: 'shooter',
        })
    })
    .then(res => {
        if (res.ok) return res.json()
        throw new Error('something went wrong')
    })
    .then(data => {
        window.location.reload(true)
    })
    .catch(err => console.log(err))
})