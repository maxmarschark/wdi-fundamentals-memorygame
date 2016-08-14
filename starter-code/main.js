console.log("JS file is connected to HTML! Woo!")


var cards = ['queen', 'queen', 'king', 'king'];

var cardsInPlay = [];


//find board set to var so we can add cards
var board = document.getElementById('game-board');


function createBoard() {
  for (var i=0; i<cards.length; i++) {
    var cardElement = document.createElement('div');
    cardElement.className = 'card';
		
    cardElement.setAttribute('data-card', cards[i]);
    cardElement.addEventListener('click', isTwoCards);
    board.appendChild(cardElement);
    board.appendChild(cardElement);
  }

}