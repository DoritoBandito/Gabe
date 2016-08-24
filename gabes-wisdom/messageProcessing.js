function MessageProcessing() {

}

//Function for Gabe to check if he has been mentioned.
MessageProcessing.prototype.gabeMentioned = function(message, gabeId) {
	var msgLower = message.text.toLowerCase();
	if (msgLower.includes('gabe') || msgLower.includes('@gabe') || message.text.includes(gabeId)) {
		return true
	}
	else {
		return false;
	}
}

module.exports = MessageProcessing;