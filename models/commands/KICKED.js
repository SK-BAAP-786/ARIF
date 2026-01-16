module.exports.config = {
	name: "kick",
	version: "1.0.1", 
	hasPermssion: 1,
	credits: "ARIF BABU",
	description: "THIS BOT WAS MADE BY MR ARIF BABU",
	commandCategory: "KIKED OF THE MEMBER", 
	usages: "PREFIX", 
	cooldowns: 0,
};

module.exports.languages = {
	"en": {
		"error": "सॉरी बॉस कुछ गड़बड़ है 🤔",
		"needPermssion": "Sorry boss me is group me admin nhi hu bina admin ke me kisi ko remove nhi kr skta 😐✌️",
		"missingTag": "Boss jisko Remove krna he group se usko mention kro sath me 😐✌️"
	}
}

module.exports.run = async function({ api, event, getText, Threads }) {
	var mention = Object.keys(event.mentions);
	try {
		let dataThread = (await Threads.getData(event.threadID)).threadInfo;
		if (!dataThread.adminIDs.some(item => item.id == api.getCurrentUserID())) return api.sendMessage(getText("needPermssion"), event.threadID, event.messageID);
		if(!mention[0]) return api.sendMessage("Boss Jisko remove krna he group se usko mention kro sath me 😐✌️",event.threadID);
		if (dataThread.adminIDs.some(item => item.id == event.senderID)) {
			for (const o in mention) {
				setTimeout(() => {
					api.removeUserFromGroup(mention[o],event.threadID) 
				},3000)
			}
		}
	} catch { return api.sendMessage(getText("error"),event.threadID) }
}
