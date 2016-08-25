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
				var roll = Math.floor((Math.random() * 6) + 1);
				diceRoll = toDiceEmoji(roll) + " " + diceRoll;
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

function toDiceEmoji(value) {
	switch(value) {
		case 1:
			return ":dice_one:";
			break;
		case 2:
			return ":dice_two:";
			break;
		case 3:
			return ":dice_three:";
			break;
		case 4:
			return ":dice_four:";
			break;
		case 5:
			return ":dice_five:";
			break;
		case 6:
			return ":dice_six:";
			break;
		default:
			return null;
			break;
	}
}

module.exports = Rolling;