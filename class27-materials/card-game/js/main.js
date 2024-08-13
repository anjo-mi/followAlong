let deckId =''
document.querySelector('button').addEventListener('click', draw)

fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data)
    deckId = data.deck_id
    })
    .catch(err => {
        console.log(`error ${err}`)
    });
function draw(){
  const url = `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=2`
  fetch(url)
    .then(res => res.json())
    .then(data => {
      console.log(data)
      document.getElementById('player1').src = data.cards[0].image
      document.getElementById('player2').src = data.cards[1].image
      let player1Val = convertToNum(data.cards[0].value)
      let player2Val = convertToNum(data.cards[1].value)
      if (player1Val > player2Val){
        document.querySelector('h3').innerText = 'Player 1 Wins'
      }else if(player1Val < player2Val){
        document.querySelector('h3').innerText = 'Player 2 Wins'
      }else{
        document.querySelector('h3').innerText = 'DECLARE WAR!'
        
      }
    })
    .catch(err => {
      console.log(`the error: ${err} occurred`)
    })
}


function convertToNum(str){
  switch (str){
    case 'ACE' : 
      return 14
      break;
    case 'KING' : 
      return 13
      break;
    case 'QUEEN' : 
      return 12
      break;
    case 'JACK' : 
      return 11
      break;
    default : 
      return +str
  }
}