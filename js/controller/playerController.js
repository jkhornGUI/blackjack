var playerController = {
	playerTurn: 1,
	resetTurn: function() {
		this.playerTurn = 1;
	},
	nextTurn: function() {
		if( this.playerTurn === game.numOfPlayers) {
			this.playerTurn = 0;
			dealerController.dealerTurn();
		}
		else {
			this.playerTurn++;
			view.updatePlayerInterface( this.playerTurn );
		}
	},
	hitMe: function() {
		console.log("card added to hand");
		this.addCardToHand();
		game.listOfPlayers[this.playerTurn].state = states.HIT;
		view.updateBoard( this.playerTurn );
		view.updatePlayerInterface( this.playerTurn );
		//view.showBoard();
		this.evalCurrentHand();
	},
	stay: function() {
		var turn = this.playerTurn;
		var players = game.listOfPlayers;
		players[turn].state = states.STAY;
		view.updateBoard( game.numOfPlayers );
		view.updatePlayerInterface();
		var msg = "Stay at " + players[turn].handVal;
		this.nextTurn();
		view.insertMsg( msg, "msg", turn )
		//view.showBoard();
	},
	split: function() {
		//var msg = "Split not implemented.";
		//$( "#error" ).html( msg );
		$( "#error" ).fadeIn( 3000 );
		$( "#error" ).fadeOut( 3000 );
	},
	evalCurrentHand: function() {
		var players = game.listOfPlayers;
		var turn = this.playerTurn;
		var handVal = players[turn].handVal;
		var msg;
		if( handVal === 21 ) {
			players[turn].state = states.BJ;
			msg = "Black Jack!";
			view.insertMsg( msg, "msg", turn )
			this.nextTurn();
		}
		else if( handVal > 21 ) {
			players[turn].state = states.BUST;
			msg = "Bust at " + players[turn].handVal;
			view.insertMsg( msg, "msg", turn )
			this.nextTurn();
		}
	},
	evalAllHands: function() {
		var sum;
		var players = game.listOfPlayers;
		for( var i = ( players.length - 1 ); i >= 0; i-- ) {
			sum = 0;
			for( var j = 0; j < players[i].hand.length; j++ ){
				sum += players[i].hand[j].value;	
			}
			players[i].handVal = sum;
			if( sum === 21 ) {
				console.log("working");
				players[i].state = states.BJ;
				if( i === 0 ) {
					dealerController.blackJack();
				}
				else {
					console.log("working2");
					var msg = "Black Jack!"
					view.insertMsg( msg, "msg", i )
				}
			}
		}
	},
	addCardToHand: function() {
		var topCard = deck.cards.shift();
		var currentPlayer = game.listOfPlayers[this.playerTurn];
		currentPlayer.hand.push( topCard );
		currentPlayer.handVal += topCard.value;
	}
};

var dealerController = {
	dealerTurn: function() {
		view.hideBtn( "hitBtn", "stayBtn", "splitBtn" );
		this.revealCard();
		var turn = this.playerTurn;
		var dealer = game.listOfPlayers[0];
		var handVal = dealer.handVal;
		if( gameController.allLose() ){
			view.insertMsg( "Winner: Dealer", "winner", "" );
		}
		else {
			while( handVal  < 17 ) {
				playerController.addCardToHand();
				handVal = dealer.handVal;
				view.updateBoard( 0 );
				view.updatePlayerInterface( 0 );
			}
			if( handVal > 21 ) {
				dealer.state = states.BUST;
				var msg = "Bust at " + handVal;
				view.insertMsg( msg, "msg", 0 )
			}
			gameController.checkForWinners();
		}
	},
	revealCard: function() {
		var card1 = game.listOfPlayers[0].hand[0].img;
		var card2 = game.listOfPlayers[0].hand[1].img;
		var imgHTML = card1 + "&nbsp;&nbsp;" + card2;
		$("#img0").html( imgHTML );
	},
	blackJack: function() {
		var have21 = [];
		var players = game.listOfPlayers
		var numOfPlayers = players.length;
		this.revealCard();
		view.hideBtn();
		
		for( var i = 0; i < numOfPlayers; i++ ) {
			if( players[i].handVal === 21 ) {
				have21[i] = players[i].playerNo;
			}
		}
		
		var msg = "Winner: Dealer";
		for( var i = 1; i < have21.length; i++ ) {
			msg += " Player " + have21[i];
		}
		
		view.insertMsg( msg, "winner", "" );
	}
}