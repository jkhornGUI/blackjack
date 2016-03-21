var game = {
	numOfPlayers: 0,
	initializeGame: function() {
		view.setBoard( createBoard( game.numOfPlayers ) );
		view.showBoard();
	},
	setNumOfPlayers: function( newNum ) {
		game.numOfPlayers = newNum;
	}
};