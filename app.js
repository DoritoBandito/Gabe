var env = require("./env.js")
var RtmClient = require('@slack/client').RtmClient;
var RTM_EVENTS = require('@slack/client').RTM_EVENTS;
var CLIENT_EVENTS = require('@slack/client').CLIENT_EVENTS;
var MessageProcessing = require('./gabes-wisdom/MessageProcessing.js');
var GabesMath = require('./gabes-wisdom/GabesMath.js');
var Rolling = require('./gabes-wisdom/Rolling.js');

var token = process.env.API_TOKEN;
var gabe = null;

var rolling = new Rolling();
var gMath = new GabesMath();
var messageProcess = new MessageProcessing();
var rtm = new RtmClient(token);
rtm.start();

//Once authenticated, assign startData to Gabe so he knows who he is.
rtm.on(CLIENT_EVENTS.RTM.AUTHENTICATED, function (rtmStartData) {
	console.log(`Logged in as ${rtmStartData.self.name} of team ${rtmStartData.team.name}, but not yet connected to a channel`);
	gabe = rtmStartData;
});

//On message received, process the message accordingly.
rtm.on(RTM_EVENTS.MESSAGE, function handleRtmMessage(message) {
	if (messageProcess.gabeMentioned(message, gabe.self.id)) {
		var returnMessage = messageProcess.process(message, gabe.self.id);
		if (returnMessage !== null) {
			if (returnMessage.length > 0) {
				rtm.sendMessage(returnMessage, message.channel);
			}
		}
		else {
			rtm.sendMessage("I don't understand...", message.channel);
		}
	}
});
