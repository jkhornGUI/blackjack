var startGame = function() {
	var newNum = $( "#howManyPlayers" ).val();
	game.setNumOfPlayers( newNum );
	view.setBoard( createBroad( game.numOfPlayers ) );
};