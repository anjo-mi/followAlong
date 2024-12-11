// js for updating, use with app.put in server

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
        console.log(data)
        window.location.reload(true)
    })
    .catch(err => console.log(err))
})

// js for deleting, use with app.delete in server

const deleteButton = document.getElementById('delete-button')
const message = document.querySelector('.message')

deleteButton.addEventListener('click', (e) => {
    e.preventDefault()
    fetch('/quotes', {
        method: 'delete',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            name: 'poop',
        })
    }).then(res => {
        if (res.ok) return res.json()
    }).then(data => {
        if (data === 'you could eat off it'){
            message.textContent = data
        }else{
            console.log(data)
            window.location.reload(true)
        }
    }).catch(err => console.log(err))
})