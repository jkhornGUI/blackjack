var initialBoardView = 	"<div class='form-group col-md-4'>" +
							"<label for='howManyPlayers'>How many players?</label>" +
							"<select class='form-control' id='howManyPlayers'>" +
								"<option>1</option>" +
								"<option>2</option>" +
								"<option>3</option>" +
							"</select><br>" +
							"<button class='btn btn-default' onclick='gameController.startGame();'>Start Game</button>"
						"</div>";
						

var view = {
	board: "",
	showBoard: function() {
		$( "#gameBoard" ).html( this.board );
	},
	createBoard: function( numOfPlayers ) {
		if( numOfPlayers === 0 ) {
			this.board = initialBoardView;
		}
		else {
			var list = game.listOfPlayers;
			var GRID_LENGTH = 12;
			var colNum = GRID_LENGTH / (numOfPlayers + 1);
			var colClass = "col-md-" + colNum;
			var board = "<div class='" + colClass + "' id='dealer'>" +
							"<h3>Dealer</h3><br>" +
							"<div id='img0'>" +
								list[0].getCards() +
							"</div>" +
							"<br><h3 id='msg0'></h3>" +
						"</div>";
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
			$( "#gameBoard" ).html( board );
		}
	},
	updateBoard: function( playerNo ) {
		var imgHTML = game.listOfPlayers[playerNo].getCards()
		var elementID = "#img" + playerNo;
		$( elementID ).html( imgHTML );
	},
	showBtns: function() {
		$( "#reset" ).removeClass( "hidden" );
		$( "#hitBtn" ).removeClass( "hidden" );
		$( "#stayBtn" ).removeClass( "hidden" );
		$( "#splitBtn" ).removeClass( "hidden" );
	},
	hideBtn: function() {
		var btnID;
		for( var i = 0; i < arguments.length; i++ ) {
			btnID = "#" + arguments[i];
			$( btnID ).addClass( "hidden" );
		}
	},
	updatePlayerInterface: function() {
		var turn = playerController.playerTurn;
		var players = game.listOfPlayers;
		if( turn === 0 ) {
			$( "#turn" ).html( "Turn: Dealer");
		}
		else {
			$( "#turn" ).html( "Turn: Player " + turn);
		}
		$( "#score" ).html( "Score: " +  players[turn].handVal);
	},
	clearInterface: function() {
		$( "#turn" ).empty();
		$( "#score" ).empty();
		$( "#error" ).empty();
		$( "#winner" ).empty();
	},
	insertMsg: function( msg, elementID, playerNo ) {
		var elemID = "#" + elementID + playerNo;
		$( elemID ).text( msg );
	}
};