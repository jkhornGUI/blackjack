var initialBoardView = 	"<div class='form-group'>" +
							"<label for='howManyPlayers'>Select list: How many players?</label>" +
							"<select class='form-control input-sm' id='howManyPlayers'>" +
								"<option>1</option>" +
								"<option>2</option>" +
								"<option>3</option>" +
								"<option>4</option>" +
							"</select>" +
						"</div>";

var view = {
	showBoard: function( board ) {
		$( "#gameBoard" ).html( board );
	}
};