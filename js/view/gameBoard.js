var initialBoardView = 	"<p><strong>How many players?</strong></p><br>"
						"<div class='form-group col-xs-2'>" +
							"<select class='form-control' id='howManyPlayers'>" +
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