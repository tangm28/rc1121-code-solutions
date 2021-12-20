console.log('Lodash is loaded:', typeof _ !== 'undefined');
function shuffle(deck) {
  var createDeck = [];
  var shuffledDeck = [];
  for (var i = 0; i < deck[0].length; i++) {
    for (var j = 0; j < deck[1].length; j++) {
      var card = {};
      card[deck[0][i]] = deck[1][j];
      createDeck.push(card);
    }
  }
  shuffledDeck = _.shuffle(createDeck);
  console.log('Deck Shuffled!');
  return shuffledDeck;
}

function play(deck, players, numCards) {
  var totalCards = 4 * numCards;
  for (var i = 0; i < totalCards; i++) {
    if (i % 4 === 0) {
      players[0].hand.push(deck[i]);
    } else if (i % 4 === 1) {
      players[1].hand.push(deck[i]);
    } else if (i % 4 === 2) {
      players[2].hand.push(deck[i]);
    } else if (i % 4 === 3) {
      players[3].hand.push(deck[i]);
    }
  }
  console.log('Numbers of card dealt to each player: ', numCards);
  var first = '';
  var firstTotal = 0;
  var secondTotal = 0;
  for (var j = 0; j < players.length; j++) {
    var card1 = players[j].hand[0][Object.keys(players[j].hand[0])];
    var card2 = players[j].hand[1][Object.keys(players[j].hand[1])];
    if (card1 === 'J' || card1 === 'Q' || card1 === 'K') {
      card1 = 10;
    } else if (card1 === 'A') {
      card1 = 11;
    }
    if (card2 === 'J' || card2 === 'Q' || card2 === 'K') {
      card2 = 10;
    } else if (card2 === 'A') {
      card2 = 11;
    }
    var totalPoints = card1 + card2;
    if (totalPoints >= firstTotal) {
      secondTotal = firstTotal;
      first = players[j].player;
      firstTotal = totalPoints;
    }
  }
  if (firstTotal === secondTotal) {
    console.log('Tied game; play again! Tie-Breaker to be added in the near future.');
  } else {
    console.log(first, 'is the winner with a total points of:', firstTotal);
  }
}

var players = [
  {
    player: 'player1',
    hand: []
  },
  {
    player: 'player2',
    hand: []
  },
  {
    player: 'player3',
    hand: []
  },
  {
    player: 'player4',
    hand: []
  }
];

var deck = [
  ['spade', 'heart', 'clubs', 'diamond'],
  ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K']
];

play(shuffle(deck), players, 2);
