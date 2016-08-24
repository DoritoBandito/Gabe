var GabesMath = require('./GabesMath.js');

function Rolling() {
	
}

//Function for rolling a random number between 0 and x.
Rolling.prototype.numberRoll = function(numMax) {
	var gMath = new GabesMath();
	if (gMath.isInt(numMax)) {
		var x = parseInt(numMax, 10);
		return Math.floor((Math.random() * x) + 1);
	}
	else {
		return false;
	}
}

Rolling.prototype.diceRoll = function(numOfDice) {
	var gMath = new GabesMath();
	var diceRoll = "";
	if (gMath.isInt(numOfDice)) {
		var x = parseInt(numOfDice, 10);
		if (x > 0) {
			for (var i = 0; i < x; i++) {
				diceRoll = diceRoll + " " + Math.floor((Math.random() * 6) + 1).toString();
			}
			return diceRoll;
		}
		else {
			return null;
		}
	}
	else {
		return null;
	}
}

module.exports = Rolling;