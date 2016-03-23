var deckTemplate = [
		{name:  "A", suit: "spade",   value: 11, img: "<img src ='../blackjack/cards/ace_of_spades.png'/>"},
		{name:  "A", suit: "club",    value: 11, img: "<img src ='../blackjack/cards/ace_of_clubs.png'/>"},
		{name:  "A", suit: "diamond", value: 11, img: "<img src ='../blackjack/cards/ace_of_diamonds.png'/>"},
		{name:  "A", suit: "heart",   value: 11, img: "<img src ='../blackjack/cards/ace_of_hearts.png'/>"},
		{name:  "K", suit: "spade",   value: 10, img: "<img src ='../blackjack/cards/king_of_spades2.png'/>"},
		{name:  "K", suit: "club",    value: 10, img: "<img src ='../blackjack/cards/king_of_clubs2.png'/>"},
		{name:  "K", suit: "diamond", value: 10, img: "<img src ='../blackjack/cards/king_of_diamonds2.png'/>"},
		{name:  "K", suit: "heart",   value: 10, img: "<img src ='../blackjack/cards/king_of_hearts2.png'/>"},
		{name:  "Q", suit: "spade",   value: 10, img: "<img src ='../blackjack/cards/queen_of_spades2.png'/>"},
		{name:  "Q", suit: "club",    value: 10, img: "<img src ='../blackjack/cards/queen_of_clubs2.png'/>"},
		{name:  "Q", suit: "diamond", value: 10, img: "<img src ='../blackjack/cards/queen_of_diamonds2.png'/>"},
		{name:  "Q", suit: "heart",   value: 10, img: "<img src ='../blackjack/cards/queen_of_hearts2.png'/>"},
		{name:  "J", suit: "spade",   value: 10, img: "<img src ='../blackjack/cards/jack_of_spades2.png'/>"},
		{name:  "J", suit: "club",    value: 10, img: "<img src ='../blackjack/cards/jack_of_clubs2.png'/>"},
		{name:  "J", suit: "diamond", value: 10, img: "<img src ='../blackjack/cards/jack_of_diamonds2.png'/>"},
		{name:  "J", suit: "heart",   value: 10, img: "<img src ='../blackjack/cards/jack_of_hearts2.png'/>"},
		{name: "10", suit: "spade",   value: 10, img: "<img src ='../blackjack/cards/10_of_spades.png'/>"},
		{name: "10", suit: "club",    value: 10, img: "<img src ='../blackjack/cards/10_of_clubs.png'/>"},
		{name: "10", suit: "diamond", value: 10, img: "<img src ='../blackjack/cards/10_of_diamonds.png'/>"},
		{name: "10", suit: "heart",   value: 10, img: "<img src ='../blackjack/cards/10_of_hearts.png'/>"},
		{name:  "9", suit: "spade",   value: 9,  img: "<img src ='../blackjack/cards/9_of_spades.png'/>"},
		{name:  "9", suit: "club",    value: 9,  img: "<img src ='../blackjack/cards/9_of_clubs.png'/>"},
		{name:  "9", suit: "diamond", value: 9,  img: "<img src ='../blackjack/cards/9_of_diamonds.png'/>"},
		{name:  "9", suit: "heart",   value: 9,  img: "<img src ='../blackjack/cards/9_of_hearts.png'/>"},
		{name:  "8", suit: "spade",   value: 8,  img: "<img src ='../blackjack/cards/8_of_spades.png'/>"},
		{name:  "8", suit: "club",    value: 8,  img: "<img src ='../blackjack/cards/8_of_clubs.png'/>"},
		{name:  "8", suit: "diamond", value: 8,  img: "<img src ='../blackjack/cards/8_of_diamonds.png'/>"},
		{name:  "8", suit: "heart",   value: 8,  img: "<img src ='../blackjack/cards/8_of_hearts.png'/>"},
		{name:  "7", suit: "spade",   value: 7,  img: "<img src ='../blackjack/cards/7_of_spades.png'/>"},
		{name:  "7", suit: "club",    value: 7,  img: "<img src ='../blackjack/cards/7_of_clubs.png'/>"},
		{name:  "7", suit: "diamond", value: 7,  img: "<img src ='../blackjack/cards/7_of_diamonds.png'/>"},
		{name:  "7", suit: "heart",   value: 7,  img: "<img src ='../blackjack/cards/7_of_hearts.png'/>"},
		{name:  "6", suit: "spade",   value: 6,  img: "<img src ='../blackjack/cards/6_of_spades.png'/>"},
		{name:  "6", suit: "club",    value: 6,  img: "<img src ='../blackjack/cards/6_of_clubs.png'/>"},
		{name:  "6", suit: "diamond", value: 6,  img: "<img src ='../blackjack/cards/6_of_diamonds.png'/>"},
		{name:  "6", suit: "heart",   value: 6,  img: "<img src ='../blackjack/cards/6_of_hearts.png'/>"},
		{name:  "5", suit: "spade",   value: 5,  img: "<img src ='../blackjack/cards/5_of_spades.png'/>"},
		{name:  "5", suit: "club",    value: 5,  img: "<img src ='../blackjack/cards/5_of_clubs.png'/>"},
		{name:  "5", suit: "diamond", value: 5,  img: "<img src ='../blackjack/cards/5_of_diamonds.png'/>"},
		{name:  "5", suit: "heart",   value: 5,  img: "<img src ='../blackjack/cards/5_of_hearts.png'/>"},
		{name:  "4", suit: "spade",   value: 4,  img: "<img src ='../blackjack/cards/4_of_spades.png'/>"},
		{name:  "4", suit: "club",    value: 4,  img: "<img src ='../blackjack/cards/4_of_clubs.png'/>"},
		{name:  "4", suit: "diamond", value: 4,  img: "<img src ='../blackjack/cards/4_of_diamonds.png'/>"},
		{name:  "4", suit: "heart",   value: 4,  img: "<img src ='../blackjack/cards/4_of_hearts.png'/>"},
		{name:  "3", suit: "spade",   value: 3,  img: "<img src ='../blackjack/cards/3_of_spades.png'/>"},
		{name:  "3", suit: "club",    value: 3,  img: "<img src ='../blackjack/cards/3_of_clubs.png'/>"},
		{name:  "3", suit: "diamond", value: 3,  img: "<img src ='../blackjack/cards/3_of_diamonds.png'/>"},
		{name:  "3", suit: "heart",   value: 3,  img: "<img src ='../blackjack/cards/3_of_hearts.png'/>"},
		{name:  "2", suit: "spade",   value: 2,  img: "<img src ='../blackjack/cards/2_of_spades.png'/>"},
		{name:  "2", suit: "club",    value: 2,  img: "<img src ='../blackjack/cards/2_of_clubs.png'/>"},
		{name:  "2", suit: "diamond", value: 2,  img: "<img src ='../blackjack/cards/2_of_diamonds.png'/>"},
		{name:  "2", suit: "heart",   value: 2,  img: "<img src ='../blackjack/cards/2_of_hearts.png'/>"}];

var deck = {
	faceDownCard: "<img src ='../blackjack/cards/facedown.png'/>",
	cards: deckTemplate.slice( 0 ),
	shuffle: function() {
		var v = deck.cards;
		//+ Jonas Raoni Soares Silva
		//@ http://jsfromhell.com/array/shuffle [rev. #1]
		for(var j, x, i = v.length; i; j = parseInt(Math.random() * i), x = v[--i], v[i] = v[j], v[j] = x);
		deck.cards = v;
	},
	dealCards: function() {
		var num = ( game.numOfPlayers + 1 );
		for( var i = 0; i < 2; i++ ) {
			for( var j = 1; j !== 0; j++ ) {
				if ( j === num ) {
					game.listOfPlayers[0].hand.push( deck.cards.shift() );
					break;
				}
				game.listOfPlayers[j].hand.push( deck.cards.shift() );
			}
		}
	},
	resetDeck: function() {
		this.cards = deckTemplate.slice( 0 );
	}
}