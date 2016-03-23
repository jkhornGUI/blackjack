// html of the select form before start of game to get the number of players
// from the user
var initialBoardView = 	"<div class='form-group col-sm-4'>" +
							"<label for='howManyPlayers'>How many players?</label>" +
							"<select class='form-control' id='howManyPlayers'>" +
								"<option>1</option>" +
								"<option>2</option>" +
								"<option>3</option>" +
							"</select><br>" +
							"<button class='btn btn-default' onclick='gameController.startGame();'>Start Game</button>"
						"</div>";
// view object
var view = {
	// board html
	board: "",
	// displays board
	showBoard: function() {
		$( "#gameBoard" ).html( this.board );
	},
	/**
	* function createBoard():
	* params: int numOfPlayer: the number of players
	* return: none
	* This function create the board at the start of the game
	* according to the number of players.
	*/
	createBoard: function( numOfPlayers ) {
		// if number of players equal to 0, it resets the board
		// to initial view
		if( numOfPlayers === 0 ) {
			this.board = initialBoardView;
		}
		else {
			// get array of players
			var list = game.listOfPlayers;
			// using jQuery, the columns size together should equal 12
			var GRID_LENGTH = 12;
			// get column size of individual divs
			// by dividing grid length by number of players (+1 for dealer)
			var colNum = GRID_LENGTH / (numOfPlayers + 1);
			// class name for column size
			var colClass = "col-sm-" + colNum;
			// start making the board html, creating dealers div
			var board = "<div class='" + colClass + "' id='dealer'>" +
							"<h3>Dealer</h3><br>" +
							"<div id='img0'>" +
								list[0].getCards() +
							"</div>" +
							"<br><h3 id='msg0'></h3>" +
						"</div>";
			// create divs for rest of the players
			for( var i = 1; i <= numOfPlayers; i++ ) {
				board += 	"<div class='" + colClass + "' id='player" + i + "'>" +
								"<h3>" + list[i].playerNo +"</h3><br>" +
								"<div id='img" + i + "'>" +
									list[i].getCards() +
								"</div>" +
								"<br><h3 id='msg" + i + "'></h3>" +
							"</div>";
			}
			//this.board = board;
			// display board
			$( "#gameBoard" ).html( board );
		}
	},
	/**
	* function updateBoard():
	* params: int playerNo: the number of current turn's player
	* return: none
	* This function displays cards of players. Usually called after addCardsToHand().
	*/
	updateBoard: function( playerNo ) {
		// get html img of player's card
		var imgHTML = game.listOfPlayers[playerNo].getCards();
		// create string of id of div
		var elementID = "#img" + playerNo;
		// display cards
		$( elementID ).html( imgHTML );
	},
	/**
	* function showBtns():
	* params: none
	* return: none
	* This function make buttons reset, hitBtn, stayBtn, splitBtn visible by
	* removing their hidden class.
	*/
	showBtns: function() {
		$( "#reset" ).removeClass( "hidden" );
		$( "#hitBtn" ).removeClass( "hidden" );
		$( "#stayBtn" ).removeClass( "hidden" );
		$( "#splitBtn" ).removeClass( "hidden" );
	},
	/**
	* function hideBtn():
	* params: string id of button elements
	* return: none
	* This function hides elements that are arguments of the function
	* by adding hidden class.
	*/
	hideBtn: function() {
		var btnID;
		for( var i = 0; i < arguments.length; i++ ) {
			btnID = "#" + arguments[i];
			$( btnID ).addClass( "hidden" );
		}
	},
	/**
	* function updatePlayerInterface():
	* params: none
	* return: none
	* This function creates the player interface which consists of
	* an indictor letting the user know whose turn it is and
	* that player's score.
	*/
	updatePlayerInterface: function() {
		var turn = playerController.playerTurn;
		var players = game.listOfPlayers;
		// if dealers turn
		if( turn === 0 ) {
			// display dealer's turn
			$( "#turn" ).html( "Turn: Dealer");
		}
		else {
			// else display player turn
			$( "#turn" ).html( "Turn: Player " + turn);
		}
		// and score
		$( "#score" ).html( "Score: " +  players[turn].handVal);
	},
	/**
	* function clearInterface():
	* params: none
	* return: none
	* This function empties elements with ids turn, score, error, winner.
	*/
	clearInterface: function() {
		$( "#turn" ).empty();
		$( "#score" ).empty();
		$( "#error" ).empty();
		$( "#winner" ).empty();
	},
	/**
	* function clearInterface():
	* params: string msg is the message to display 
			  string elementID is the ID of the element to insert message to
			  string playerNo is the added to elementID for generality
	* return: none
	* This function inserts a message to an element.
	*/
	insertMsg: function( msg, elementID, playerNo ) {
		var elemID = "#" + elementID + playerNo;
		$( elemID ).text( msg );
	}
};