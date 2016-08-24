var GabesMath = require('./GabesMath.js');
var Rolling = require('./Rolling.js');

function MessageProcessing() {

}

//Function for Gabe to check if he has been mentioned.
MessageProcessing.prototype.gabeMentioned = function(message, gabeId) {
	var msgLower = message.text.toLowerCase();
	if (msgLower.includes('gabe') || msgLower.includes('@gabe') || message.text.includes(gabeId)) {
		return true;
	}
	else {
		return false;
	}
}

MessageProcessing.prototype.process = function(message, gabeId) {
	var split = message.text.split(" ");
	var hasGabe = split[0].includes(gabeId);
	switch(hasGabe) {
		case true:
			return processGabe(split);
			break;
		default: 
			return null;
			break;
	}
} 

function processGabe(split) {
	switch(split[1]) {
		case "roll":
			if (split[3] !== null) {
				if (split[3] === "dice") {
					var gMath = new GabesMath();
					if (gMath.isInt(split[2])) {
						var rolling = new Rolling();
						return rolling.diceRoll(split[2]).toString();
					}
					else {
						return null;
					}
				}
			}
			else if (split[3] !== "dice") {
				var gMath = new GabesMath();
				if (gMath.isInt(split[2])) {
					var rolling = new Rolling();
					return rolling.numberRoll(split[2]).toString();
				}
				else {
					return null;
				}
			}
			else {
				var gMath = new GabesMath();
				if (gMath.isInt(split[2])) {
					var rolling = new Rolling();
					return rolling.numberRoll(split[2]).toString();
				}
				else {
					return null;
				}
			}
			break;
		default:
			return null;
			break;
	}
}

module.exports = MessageProcessing;