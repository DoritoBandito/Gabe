var env = require("./env.js")
var RtmClient = require('@slack/client').RtmClient;
var RTM_EVENTS = require('@slack/client').RTM_EVENTS;
var CLIENT_EVENTS = require('@slack/client').CLIENT_EVENTS;

var token = process.env.API_TOKEN;
var gabe = null;

var rtm = new RtmClient(token);
rtm.start();

rtm.on(RTM_EVENTS.MESSAGE, function handleRtmMessage(message) {
	console.log('Message:', message);
	if (message.text.includes("gabe")) {
		rtm.sendMessage('Hello', message.channel);
	}
});
rtm.on(CLIENT_EVENTS.RTM.AUTHENTICATED, function (rtmStartData) {
	console.log(`Logged in as ${rtmStartData.self.name} of team ${rtmStartData.team.name}, but not yet connected to a channel`);
	gabe = rtmStartData;
	console.log(gabe.self.name);
});

function gabeMentioned(message) {
	
}