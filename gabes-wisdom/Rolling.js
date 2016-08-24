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

module.exports = Rolling;