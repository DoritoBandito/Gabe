function MessageProcessing() {

}

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