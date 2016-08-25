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
	switch(split.length) {
		case 3:
			switch(split[1].toLowerCase()) {
				case "roll":
					var gMath = new GabesMath();
					if (gMath.isInt(split[2])) {
						var rolling = new Rolling();
						return rolling.numberRoll(split[2]).toString();
					}
					else {
						return null;
					}
					break;
			}
			break;
		case 4:
			switch(split[1].toLowerCase()) {
				case "roll":
					if (split[3].toLowerCase() === "dice") {
						var gMath = new GabesMath();
						if (gMath.isInt(split[2])) {
							var rolling = new Rolling();
							return rolling.diceRoll(split[2]).toString();
						}
						else {
							return null;
						}
					}
					break;
			}
		default:
			console.log("Nothing found");
			break;
	}
}

module.exports = MessageProcessing;