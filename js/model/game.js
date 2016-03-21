var game = {
	numOfPlayers: 0,
	initializeGame: function() {
		view.setBoard( createBoard( numOfPlayers ); );
		view.showBoard();
	},
	setNumOfPlayers: function( newNum ) {
		game.numOfPlayers = newNum;
	}
};