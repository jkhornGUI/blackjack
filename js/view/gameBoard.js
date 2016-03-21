var initialBoardView = 	"<div class='form-group col-xs-2'>" +
							"<label for='howManyPlayers'>How many players?</label>" +
							"<select class='form-control' id='howManyPlayers'>" +
								"<option>1</option>" +
								"<option>2</option>" +
								"<option>3</option>" +
								"<option>4</option>" +
							"</select><br>" +
							"<button class='btn' onclick='startGame(); return false;'>Start Game</button>"
						"</div>";

var onePlayerBoard = "";
var twoPlayerBoard = "";
var threePlayerBoard = "";
var fourPlayerBoard = "";
						
var view = {
	board: "",
	showBoard: function() {
		$( "#gameBoard" ).html( view.board );
	},
	setBoard: function( newBoard ) {
		view.board( newBoard );
	}
};