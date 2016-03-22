var gameController = { 
	startGame: function() {
		var newNum = $( "#howManyPlayers" ).val();
		game.setNumOfPlayers( newNum );
		game.initializePlayers();
		deck.shuffle();
		deck.dealCards();
		view.createBoard( game.numOfPlayers );
		playerController.evalAllHands();
		//view.showBoard();
		view.showBtns()
		view.updatePlayerInterface();
	},
	resetGame: function() {
		game.listOfPlayers = [];
		view.createBoard( 0 );
		view.hideBtn( "reset", "hitBtn", "stayBtn", "splitBtn" );
		view.clearInterface();
		view.showBoard();
		deck.resetDeck();
		playerController.resetTurn();
	},
	allLose: function() {
		var players = game.listOfPlayers;
		var numOfPlayers = players.length;
		for( var i = 1; i < numOfPlayers; i++ ) {
			if( players[i].handVal <= 21 ) {
				return false;
			}
		}
		return true;
	},
	checkForWinners: function() {
		var players = game.listOfPlayers;
		var numOfPlayers = players.length;
		var dealerScore = players[0].handVal;
		var currentPlayerScore;
		var numWinners = 0;
		var msg = "Winner:"
		var i;

		if( players[0].state === states.BUST ) {
			for( i = 1; i < numOfPlayers; i++ ) {
				if( players[i].handVal <= 21 ) {
					msg += players[i].playerNo;
				}
			}
		}
		else {
			for( i = 1; i < numOfPlayers; i++ ) {
				currentPlayerScore = players[i].handVal
				if( currentPlayerScore <= 21 &&  currentPlayerScore >= dealerScore ) {
					msg += players[i].playerNo;
					numWinners++;
				}
			}
			if( numWinners === 0 ) {
				msg += " Dealer";
			}
		}
		
		view.insertMsg( msg, "winner", "" );
	}
}