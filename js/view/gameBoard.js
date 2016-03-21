var initialBoardView = 	"<div class='form-group col-md-2'>" +
							"<label for='howManyPlayers'>How many players?</label>" +
							"<select class='form-control' id='howManyPlayers'>" +
								"<option>1</option>" +
								"<option>2</option>" +
								"<option>3</option>" +
								"<option>4</option>" +
							"</select><br>" +
							"<button class='btn' onclick='startGame(); return false;'>Start Game</button>"
						"</div>";

var createPlayerDIV = function( board, numOfPlayers ) {
	var i;
	while( i <= numOfPlayers ) {
		board += 	"<div class='col-md-6' id='player" + i + "'>" +
						"Player " + i +
					"</div>";
	}
	return board;
};
						
var createBoard = function( numOfPlayers ) {
	var board = "<div class='col-md-6' id='dealer'>Dealer</div>";	
	board = createPlayerDIV( board, numOfPlayers );
	return board;
};

var view = {
	board: "",
	showBoard: function() {
		$( "#gameBoard" ).html( view.board );
	},
	setBoard: function( newBoard ) {
		view.board = newBoard;
	}
};