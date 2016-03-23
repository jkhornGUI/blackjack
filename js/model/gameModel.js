var game = {
	numOfPlayers: 0,
	listOfPlayers: [],
	initializeGame: function() {
		//console.log("initalizaing game...");
		view.createBoard( this.numOfPlayers );
		view.showBoard();
	},
	setNumOfPlayers: function( newNum ) {
		this.numOfPlayers = parseInt( newNum );
	},
	initializePlayers: function() {
		//console.log("initializing players...");
		this.listOfPlayers[0] = new player( "dealer" );
		for( var i = 1; i <= this.numOfPlayers; i++ ) {
			this.listOfPlayers[i] = new player( "Player " + i );
		}
	}
};