var game = {
	numOfPlayers: 0,
	initializeGame: function() {
		view.setBoard( initialBoardView );
		view.showBoard();
	},
	setNumOfPlayers: function( newNum ) {
		game.numOfPlayers = newNum;
	}
	
};