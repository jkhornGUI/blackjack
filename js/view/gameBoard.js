var initialBoardView = "<p><strong>How many players?</strong></p><br>" +
			"<form id='howManyPlayers' class='form-inline' role='form' method='post'>" +
				"<input type='radio' name='numOfPlayers' value='1' checked> 1&nbsp;&nbsp;&nbsp;" +
				"<input type='radio' name='numOfPlayers' value='2'> 2&nbsp;&nbsp;&nbsp;" +
				"<input type='radio' name='numOfPlayers' value='3'> 3&nbsp;&nbsp;&nbsp;" +
				"<input type='radio' name='numOfPlayers' value='4'> 4&nbsp;&nbsp;&nbsp;" +
				"<button type='submit' class='btn btn-default'>Start</button>" +
			"</form>";

var view = {
	showBoard: function( board ) {
		$( "#gameBoard" ).html( board );
	}
};