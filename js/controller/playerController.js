// player controller object
var playerController = {
	// first player will go first
	playerTurn: 1,
	// this function sets playerTurn back to 1
	resetTurn: function() {
		this.playerTurn = 1;
	},
	/**
	* function nextTurn():
	* params: none
	* return: none
	* This function deals with whose turn will be next.
	*/
	nextTurn: function() {
		// if all the players have done their turns
		if( this.playerTurn === game.numOfPlayers) {
			// set playerTurn to 0, which is dealers turn
			this.playerTurn = 0;
			// give controls to dealerController
			dealerController.dealerTurn();
		}
		// else increment playerTurn
		else {
			this.playerTurn++;
			// update player interface to display name of next player
			view.updatePlayerInterface( this.playerTurn );
		}
	},
	/**
	* function hitMe():
	* params: none
	* return: none
	* This function adds another card to a players hand.
	*/
	hitMe: function() {
		// console.log("card added to hand");
		// add card to players hand
		this.addCardToHand();
		// change state of player to "HIT"
		game.listOfPlayers[this.playerTurn].state = states.HIT;
		// display the added card
		view.updateBoard( this.playerTurn );
		// display updated score on interface
		view.updatePlayerInterface( this.playerTurn );
		//view.showBoard();
		// checks for blackjack and calls nextTurn()
		this.evalCurrentHand();
	},
	/**
	* function stay():
	* params: none
	* return: none
	* This function puts current player in stay state.
	*/
	stay: function() {
		// get the playerTurn to see whose turn it is
		var turn = this.playerTurn;
		// get the array of players
		var players = game.listOfPlayers;
		// change state of current player to "STAY"
		players[turn].state = states.STAY;
		view.updateBoard( game.numOfPlayers );
		view.updatePlayerInterface();
		// msg to be displayed
		var msg = "Stay at " + players[turn].handVal;
		// moves to next player's turn
		this.nextTurn();
		//display message
		view.insertMsg( msg, "msg", turn )
		//view.showBoard();
	},
	/**
	* function split():
	* params: none
	* return: none
	* This function hasn't been implemented. It just displays and error message.
	*/
	split: function() {
		//var msg = "Split not implemented.";
		//$( "#error" ).html( msg );
		$( "#error" ).show();
		$( "#error" ).fadeOut( 1000 );
	},
	/**
	* function evalCurrentHand():
	* params: none
	* return: none
	* This function evaluates the hand of the current player. Handles
	* if the player has 21 or went over.
	*/
	evalCurrentHand: function() {
		var players = game.listOfPlayers;
		var turn = this.playerTurn;
		var handVal = players[turn].handVal;
		var msg;
		// if player has 21
		if( handVal === 21 ) {
			players[turn].state = states.BJ;
			msg = "Black Jack!";
			// move to next player turn
			this.nextTurn();
		}
		else if( handVal > 21 ) {
			console.log("bust");
			players[turn].state = states.BUST;
			msg = "Bust at " + players[turn].handVal;
			// move to next player turn
			this.nextTurn();
		}
		// display message
		view.insertMsg( msg, "msg", turn );
	},
	/**
	* function evalAllHands():
	* params: none
	* return: none
	* This function evaluates all players at the start of the game to
	* check if any players have 21. If dealer has 21, the control is
	* given to the dealerController.
	*/
	evalAllHands: function() {
		// used to keep track of sum
		var sum;
		var players = game.listOfPlayers;
		// for every player
		for( var i = ( players.length - 1 ); i >= 0; i-- ) {
			sum = 0;
			// calculate the hand value of the cards
			for( var j = 0; j < players[i].hand.length; j++ ){
				sum += players[i].hand[j].value;	
			}
			// store it in the player object
			players[i].handVal = sum;
			// if sum 21
			if( sum === 21 ) {
				// change player's state to "BJ"
				players[i].state = states.BJ;
				// if the dealer gets 21
				if( i === 0 ) {
					// give control to dealerController
					dealerController.blackJack();
				}
				// else, some other player got 21
				else {
					var msg = "Black Jack!"
					// display message "Black Jack!"
					view.insertMsg( msg, "msg", i )
				}
			}
		}
	},
	/**
	* function addCardToHand():
	* params: none
	* return: none
	* This function adds a card to the hand of the player object
	*/
	addCardToHand: function() {
		// get card from top of deck
		var topCard = deck.cards.shift();
		var currentPlayer = game.listOfPlayers[this.playerTurn];
		// add card to the hand of the player object
		currentPlayer.hand.push( topCard );
		// add value of new card to player's current hand value
		currentPlayer.handVal += topCard.value;
	}
};

// dealer controller object
var dealerController = {
	/**
	* function dealerTurn():
	* params: none
	* return: none
	* This function handle the dealer's action on its turn.
	*/
	dealerTurn: function() {
		// hide buttons on player interface
		view.hideBtn( "hitBtn", "stayBtn", "splitBtn" );
		// reveal its face down card
		this.revealCard();
		var turn = this.playerTurn;
		// get dealer object
		var dealer = game.listOfPlayers[0];
		var handVal = dealer.handVal;
		// if all other players have hand values over 21
		if( gameController.allLose() ){
			// displayer that dealer is the winner
			view.insertMsg( "Winner: Dealer", "winner", "" );
		}
		else {
			// while the dealer has less than 17
			while( handVal  < 17 ) {
				// add another to dealer's hand
				playerController.addCardToHand();
				// update hand value
				handVal = dealer.handVal;
				// display new card and update score
				view.updateBoard( 0 );
				view.updatePlayerInterface( 0 );
			}
			// if the dealer goes over 21
			if( handVal > 21 ) {
				// change state to BUST
				dealer.state = states.BUST;
				var msg = "Bust at " + handVal;
				// display message that dealer BUST
				view.insertMsg( msg, "msg", 0 )
			}
			// check for winner
			gameController.checkForWinners();
		}
	},
	/**
	* function revealCard():
	* params: none
	* return: none
	* This function replaces facedown card with dealer's real card.
	*/
	revealCard: function() {
		// get html img of first card
		var card1 = game.listOfPlayers[0].hand[0].img;
		// get html img of second card
		var card2 = game.listOfPlayers[0].hand[1].img;
		// concatenate them
		var imgHTML = card1 + "&nbsp;&nbsp;" + card2;
		// insert it into dealer's div
		$("#img0").html( imgHTML );
	},
	/**
	* function blackJack():
	* params: none
	* return: none
	* This function executes when dealer gets 21 at the start of the game.
	* It finds all player who also have 21 and displayes the winners' message.
	*/
	blackJack: function() {
		// array to store players who have 21
		var have21 = [];
		var players = game.listOfPlayers
		var numOfPlayers = players.length;
		// reveal dealer's face down card
		this.revealCard();
		// hide buttons
		view.hideBtn();
		var msg = "Winner: Dealer";

		// find players with 21 and add them into array have21
		for( var i = 0; i < numOfPlayers; i++ ) {
			if( players[i].handVal === 21 ) {
				// add player to winner  message
				msg += players[i].playerNo;
			}
		}
		// display message
		view.insertMsg( msg, "winner", "" );
	}
}