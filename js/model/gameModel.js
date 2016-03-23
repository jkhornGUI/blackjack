var game = {
	numOfPlayers: 0,
	listOfPlayers: [],
	initializeGame: function() {
<<<<<<< HEAD
		//console.log("initalizaing game...");
=======
		console.log("initalizaing game...");
>>>>>>> origin/gh-pages
		view.createBoard( this.numOfPlayers );
		view.showBoard();
	},
	setNumOfPlayers: function( newNum ) {
		this.numOfPlayers = parseInt( newNum );
	},
	initializePlayers: function() {
<<<<<<< HEAD
		//console.log("initializing players...");
=======
		console.log("initializing players...");
>>>>>>> origin/gh-pages
		this.listOfPlayers[0] = new player( "dealer" );
		for( var i = 1; i <= this.numOfPlayers; i++ ) {
			this.listOfPlayers[i] = new player( "Player " + i );
		}
	}
};