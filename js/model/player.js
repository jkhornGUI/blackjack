var states = {
	START: "start",
	HIT:   "hit",
	STAY:  "stay",
	BUST:  "bust",
	BJ: "blackjack",
	DEALER: "dealer"
}

var player = function( title ) {
	this.playerNo = "" + title;
	this.hand =  [];
	this.handVal = 0;
	this.state = states.START;
	this.split = "no";
	this.getCards = function() {
		var imgHTML = "";
		
		if( this.playerNo === "dealer" && this.state === states.START ) {
			imgHTML = this.hand[0].img + "&nbsp;" + deck.faceDownCard;
			this.state = states.DEALER;
			//console.log( playerController.playerTurn, imgHTML );
		}
		else {
			for( var i = 0; i < this.hand.length; i++ ) {
				imgHTML += this.hand[i].img + "&nbsp;";
			}
		}
		return imgHTML;
	};
};