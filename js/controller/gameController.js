<<<<<<< HEAD
// gameController object
var gameController = {
	/**
	* function startGame():
	* params: none
	* return: none
	* This function start the game when the user clicks the "start game" button.
	*/
	startGame: function() {
		// get the number of players from the select element
		var newNum = $( "#howManyPlayers" ).val();
		// store it in the model
		game.setNumOfPlayers( newNum );
		// game model sets up players
		game.initializePlayers();
		// deck model shuffles card
		deck.shuffle();
		// card are dealt
		deck.dealCards();
		// view model will create the board according to the number
		// of players the user chosed
		view.createBoard( game.numOfPlayers );
		// player controller evaluates the hand, modifying data in the player
		// model according to the cards they were dealt
		playerController.evalAllHands();
		// make reset, hit, stay, split buttons visible
		view.showBtns();
		// makes player interface
		view.updatePlayerInterface();
	},
	/**
	* function resetGame():
	* params: none
	* return: none
	* This function resets the game when the user clicks the "reset" button.
	*/
	resetGame: function() {
		// set to an empty array
		game.listOfPlayers = [];
		// change view back to initial view
		view.createBoard( 0 );
		// hides buttons in the arguments
=======
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
>>>>>>> origin/gh-pages
		view.hideBtn( "reset", "hitBtn", "stayBtn", "splitBtn" );
		view.clearInterface();
		view.showBoard();
		deck.resetDeck();
<<<<<<< HEAD
		// changes turn back to player 1
		playerController.resetTurn();
	},
	/**
	* function allLose():
	* params: none
	* return: bool
	* This function returns true is all players excluding the dealer
	* have hand values greater than 21. Otherwise, it returns false.
	*/
	allLose: function() {
		var players = game.listOfPlayers;
		var numOfPlayers = players.length;
		// traversing through list of players
		for( var i = 1; i < numOfPlayers; i++ ) {
			// checking if hand value less than or equal to 21
=======
		playerController.resetTurn();
	},
	allLose: function() {
		var players = game.listOfPlayers;
		var numOfPlayers = players.length;
		for( var i = 1; i < numOfPlayers; i++ ) {
>>>>>>> origin/gh-pages
			if( players[i].handVal <= 21 ) {
				return false;
			}
		}
		return true;
	},
<<<<<<< HEAD
	/**
	* function checkForWinners():
	* params: none
	* return: none
	* This function checks for winners. 
	*/
	checkForWinners: function() {
		// get list of players from game model
		var players = game.listOfPlayers;
		var numOfPlayers = players.length;
		// get dealer's score from dealer object in array
		var dealerScore = players[0].handVal;
		
		// use to hold current players score when tranversing through
		// players array
		var currentPlayerScore;
		
		// used to keep track of number of winners
		var numWinners = 0;
		
		// start of the winner message that will be displayed by view model
		var msg = "Winner:";
		
		// I'm using multiple for statements so I thought to declare it first
		var i;

		// if the dealer hand is over 21
		if( players[0].state === states.BUST ) {
			// find all players with hand value less than or equal to 21
			for( i = 1; i < numOfPlayers; i++ ) {
				if( players[i].handVal <= 21 ) {
					// concatenate player number with winner msg
					msg += " " + players[i].playerNo;
=======
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
>>>>>>> origin/gh-pages
				}
			}
		}
		else {
<<<<<<< HEAD
			// else find players with hand less than or equal to 21
			// and is greater than the dealer's hand
			for( i = 1; i < numOfPlayers; i++ ) {
				currentPlayerScore = players[i].handVal
				if( currentPlayerScore <= 21 &&  currentPlayerScore >= dealerScore ) {
					// concatenate player number with winner msg
					msg += " " + players[i].playerNo;
					// increment number of winners
					numWinners++;
				}
			}
			// if no winners
			if( numWinners === 0 ) {
				// dealer is winner
				msg += " Dealer";
			}
		}
		// tell view to display message
=======
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
		
>>>>>>> origin/gh-pages
		view.insertMsg( msg, "winner", "" );
	}
}