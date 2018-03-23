poopballs
const Discord = require("discord.js");
const client = new Discord.Client(); 
const config = require("./config.json"); 

client.on("ready", () => { // This event will run if the bot starts, and logs in, successfully.
console.log(`
	Bot started, 
	${client.users.size} total users\n
	${client.channels.size} channels\n
	${client.guilds.size} guilds.\n`)
client.user.setGame(`with Hexamous`);
});

client.on("guildCreate", guild => { //on guild join
	console.log(`New guild joined: ${guild.name} (id: ${guild.id}).\nmembers: ${guild.memberCount}`);
});

client.on("guildDelete", guild => {
	console.log(`I have been removed from: ${guild.name} (id: ${guild.id}) (members: ${guild.memberCount})`);
	console.log("currently on ${client.guilds.size} servers");	
});	  
/*
client.on('guildMemberAdd', member => {

	const greetChannel = member.guild.channels.find('name', 'member-log');
	if(!greetChannel)
	if(member.bot) 
	
	greetChannel.send(${member} + "Has joined the server!"); 
	  
	if(member.avatarURL !== null){
	   channel.message.send(member.avatarURL);
	}
});*/

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////		
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////	
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////	
client.on("message", async message => { 

		//CONSTANTS
	
//input constants
var input = message.content.split(" ").shift().toLowerCase();
var rawInput = message.content.split(" ");
var inputArgs = message.content.split(" ").splice(0,1);
var inputTest = message.content;	
const args = message.content.slice(config.prefix.length).trim().split(/ +/g);	
const command = args.shift().toLowerCase();
const OWNER = client.users.get("318435858678284291");

const reject = "`You do not have permission to use this command!`";

var devreject;
var DEVREJECT = Math.floor(Math.random()*8);
if(DEVREJECT !== 4){
	devreject = "`This command is for Administrators only!`"
}
else{
	devreject = "https://media.discordapp.net/attachments/341832487934230531/422372292610228234/a7MMxKq_460s.png?width=400&height=300";
}


function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
if(message.member.roles.some(r=>"Muted".includes(r.name))){	
message.delete();
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////	
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////	
///////////////////////////////////////////////////////////////////////////////////////////////////////
					//help
///////////////////////////////////////////////////////////////////////////////////////////////////////
if(input[0] === "+help"){
message.channel.send(config.help);
}

///////////////////////////////////////////////////////////////////////////////////////////////////////
					//Self-assign role + remove
///////////////////////////////////////////////////////////////////////////////////////////////////////

//self assignable roles
let ROLES = {
speaker : "Speaker",
debater : "Debater",
debator : "Debater",
reddit : "Reddit",
market : "Market Updates",
government : "Government",
health : "Health",
illuminati : "Illuminati",
science : "Science",
marketer : "Marketer",
conspiracy : "Conspiracy Center",
conspiracycenter : "Conspiracy Center"
};

if(message.content.indexOf(config.prefix) === 0){
for (let ROLE in ROLES) {
	if (command === ROLE){
		if(message.member.roles.some(r=>[ROLES[ROLE]].includes(r.name)) ) {
			message.channel.send("`You already have this role! To remove it, use the '-' prefix.`");
			return;
		}
		else{
		let roleFind = message.guild.roles.find("name", ROLES[ROLE]);
		message.member.addRole(roleFind).catch(console.error);
		message.channel.send("`" + ROLES[ROLE] + " has successfully been assigned!`");
		}
	}
}//end add role
}//end prefix checker

if(message.content.indexOf("-") === 0){
for (let ROLE in ROLES) {
	if (command === ROLE){
  		if(!message.member.roles.some(r=>ROLES[ROLE].includes(r.name)) ) {
        	message.channel.send("`You do not have this role!`");
        	return;
    		}
		else {
			let roleAssign = message.guild.roles.find("name", ROLES[ROLE]);
			message.member.removeRole(roleAssign).catch(console.error);
			message.channel.send("`Role removed!`");
		}
	}
}//end remove role 
}//end - prefix checker

const inforoles = {
developer : "`The owner and developer for the server; programs and maintains the developer's bot.`",
administrator : "`The highest tier on the moderation team. Has maximum power when it comes to enforcing rules.`",
moderator : "`A member with powers to enforce the rules effectively.`",
helper : "`A low tier member of the staff team, they can help the developer with a variety of simple tasks in order to gain server money or extra perks.`",
detention : "`A member that has been temporarily blacklisted because of bad behavior; they are under moderator surveillance`",
applied : "`A member who has applied for moderator and can no longer submit applications.`",
banker : "`A buyable rank that gives members additional currency every hour.`",
colorful : "`A buyable rank that allows members to change their color role an unlimited amount of times.`",
color : "`A buyable rank that allows members to change their color role one time. Colors can be removed regardless of rank.`", //color pass
change : "`A buyable rank that allows members to change their nickname one time. Is removed upon message send.`",//change nickname pass
entry : "`A rank that is obtained when a member uses their entry ticket for an event. After the event is over, all members with this role will lose the role.`",
pendant : "A rank that is used temporarily when a member uses the pendant item. Depending on the user's current rank, their rank will be upgraded to the next one automatically.",
cabinet : "`A rank obtained by reaching the Conspiracy Congressman rank and then using a pendant.`",//cabinet member
leader : "`A rank obtained by reaching level 50 in chat or by using a pendant (member must have both Skepticist and Conspirator ranks to upgrade to Leader with a pendant).`",
conspirator : "A sister rank with Skepticist. Must be obtained by pendant.",
skepticist : "A sister rank with Conspirator. Must be obtained by pendant.",
rebel : "`A rank obtained by reaching level 25 in chat or by using a pendant.`",
civilian : "`A rank obtained by reaching level 10 in chat or by using a pendant.`",
plebeian : "`A rank obtained by reaching level 1 in chat or by using a pendant.`",
captive : "`A rank obtained by reaching level 1 in chat or on join.`",
robots : "`Bots of the server.`",
robot : "`Bots of the server.`",
voted : "`Members who have had their vote counted in the #perks channel. They recieve a small income for being a voter.`",
speaker : "`Members who can be pinged in the event that another member wants to talk in voice chat.`",
debater : "`Members who can be pinged in the event that another member wants to debate or discuss in a text chat.`",
marketer : "`Members who are subscribed to a channel that posts updates on new items in the shop, including perks.`",
reddit : "`Members who are subscribed to the Reddit feed channel. This channel is updated with new stories submitted by redditors revolving around conspiracies.`",
health : "`Members who are subscribed to channels related to health`",
science : "`Members who are subscribed to channels related to science, enviroment, and technology`",
government : "`Members who are subscribed to channels related to government, politics, and history.`",
illuminati : "`Members who are subscribed to channels related to the illuminati and / or reptilians.`",
trial : "`Members who are in the process of becoming a moderator, and have minimal moderating powers.`",
muted : "`Members who are muted will have their message deleted on send, but their messages will still be logged and accessed by staff.`"
};

if(message.content.indexOf("?") === 0){
	for(let inforole in inforoles){
		if((command === inforole) && (!input[1])){
			message.channel.send(inforole);
		}
	}
}

if(input === "?conspiracy congressman"){
	message.channel.send("`A rank obtained by reaching the Leader rank and then using a pendant.`");
}

if((input[0] === "?100") || (input[0] === "?75") || (input[0] === "?50") || (input[0] === "?40") || (input[0] === "?30") || (input[0] === "?20") || (input[0] === "?10") || (input[0] === "?5") || (input[0] === "?1")){
	if(input[1] === "invites" || input[1] === "invite"){
		message.channel.send("`Roles given to members who invite other people to the server. Each rank is a milestone and will earn that member extra money in the server which can be spent on items and perks. Milestones include : 1, 5, 10, 20, 30, 40, 50, 75, and 100.`");
	}
}

if(input === "?conspiracy center"){
	message.channel.send("`Members who are subscribed to channels involving common conspiracies that don't fall under a specific category.`");
}
//self assignable color roles
let COLORROLES = {

"maroon" : "#maroon",
"#maroon" : "#maroon",
"cherry" : "#cherry",
"#cherry" : "#cherry",
"blood" : "#blood",
"#blood" : "#blood",
"scarlet" : "#scarlet",
"#scarlet" : "#scarlet",
"tulip" : "#tulip",
"#tulip" : "#tulip",
"blush" : "#blush",
"#blush" : "#blush",

"crust" : "#crust",
"#crust" : "#crust",
"burnt" : "#burnt",
"#burnt" : "#burnt",
"sunset" : "#sunset",
"#sunset" : "#sunset",
"fire" : "#fire",
"#fire" : "#fire",
"macaroni" : "#macaroni",
"#macaroni" : "#macaroni",
"cream" : "#cream",
"#cream" : "#cream",

"brass" : "#brass",
"#brass" : "#brass",
"mustard" : "#mustard",
"#mustard" : "#mustard",
"goldenrod" : "#goldenrod",
"#goldenrod" : "#goldenrod",
"dandelion" : "#dandelion",
"#dandelion" : "#dandelion",
"sunshine" : "#sunshine",
"#sunshine" : "#sunshine",
"vanilla" : "#vanilla",
"#vanilla" : "#vanilla",

"forest" : "#forest",
"#forest" : "#forest",
"grass" : "#grass",
"#grass" : "#grass",
"neon" : "#neon",
"#neon" : "#neon",
"uranium" : "#uranium",
"#uranium" : "#uranium",

"neugreen" : "#neugreen",
"#neugreen" : "#neugreen",
"seafoam" : "#seafoam",
"#seafoam" : "#seafoam",
"fresh" : "#fresh",
"#fresh" : "#fresh",
"mellon" : "#mellon",
"#mellon" : "#mellon",

"darkolive" : "#darkolive",
"#darkolive" : "#darkolive",
"olive" : "#olive",
"#olive" : "#olive",
"sage" : "#sage",
"#sage" : "#sage",
"mint" : "#mint",
"#mint" : "#mint",

"marine" : "#marine",
"#marine" : "#marine",
"turquoise" : "#turquoise",
"#turquoise" : "#turquoise",
"arctic" : "#arctic",
"#arctic" : "#arctic",
"ice" : "#ice",
"#ice" : "#ice",

"ocean" : "#ocean",
"#ocean" : "#ocean",
"aqua" : "#aqua",
"#aqua" : "#aqua",
"electric" : "#electric",
"#electric" : "#electric",
"babyblue" : "#babyblue",
"#babyblue" : "#babyblue",

"navy" : "#navy",
"#navy" : "#navy",
"cobalt" : "#cobalt",
"#cobalt" : "#cobalt",
"sublue" : "#sublue",
"#sublue" : "#sublue",
"skyblue" : "#skyblue",
"#skyblue" : "#skyblue",

"raspberry" : "#raspberry",
"#raspberry" : "#raspberry",
"salmon" : "#salmon",
"#salmon" : "#salmon",
"coral" : "#coral",
"#coral" : "#coral",
"peach" : "#peach",
"#peach" : "#peach",

"darkpink" : "#darkpink",
"#darkpink" : "#darkpink",
"hotpink" : "#hotpink",
"#hotpink" : "#hotpink",
"pink" : "#pink",
"#pink" : "#pink",
"pinkish" : "#pinkish",
"#pinkish" : "#pinkish",

"grape" : "#grape",
"#grape" : "#grape",
"midpurple" : "#midpurple",
"#midpurple" : "#midpurple",
"lavender" : "#lavender",
"#lavender" : "#lavender",

"berry" : "#berry",
"#berry" : "#berry",
"mauve" : "#mauve",
"#mauve" : "#mauve",

"carnation" : "#carnation",
"#carnation" : "#carnation",
"heart" : "#heart",
"#heart" : "#heart",
"pinkie" : "#pinkie",
"#pinkie" : "#pinkie",
"petal" : "#petal",
"#petal" : "#petal",

"psychic" : "#psychic",
"#psychic" : "#psychic",
"purple" : "#purple",
"#purple" : "#purple",
"lilac" : "#lilac",
"#lilac" : "#lilac",

"twilight" : "#twilight",
"#twilight" : "#twilight",
"#geode" : "#geode",
"geode" : "#geode",
"#tart" : "#tart",
"tart" : "#tart",

"#stone" : "#stone",
"stone" : "#stone",
"#slate" : "#slate",
"slate" : "#slate",

"#graphite" : "#graphite",
"graphite" : "#graphite",
"silver" : "#silver",
"#silver" : "#silver",
"gravy" : "#gravy",
"#gravy" : "#gravy",
"whiteout" : "#whiteout",
"#whiteout" : "#whiteout",

"chocolate" : "#chocolate",
"#chocolate" : "#chocolate",
"browntown" : "#browntown",
"#browntown" : "#browntown",
"#cocoa" : "#cocoa",
"cocoa" : "#cocoa",
"#beige" : "#beige",
"beige" : "#beige",
"#ivory" : "#ivory",
"ivory" : "#ivory",
};

if(message.content.indexOf("?") === 0){
for (let COLORROLE in COLORROLES) {
	if (command === COLORROLE){	
		message.channel.send("`One of the various color roles that can be obtained either with a Color Pass or the Colorful role.`");
	}
}
}
	
if(message.content.indexOf("+") === 0){
for (let COLORROLE in COLORROLES) {
	if (command === COLORROLE){
		if(message.member.roles.some(r=>"Color Pass".includes(r.name))){
			let colorPassRoleFind = message.guild.roles.find("name", COLORROLES[COLORROLE]);
			message.member.addRole(colorPassRoleFind).catch(console.error);
			message.channel.send("`" + COLORROLES[COLORROLE] + " has successfully been assigned!`");

			let colorPassRole = message.guild.roles.find("name", "Color Pass");
			message.member.removeRole(colorPassRole).catch(console.error);
			message.channel.send("`Your Color Pass has been used successfully.`");		
			return;	
		}

		if(!message.member.roles.some(r=>"Colorful".includes(r.name)) ){
			message.channel.send(reject + " `To use this command, you must buy the 'Colorful' role from the shop.`");
			return;
		}
		if(message.member.roles.some(r=>[COLORROLES[COLORROLE]].includes(r.name)) ) {
			message.channel.send("`You already have this color role! To remove it, use the '-' prefix.`");
			return;
		}
		else{			
		let colorRoleFind = message.guild.roles.find("name", COLORROLES[COLORROLE]);
		message.member.addRole(colorRoleFind).catch(console.error);

		message.channel.send("`" + COLORROLES[COLORROLE] + " has successfully been assigned!`");
		return;

		}
	}
}//end add role
}//end prefix checker

if(message.content.indexOf("-") === 0){
for (let COLORROLE in COLORROLES) {
	if (command === COLORROLE){	
  		if(!message.member.roles.some(r=>COLORROLES[COLORROLE].includes(r.name)) ) {
        	message.channel.send("`You do not have this color role!`");
        	return;
    		}
		else {
			let colorRoleAssign = message.guild.roles.find("name", COLORROLES[COLORROLE]);
			message.member.removeRole(colorRoleAssign).catch(console.error);
			message.channel.send("`Color role removed!`");
		}
	}
}//end remove role 
}//end - prefix checker

//rainbow role
if(message.member.roles.some(r=>"Rainbow".includes(r.name)) ) {
	if (command === "#rainbow" || command === "rainbow"){
		if(message.content.indexOf("-") === 0){
			let colorrainbow = message.guild.roles.find("name", "#rainbow");
			message.member.removeRole(colorrainbow).catch(console.error);
			message.channel.send("`Your rainbow color role has been removed successfully.`");		
			return;	
		}
		if(message.content.indexOf("+") === 0){
			let colorrainbow1 = message.guild.roles.find("name", "#rainbow");
			message.member.addRole(colorrainbow1).catch(console.error);

			let colorrainbow2 = message.guild.roles.find("name", "#scarlet");
			message.member.addRole(colorrainbow2).catch(console.error);

			message.channel.send("`Your rainbow color role has been added successfully. This role will not work if you assign yourself another color role.`");		
			return;	
		}
	}
}

var rainbowCooldown;

//#scarlet #sunset #dandelion #uranium #grass #neugreen #turquoise #sublue #purple #grape #carnation #hotpink
if(message.member.roles.some(r=>"#rainbow".includes(r.name)) ) {
	if (rainbowCooldown == 0){
		let rainbow0 = message.guild.roles.find("name", "#scarlet");
		let rainbow1 = message.guild.roles.find("name", "#sunset");
		let rainbow2 = message.guild.roles.find("name", "#dandelion");
		let rainbow3 = message.guild.roles.find("name", "#uranium");
		let rainbow4 = message.guild.roles.find("name", "#grass");
		let rainbow5 = message.guild.roles.find("name", "#neugreen");
		let rainbow6 = message.guild.roles.find("name", "#turquoise");
		let rainbow7 = message.guild.roles.find("name", "#sublue");
		let rainbow8 = message.guild.roles.find("name", "#purple");
		let rainbow9 = message.guild.roles.find("name", "#grape");
		let rainbow10 = message.guild.roles.find("name", "#carnation");
		let rainbow11 = message.guild.roles.find("name", "#hotpink");

	if(message.member.roles.some(r=>rainbow0.includes(r.name))){
		message.member.removeRole(rainbow0).catch(console.error);
		message.member.addRole(rainbow1).catch(console.error); rainbowCooldown = rainbowCooldown + 2; return;
	}
	if(message.member.roles.some(r=>rainbow1.includes(r.name))){
		message.member.removeRole(rainbow1).catch(console.error);
		message.member.addRole(rainbow2).catch(console.error); rainbowCooldown = rainbowCooldown + 2; return;
	}
	if(message.member.roles.some(r=>rainbow2.includes(r.name))){
		message.member.removeRole(rainbow2).catch(console.error);
		message.member.addRole(rainbow3).catch(console.error); rainbowCooldown = rainbowCooldown + 2; return;
	}
	if(message.member.roles.some(r=>rainbow3.includes(r.name))){
		message.member.removeRole(rainbow3).catch(console.error);
		message.member.addRole(rainbow4).catch(console.error); rainbowCooldown = rainbowCooldown + 2; return;
	}
	if(message.member.roles.some(r=>rainbow4.includes(r.name))){
		message.member.removeRole(rainbow4).catch(console.error);
		message.member.addRole(rainbow5).catch(console.error); rainbowCooldown = rainbowCooldown + 2; return;
	}
	if(message.member.roles.some(r=>rainbow5.includes(r.name))){
		message.member.removeRole(rainbow5).catch(console.error);
		message.member.addRole(rainbow6).catch(console.error); rainbowCooldown = rainbowCooldown + 2; return;
	}
	if(message.member.roles.some(r=>rainbow6.includes(r.name))){
		message.member.removeRole(rainbow6).catch(console.error);
		message.member.addRole(rainbow7).catch(console.error); rainbowCooldown = rainbowCooldown + 2; return;
	}
	if(message.member.roles.some(r=>rainbow7.includes(r.name))){
		message.member.removeRole(rainbow7).catch(console.error);
		message.member.addRole(rainbow8).catch(console.error); rainbowCooldown = rainbowCooldown + 2; return;
	}
	if(message.member.roles.some(r=>rainbow8.includes(r.name))){
		message.member.removeRole(rainbow8).catch(console.error);
		message.member.addRole(rainbow9).catch(console.error); rainbowCooldown = rainbowCooldown + 2; return;
	}
	if(message.member.roles.some(r=>rainbow9.includes(r.name))){
		message.member.removeRole(rainbow9).catch(console.error);
		message.member.addRole(rainbow10).catch(console.error); rainbowCooldown = rainbowCooldown + 2; return;
	}
	if(message.member.roles.some(r=>rainbow10.includes(r.name))){
		message.member.removeRole(rainbow10).catch(console.error);
		message.member.addRole(rainbow11).catch(console.error); rainbowCooldown = rainbowCooldown + 2; return;
	}
	if(message.member.roles.some(r=>rainbow11.includes(r.name))){
		message.member.removeRole(rainbow11).catch(console.error);
		message.member.addRole(rainbow0).catch(console.error); rainbowCooldown = rainbowCooldown + 2; return;
	}
		message.member.addRole(rainbow11).catch(console.error); return;
}//cooldown
else{
	rainbowCooldown--;
}
}//command

///////////////////////////////////////////////////////////////////////////////////////////////////////
					//test commands
///////////////////////////////////////////////////////////////////////////////////////////////////////

		//TEST COMMANDS
if(message.content.indexOf(config.prefix) === 0){//start prefix checker
	
//Takes the message content and returns what it reads
if(command === "inputtest"){ //makes sure that the bot is recieving input
	return message.channel.send(inputTest); 
}		
		
if(command === "latency" || command === "ping"){
	if(message.content.indexOf(config.prefix) !== 0) return;
	const m = await message.channel.send("`Calculating...`");
	m.edit(`Pong! Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ping)}ms`); 
}
}//end prefix checker
///////////////////////////////////////////////////////////////////////////////////////////////////////
if(rawInput[0][0] !== config.prefix){return;}

/*
if(command === "commands"){
	message.channel.send(

	);//end message
}//end command

*/

///////////////////////////////////////////////////////////////////////////////////////////////////////
					//Automod commands
///////////////////////////////////////////////////////////////////////////////////////////////////////
/*
var antispam;
var spamAuthor;
if ((message.content === antispam) && (message.author === spamAuthor) && (!message.member.roles.some(r=>["Rebel"].includes(r.name)) )){
	spamAuthor.kick("Spam Detected.");
}
else {
antispam = message.content;
spamAuthor = message.author;
}


*/

///////////////////////////////////////////////////////////////////////////////////////////////////////
					//Simple commands
///////////////////////////////////////////////////////////////////////////////////////////////////////

if(command === "coinflip"){
	var coin = ["`Heads`", "`Tails`"];
	message.channel.send(coin[Math.floor(Math.random()*1)]);
}

///////////////////////////////////////////////////////////////////////////////////////////////////////
					//Developer commands
///////////////////////////////////////////////////////////////////////////////////////////////////////

if(command === "test"){
	
    if(!message.member.roles.some(r=>["Developer"].includes(r.name)) ) {
        message.channel.send(devreject);
        return;
	}
	
	if(!rawInput[1]){
		message.channel.send("`You must do +test <member name>`");
	}
	
	var tester = rawInput[1]
	
	const testQuestion1 = [
	"What is the punishment for abusing your staff powers? (Perm ban)",
	"What do you do when you think another staff member is preforming poorly? (Tell Hexamous)",
	"What do you do when you don't agree with another staff's punishment? (Talk to them about it in #staff)"
	];
	const testQuestion2 = [
	"When you see another staff member breaking a rule, what do you do? (Remind them of the rules in private)",
	"What are staff members encouraged to do in order to get the server more active? (Talk, text, engage in discussions)",
	"What do you do when a member is arguing with you, and what is the maximum punishment? (Warn them, mute)"
	];
	const testQuestion3 = [
	"What do you do if a new member starts spamming in the server? (Ban or kick them, get evidence)",
	"What do you do if multiple people are joining at once and spamming? (Ban them, get evidence)",
	"What are you supposed to do when you ban someone? (Get the evidence and post it in #staff)"
	];
	const testQuestion4 = [
	"What do you do when other members are constantly using another language to communicat ein the chat? (Remind them to speak in English, mute)",
	"What do you do when you see someone posting commands in a topic channel? (Tag the bot-commands channel and remind them to post there)",
	"What do you do when someone is arguing in the voice chat? (warn them, kick them from the voice channel, mute)"
	];
	const testQuestion5 = [
	"What is the lowest punishment in the punishment system? (A reminder)",
	"What do you do after you verbally remind someone of a rule, but they break it again? (Give them a warning)",
	"What do you do when someone continues to break a rule after being warned? (Mute them)",
	"What do you do when you kick a player and they join to break the rules more? (Ban them, provide evidence)"
	];
	const testQuestion6 = [
	"What is the full procedure for banning someone? (Gathering evidence and putting it in #staff, listing a reason for the ban)",
	"What do you do if a banned member is harassing you in DM to unban them? (Tell them why they were banned and hold your ground)",
	"What do you do when a new person is breaking little rules here and there? (Remind them to do +rules in bot-commands)"
	];
	const testQuestion7 = [
	"Member 1 is being harassed by Member 2 in DM after they were told to stop arguing in the chat. You are told about this. What do you do? (Ask for evidence and punish accordingly)",
	"Member 1 is leaking private information about Member 2. What do you do? (Mute them immediately and tell them if they continue, they will be banned.)",
	"Member 1, a stranger, sends Member 2 an invite to another server in DM. You are told about this. What do you do? (Advertisement is punishable by banning)"
	];
	const testQuestion8 = [
	"You dont like another staff member. What do you do? (Try to get along and work alongside them to solve probems)",
	"There is a member that constantly is pushing his limits with the staff. One day, he decides to push the limits again while you are there. What do you do? (Gather evidence on him and ban him for disrespecting the staff)"
	];

message.author.send(
{
  "embed": {
    "title": "Moderator Interview",
    "description": "page 1 of 1",
    "color": 16552523,
    "footer": {
      "icon_url": "https://media.discordapp.net/attachments/410911214051262464/421800934994346004/image.png",
      "text": "Programmed by Hexamous#4955 | Message 1 / 1"
    },
    "thumbnail": {
      "url": "https://media.discordapp.net/attachments/410911214051262464/421782359872897034/image.png?width=300&height=300"
    },


    "fields": [
      {
        "name": rawInput[1],
        "value": "**===============================================**"
      },
      {
        "name": "Question 1",
        "value": testQuestion1[Math.floor(Math.random()*testQuestion1.length)]
      },
      {
        "name": "Question 2",
        "value": testQuestion2[Math.floor(Math.random()*testQuestion2.length)]
      },
      {
        "name": "Question 3",
        "value": testQuestion3[Math.floor(Math.random()*testQuestion3.length)]
      },
      {
        "name": "Question 4",
        "value": testQuestion4[Math.floor(Math.random()*testQuestion4.length)]
      },
      {
        "name": "Question 5",
        "value": testQuestion5[Math.floor(Math.random()*testQuestion5.length)]
      },
      {
        "name": "Question 6",
        "value": testQuestion6[Math.floor(Math.random()*testQuestion6.length)]
      },
      {
        "name": "Question 7",
        "value": testQuestion7[Math.floor(Math.random()*testQuestion7.length)]
      },
      {
        "name": "Question 8",
        "value": testQuestion8[Math.floor(Math.random()*testQuestion8.length)]
      },
       {
        "name": "===============================================",
        "value": "         NOTE: This is a NO REPLY message."
      }

    ]
  }
});//end message

}

if(command === "game"){
    if(!message.member.roles.some(r=>["Developer"].includes(r.name)) ) {
        message.channel.send(devreject);
        return;
    }
	client.user.setGame(inputArgs)
	message.reply("`Set game successful!`");

}

if(command === "mail"){
    if(!message.member.roles.some(r=>["Developer"].includes(r.name)) ) {
        message.channel.send(devreject);
        return;
    }

    if(!input[1]){
        message.channel.reply("`To use this command, do +mail <@user> <message>`");
        return;
    }

    let mail = message.content.split(" ");
    let userId = message.mentions.members.first();
	var user = userId;
    userId = mail[1];

	mail.splice(0, 1);
	mail = mail.join(" ");
    user.send(
{
  "embed": {
    "title": "Message recieved!",
    "description": "page 1 of 1",
    "color": 16552523,
    "footer": {
      "icon_url": "https://media.discordapp.net/attachments/410911214051262464/421800934994346004/image.png",
      "text": "Programmed by Hexamous#4955 | Message 1 / 1"
    },
    "thumbnail": {
      "url": "https://media.discordapp.net/attachments/410911214051262464/421782359872897034/image.png?width=300&height=300"
    },


    "fields": [
      {
        "name": "===============================================",
        "value": mail
      },
       {
        "name": "===============================================",
        "value": "         NOTE: This is a NO REPLY message."
      }

    ]
  }
});
    message.reply("`Message sent to " + user + "!`");
    message.channel.send({
  "embed": {
    "title": "Message recieved!",
    "description": "page 1 of 1",
    "color": 16552523,
    "footer": {
      "icon_url": "https://media.discordapp.net/attachments/410911214051262464/421800934994346004/image.png",
      "text": "Programmed by Hexamous#4955 | Message 1 / 1"
    },
    "thumbnail": {
      "url": "https://media.discordapp.net/attachments/410911214051262464/421782359872897034/image.png?width=300&height=300"
    },


    "fields": [
      {
        "name": "===============================================",
        "value": mail
      },
       {
        "name": "===============================================",
        "value": "         NOTE: This is a NO REPLY message."
      }

    ]
  }
});
}

///////////////////////////////////////////////////////////////////////////////////////////////////////
					//Staff commands
///////////////////////////////////////////////////////////////////////////////////////////////////////
/*
const mailtypes = ["question", "comment", "suggestion", "complaint"];

if(command === "mailsend"){

	if(input[1] !== "question")

	for (let mailtype in mailtypes) {
   		if (input[1] !== mailtype){
    		message.channel.send("`Must be a valid message type! Types include 'question', 'comment', 'suggestion', 'complaint'. Do +mailsend <type> <message>.`");
    		return;
		}
	}

	let mType = [];
	var messageType = rawInput[1];
	mType.push(messageType);

 	let mMessage = [];
	var mailMessage = message.content.split(" ").splice(0, 2).join(" ");
	mMessage.push(mailMessage);

 	let mSenderID = [];
	var senderID = message.author;
	mSenderID.push(senderID);

 	let mSender = [];
	var senderNick = message.author.nick;
	mSender.push(senderNick);

 	let mTimestamp = [];
	var mailTimestamp = message.timestamp;
	mTimestamp.push(mailTimestamp);

}


if(command === "mailcheck"){
	if(!message.member.roles.some(r=>["Developer"].includes(r.name)) ) {
		message.channel.send(devreject);
		return;
	}
	
	var mailLeft = mType.length;

	for(i = 0; i < mailLeft;  i++){

		var TYPE = mType.pop();
 		mType.pop();

		var MESSAGE = mMessage.pop();
 		mMessage.pop();

		var SENDERID = mSenderID.pop();
 		mSenderID.pop();

		var SENDER = mSender.pop();
 		mSender.pop();

		var TIMESTAMP = mTimestamp.pop();
 		mTimestamp.pop();
		
		message.channel.send(
{
  "embed": {
    "title": "Mailed Message",
    "description": "TYPE",
    "color": 16552523,
    "footer": {
      "icon_url": "https://media.discordapp.net/attachments/410911214051262464/421800934994346004/image.png",
      "text": "Programmed by Hexamous#4955 | Mail"
    },
    "thumbnail": {
      "url": "https://media.discordapp.net/attachments/410911214051262464/421782359872897034/image.png?width=300&height=300"
    },


    "fields": [
      {
        "name": SENDER,
        "value": SENDERID
      },
      {
        "name": "===============================================",
        "value": MESSAGE
      },
       {
        "name": "===============================================",
        "value": TIMESTAMP
      }

    ]
  }
});
	}//end for loop

	message.channel.send("`No more mail.`");
}//end command mailcheck




/*
if(command === "mailboxset"){
	if(!message.member.roles.some(r=>["Developer"].includes(r.name)) ) {
    	message.channel.send(reject);
		return;
	}
	var mailboxreciever = message.author;
	message.channel.send("`Mailbox location set!`");
}

if(mailboxreciever === undefined){
	let mentiondev = message.guild.roles.find("name", "Developer");
	message.mentiondev.send("`You need to set a mailbox location! Do +mailboxset in the server to set it!`");
	return;
}

if(command === "send"){

let mailbox = {
senderID : message.author,
sender : message.author.nick,
type : rawInput[1],
message : message.content.split(" ").splice(0, 1).join(" "),
}

if(input[1] === "question"){
	mailbox.message.type = "Question";
}
else if(input[1] === "message"){
	mailbox.message.type = "Message";
}
else if(input[1] === "complaint"){
	mailbox.message.type = "Complaint";
}
else{
    message.channel.reply("`To use this command, do +send <type> <message>`");
	message.channel.reply("`Types include : question, complaint, message`");
    return;
}

mailboxreciever.channel.send(
{
  "embed": {
    "title": "Message recieved!",
    "description": mailbox.message.type,
    "color": 16552523,
    "footer": {
      "icon_url": "https://media.discordapp.net/attachments/410911214051262464/421800934994346004/image.png",
      "text": "Programmed by Hexamous#4955 | Message 1 / 1"
    },
    "thumbnail": {
      "url": "https://media.discordapp.net/attachments/410911214051262464/421782359872897034/image.png?width=300&height=300"
    },


    "fields": [
      {
        "name": "===============================================",
        "value": mailbox.senderID
      },
      {
        "name": "mailbox.sender",
        "value": mailbox.message
      },
       {
        "name": "===============================================",
        "value": "         NOTE: This is a NO REPLY message."
      }

    ]
  }
});
	message.delete();
    message.channel.send("`Message sent to the mailbox!`");
}

*/

if(command === "done"){
    if(!message.member.roles.some(r=>["Moderator Application"].includes(r.name)) ) {
        message.channel.send(reject);
        return;
    }
let applyrole = message.guild.roles.find("name", "Moderator Application");
message.member.addRole(applyrole).catch(console.error);//marks someone as applied

let modapp = message.guild.roles.find("name", "Moderator Application");
message.member.removeRole(modapp).catch(console.error);//removes moderator application role

message.channel.send("@Hexamous#4955 `An application has been submitted by " + message.author +"!`");
message.author.send(
{
  "embed": {
    "title": "Message recieved!",
    "description": "page 1 of 1",
    "color": 16552523,
    "footer": {
      "icon_url": "https://media.discordapp.net/attachments/410911214051262464/421800934994346004/image.png",
      "text": "Programmed by Hexamous#4955 | Message 1 / 1"
    },
    "thumbnail": {
      "url": "https://media.discordapp.net/attachments/410911214051262464/421782359872897034/image.png?width=300&height=300"
    },


    "fields": [
      {
        "name": "Regarding your Moderator Application",
        "value": "**===============================================**"
      },
        {
        "name": "The server owner has been notified of your application completion.",
        "value": "\nThis may take some time, as the owner has to review your application and consider your eligability.\n\nThank you for your patience."
      },
       {
        "name": "===============================================",
        "value": "         NOTE: This is a NO REPLY message."
      }

    ]
  }
}
);//end message
}//end done command
   
if(message.member.roles.some(r=>["Moderator Application", "Applied"].includes(r.name)) ) {
	let modapp = message.guild.roles.find("name", "Moderator Application");
	message.member.removeRole(modapp).catch(console.error);
	//message.reply("`You have already applied for moderator! Please contact the Developer for a new application or a refund.`");
}//removed the Moderator Application when someone already applied.


if(command === "handbook"){
    if(!message.member.roles.some(r=>["Helper"].includes(r.name)) ) {
        message.channel.send(reject);
        return;
    }
	var user1 = message.author;
	user1.send(
{
  "embed": {
    "title": "Moderator Handbook",
    "description": "page 1 of 5",
    "color": 16552523,
    "footer": {
      "icon_url": "https://media.discordapp.net/attachments/410911214051262464/421800934994346004/image.png",
      "text": "Programmed by Hexamous#4955 | Moderator Handbook 1 / 5"
    },
    "thumbnail": {
      "url": "https://media.discordapp.net/attachments/410911214051262464/421782359872897034/image.png?width=300&height=300"
    },


    "fields": [
      {
        "name": "===============================================",
        "value": "*Read over the handbook often, as it is subject to change.*"
      },
      {
        "name": "As a volunteer Moderator, you play an important role in the server.",
        "value": "Many people will count on you to keep the server running smoothly and to enforce the rules. Your preformance must reflect the values we have at Conspiracy Congress. If your actions do not align with our values, you make be revoked from the staff team."
      },
      {
        "name": "Abuse",
        "value": "By accepting the staff position you accept your additional powers for the good of the server, not for personal gain and use. Abusing your powers may result in a perm ban."
      },
      {
        "name": "Respecting other staff",
        "value": "You are about to become a part of our team. In order to make sure things run smoothly, all staff members must get along. If you do not agree with a punishment, talk to the staff memeber in the #staff channel. No arguments will be tolerated; have a civil discussion."
      },
      {
        "name": "Power",
        "value": "No staff member shall put theirself above any other member. Be humble. Your job is to enforce the rules and make sure the community stays happy. If you believe a fellow staff member is consistantly preforming poorly, contact Hexamous#4955."
      },
      {
        "name": "Interview",
        "value": "In order to get Moderator, you must be interviewed by Hexamous#4955 over voice chat. The interview will consist of questions about the Moderator Handbook and about the server in general."
      },
       {
        "name": "===============================================",
        "value": "         NOTE: This is a NO REPLY message."
      }

    ]
  }
}
	);//end message 1
	
	user1.send(
{
  "embed": {
    "title": "Moderator Handbook",
    "description": "page 2 of 5",
    "color": 16552523,
    "footer": {
      "icon_url": "https://media.discordapp.net/attachments/410911214051262464/421800934994346004/image.png",
      "text": "Programmed by Hexamous#4955 | Moderator Handbook 2 / 5"
    },
    "thumbnail": {
      "url": "https://media.discordapp.net/attachments/410911214051262464/421782359872897034/image.png?width=300&height=300"
    },


    "fields": [
      {
        "name": "===============================================",
        "value": "**Chat rules for moderators**\nYou will be required to follow these rules, but not to enforce them."
      },
      {
        "name": "Complaining",
        "value": "You are not allowed to complain in chat. If a member is being unruly, warn them and remind them of the rule they are breaking."
      },
      {
        "name": "Arguing",
        "value": "No arguments with other members in the chat will be tolerated. If someone is complaining about your preformance or decisions, they are breaking a rule. If they continue to break this rule, you are allowed to mute them, but not further punish them."
      },
      {
        "name": "Communication - Voice Chats",
        "value": "If you see members in the voice chats, try to join them. If no one is in the voice chats, feel free to get them active and ping the Speakers. This adds to the activeness of our community, which will help it become more popular."
      },
      {
        "name": "Communication - Text Channels",
        "value": "If you find something interesting online, share it in the server! Ask people questions about the documentaries and articles you post to get the chat more active. You can ping the Debaters if you need."
      },
      {
        "name": "Activity",
        "value": "Stay active in the server to keep your staff rank. Staff members that are not considered helpful may be removed."
      },
       {
        "name": "===============================================",
        "value": "         NOTE: This is a NO REPLY message."
      }

    ]
  }
}
	);//end message 2
	
	user1.send(
{
  "embed": {
    "title": "Moderator Handbook",
    "description": "page 3 of 5",
    "color": 16552523,
    "footer": {
      "icon_url": "https://media.discordapp.net/attachments/410911214051262464/421800934994346004/image.png",
      "text": "Programmed by Hexamous#4955 | Moderator Handbook 3 / 5"
    },
    "thumbnail": {
      "url": "https://media.discordapp.net/attachments/410911214051262464/421782359872897034/image.png?width=300&height=300"
    },


    "fields": [
      {
        "name": "===============================================",
        "value": "**Chat rules for members**\nYou will be required to enforce the rules, as well as take actions against the following activities."
      },
      {
        "name": "Complaining",
        "value": "*Excessive* complaining isn't allowed in chat. If a member is distrupting the peaceful nature of the server, ask them to stop and to take their concerns either to the Staff Reports channel or to the Suggestions channel."
      },
      {
        "name": "Arguing",
        "value": "No arguments among members in the chat will be tolerated. If someone is arguing over something server related, remind them of the rules and to keep kind in chat. If two people are personally attacking each other, warn them. If they continue, warn them and give them the Mute role if they don't stop."
      },
      {
        "name": "Spamming",
        "value": "If someone is spamming identical messages in the server, warn them to stop. If they do not heed the warning, mute them. For bot channels, if someone is spamming the same command, remind them to not overload the bots, as they can break. If the member is a new join, a kick or ban can be justified."
      },
      {
        "name": "Other Languages",
        "value": "If members are consistantly talking in another language, ask them to speak in english, as a Moderator cannot do their job when members are speaking in a foreign language. Failure to comply may result in the maximum punishment of a mute."
      },
      {
        "name": "Commands",
        "value": "If members are using commands in any channel other than the bot commands channel, tag the channel and remind them to keep the commands in there so our chats stay neat and tidy."
      },
       {
        "name": "===============================================",
        "value": "         NOTE: This is a NO REPLY message."
      }

    ]
  }
}
	);//end message 3
	
	user1.send(
{
  "embed": {
    "title": "Moderator Handbook",
    "description": "page 4 of 5",
    "color": 16552523,
    "footer": {
      "icon_url": "https://media.discordapp.net/attachments/410911214051262464/421800934994346004/image.png",
      "text": "Programmed by Hexamous#4955 | Moderator Handbook 4 / 5"
    },
    "thumbnail": {
      "url": "https://media.discordapp.net/attachments/410911214051262464/421782359872897034/image.png?width=300&height=300"
    },


    "fields": [
      {
        "name": "===============================================",
        "value": "**Punishments**\nYou will be required to enforce the rules in accordance with our punishment system."
      },
      {
        "name": "Reminder",
        "value": "If you see someone is breaking a rule, remind them of the rule they are breaking. If they ask what rule they are breaking, tell them the rule number or quote the rule itself."
      },
      {
        "name": "Warning",
        "value": "If someone is knowingly breaking a rule, give them a verbal warning to stop. Be specific with the unruly thing they are doing."
      },
      {
        "name": "Mute",
        "value": "If someone is breaking chat rules, you may mute them after giving them a warning."
      },
      {
        "name": "Kick",
        "value": "If a member is consistantly breaking rules in a short amount of time, you may kick them. \nYou may not kick members for arguing, but you can kick them for disrespecting staff (such as degrading them or the server)."
      },
      {
        "name": "Ban",
        "value": "If a member who is kicked joins the guild again and starts breaking rules, you may ban them. Be sure to give a reason for the ban and attach your username within the ban reasoning. \n**Important note : If you are going to ban an unruly member, screenshot the evidence and put it in the staff channel along with the user's name so it can be searched easily.**"
      },
       {
        "name": "===============================================",
        "value": "         NOTE: This is a NO REPLY message."
      }

    ]
  }
}
	);//end message 4
	
	user1.send(
{
  "embed": {
    "title": "Moderator Handbook",
    "description": "page 5 of 5",
    "color": 16552523,
    "footer": {
      "icon_url": "https://media.discordapp.net/attachments/410911214051262464/421800934994346004/image.png",
      "text": "Programmed by Hexamous#4955 | Moderator Handbook 5 / 5"
    },
    "thumbnail": {
      "url": "https://media.discordapp.net/attachments/410911214051262464/421782359872897034/image.png?width=300&height=300"
    },


    "fields": [
      {
        "name": "===============================================",
        "value": "**New Joins**\nStrict rules are place for new members who break rules upon join. It is important to screenshot the offenses, as they dont yet have a reputation."
      },
      {
        "name": "Advertising",
        "value": "If someone posts a link to a discord server, screenshot and ban. If they are advertising another service, screenshot and then delete the message. remind them that this is not a place to advertise. If they advertise again, screenshot and ban."
      },
      {
        "name": "Spamming",
        "value": "Members who join and immediately start spamming can be banned. They are seen as trolls who have nothing good to offer our server."
      },
      {
        "name": "Derogatory Language",
        "value": "If someone joins and starts excessively cursing, warn them to stop before muting or kicking."
      },
      {
        "name": "Degrading Members",
        "value": "Members who join and degrade or harass other members because of their beliefs shall be kicked. If they rejoin and continue, ban them."
      },
      {
        "name": "Breaking Rules",
        "value": "If a new person is breaking a rule, urge them to do `+rules` in bot commands. If they continue to break little rules, mute them for a short amount of time (10 minutes is good) and tell them to read the rules. Warn them that continuing to break the rules will result in further punishment."
      },
       {
        "name": "===============================================",
        "value": "         NOTE: This is a NO REPLY message."
      }

    ]
  }
}
	);//end message 5
}

///////////////////////////////////////////////////////////////////////////////////////////////////////
					//Poll commands
///////////////////////////////////////////////////////////////////////////////////////////////////////

let pollTypes = ["tf", "abc", "abcd", "abcde", "ud", "yn", "6"];

//sets poll content
let poll = message.content.split(" ");
poll.splice(0, 4);
poll = poll.join(" ");

//sends poll types
if(command === "polltypes"){
	message.channel.send("`yn, tf, ud, abc, abcd, abcde, 6`");
}

//checks permissions
if(command === "poll"){
if(!message.member.roles.some(r=>["Developer"].includes(r.name)) ) {
    message.channel.send(reject);
	return;
}

if(!input[2]){
    message.channel.reply("`To use this command, do +poll <number> <type> <reward amount> <message>. For a list of types, do +polltypes`");
    return;
}

//checks if a valid poll type
for (let pollType in pollTypes) {
    if (!input[2] === pollType){
	message.channel.send("`Not a vailid poll type! +polltypes for a list of poll types.`");
	return;
    }
}

let question = {
number : rawInput[1],
type : rawInput[2],
reward : rawInput[3]
}

message.delete()
message.channel.send(
{
  "embed": {
    "title": "Question",
    "description": question.number,
    "color": 16552523,
    "footer": {
      "icon_url": "https://media.discordapp.net/attachments/410911214051262464/421800934994346004/image.png",
      "text": "Programmed by Hexamous#4955 | Poll Question"
    },
    "thumbnail": {
      "url": "https://media.discordapp.net/attachments/410911214051262464/421782359872897034/image.png?width=300&height=300"
    },


    "fields": [
      {
        "name": "===============================================",
        "value": poll
      },
      {
        "name": "Reward : ",
        "value": question.reward
      },
       {
        "name": "===============================================",
        "value": "         NOTE: Rewards will be given within a few days of question post. Winners will be announced in the #announcements channel."
      }

    ]
  }
}
)
	.then(function (message) {
	}).catch(function() {
	if(rawInput[1] === "ud"){
		message.react(":arrow_up:")
		message.react(":arrow_down:")
	}
	if(rawInput[1] === "tf"){
		message.react("regional_indicator_t:")
		message.react("regional_indicator_f:")
	}
	if(rawInput[1] === "yn"){
		message.react("regional_indicator_y:")
		message.react("regional_indicator_n:")
	}
	if(rawInput[1] === "abc"){
		message.react(":regional_indicator_a:")
		message.react(":regional_indicator_b:")
		message.react(":regional_indicator_c:")
	}
	if(rawInput[1] === "abcd"){
		message.react(":regional_indicator_a:")
		message.react(":regional_indicator_b:")
		message.react(":regional_indicator_c:")
		message.react(":regional_indicator_d:")
	}
	if(rawInput[1] === "abcde"){
		message.react(":regional_indicator_a:")
		message.react(":regional_indicator_b:")
		message.react(":regional_indicator_c:")
		message.react(":regional_indicator_d:")
		message.react(":regional_indicator_e:")
	}
	if(rawInput[1] === "6"){
		message.react(":sparkling_heart:")
		message.react(":purple_heart:")
		message.react(":blue_heart:")
		message.react(":green_heart: ")
		message.react(":yellow_heart:")
		message.react(":heart:")
	}
	});
}


///////////////////////////////////////////////////////////////////////////////////////////////////////
					//Regular commands
///////////////////////////////////////////////////////////////////////////////////////////////////////


if(command === "commands"){
	message.channel.send(
{
  "embed": {
    "title": "Commands || Hex Bot",
    "description": "\npage 1 of 1 \n",
    "color": 16552523,
    "footer": {
      "icon_url": "https://media.discordapp.net/attachments/410911214051262464/421800934994346004/image.png",
      "text": "Programmed by Hexamous#4955 || page 1 of 1"
    },
    "thumbnail": {
      "url": "https://media.discordapp.net/attachments/410911214051262464/421782359872897034/image.png?width=300&height=300"
    },

    "fields": [

      {
        "name": "To use a command, use `+` before the following commands:",
        "value": "*Note: If you think an info page needs to be added, feel free to mention it in #Suggestions.*"
      },
      {
        "name": "Welcome",
        "value": "Sends the server introduction page."
      },
      {
        "name": "Rules",
        "value": "Sends all of the server rules."
      },
      {
        "name": "Roles",
        "value": "Lists all of the non-assignable roles."
      },
      {
        "name": "Ranks",
        "value": "Lists all of the ranks you can earn."
      },
      {
        "name": "Color Roles",
        "value": "Gives a list of all color roles."
      },
      {
        "name": "Nickname",
        "value": "Changes the nickname of the user. Must have a `Nickname Permissions` or a `Change Nickname Pass` role in order to use."
      },
      {
        "name": "Economy",
        "value": "Lists all of the economy commands."
      },
      {
        "name": "Games",
        "value": "Lists all of the economy games."
      },
      {
        "name": "Income",
        "value": "Lists each role that earns money and how much they make.\n \n**=============================================\n**"
      }


    ]
  }
}
	);//end message
}//end handbook command
/*
if(command === "nickname" || command === "nick" || command === "change"){
	if(!message.member.roles.some(r=>["Nickname Permissions"].includes(r.name)) && !message.member.roles.some(r=>["Change Nickname Pass"].includes(r.name)) ) {
		message.channel.send("`You must have the 'Change Nickname Pass' or 'Nickname Permissions' rank to use this command!`");
		return;
	}

	if(!input[1]){
		message.channel.send("`To use this command, do +nickname <nickname>.`");
		return;
	}

	if(message.member.roles.some(r=>["Change Nickname Pass"].includes(r.name))) {
		let nicknameChange = inputArgs;
		message.author.setNickname(nicknameChange);
		message.channel.send("`Nickname changed to '" + nicknameChange + "'!`");

		let nameRole = message.guild.roles.find("name", "Change Nickname Pass");
		message.member.removeRole(nameRole).catch(console.error);	
		message.channel.send("`Nickname Pass used successfully!`");
		return;
	}
	
	if(message.member.roles.some(r=>["Nickname Permissions"].includes(r.name))){
		let nicknameChanger = inputArgs;
		message.author.setNickname(nicknameChanger);
		message.channel.send("`Nickname changed to '" + nicknameChanger + "'!`");	
		return;	
	}
}
*/

if(message.member.roles.some(r=>["Change Nickname Pass"].includes(r.name))){
	let nameRoleRemove = message.guild.roles.find("name", "Change Nickname Pass");
	message.member.removeRole(nameRoleRemove).catch(console.error);
}	


if(command === "color" || command === "colorroles" || command === "colors"){

	message.channel.send("https://media.discordapp.net/attachments/422159890753257473/425332367364980746/colours_1.png?width=383&height=300");
	message.channel.send("https://media.discordapp.net/attachments/422159890753257473/425332368140795914/colours_2.png?width=383&height=301");

    if(!message.member.roles.some(r=>["Colorful"].includes(r.name)) ) {
        message.channel.send("`Note : You must buy the Colorful rank from the store in order to gain permissions to assign color roles.`");
    }
	else{
		message.channel.send("`To assign a color role, use +<role>. To remove a color role, use -<role>.`");
	}	
}

if(command === "income"){
	message.channel.send(
{
  "embed": {
    "title": "Income",
    "description": "\npage 1 of 2\n",
    "color": 16552523,
    "footer": {
      "icon_url": "https://media.discordapp.net/attachments/410911214051262464/421800934994346004/image.png",
      "text": "Programmed by Hexamous#4955 || page 1 of 2"
    },
    "thumbnail": {
      "url": "https://media.discordapp.net/attachments/410911214051262464/421782359872897034/image.png?width=300&height=300"
    },

    "fields": [

      {
        "name": "Captive",
        "inline": true,
        "value": "⊭5"
      },
          {
        "name": "Helper",
        "inline": true,
        "value": "⊭20"
      },
      {
        "name": "Plebian",
        "inline": true,
        "value": "⊭10"
      },
          {
        "name": "Moderator",
        "inline": true,
        "value": "⊭30"
      },
          {
        "name": "Civillian",
        "inline": true,
        "value": "⊭15"
      },
          {
        "name": "Administrator",
        "inline": true,
        "value": "⊭40"
      },
          {
        "name": "Rebel",
        "inline": true,
        "value": "⊭20"
      },
          {
        "name": "Developer",
        "inline": true,
        "value": "⊭50"
      },
          {
        "name": "Skepticist / Conspirator",
        "inline": true,
        "value": "⊭25"
      },
          {
        "name": "Banker",
        "inline": true,
        "value": "⊭85"
      },
          {
        "name": "Leader",
        "inline": true,
        "value": "⊭30"
      },
      {
        "name": "Speaker / Debater",
        "inline": true,
        "value": "⊭15"
      },
      {
        "name": "Conspiracy Congressman",
        "inline": true,
        "value": "⊭30"
      },          
          {
        "name": "Cabinet Member",
        "inline": true,
        "value": "⊭40\n\n**=============================================\n**"
      }
    ]
  }
}
	);//end message
	message.channel.send(
{
  "embed": {
    "title": "Income",
    "description": "\npage 2 of 2\n",
    "color": 16552523,
    "footer": {
      "icon_url": "https://media.discordapp.net/attachments/410911214051262464/421800934994346004/image.png",
      "text": "Programmed by Hexamous#4955 || page 2 of 2"
    },
    "thumbnail": {
      "url": "https://media.discordapp.net/attachments/410911214051262464/421782359872897034/image.png?width=300&height=300"
    },

    "fields": [

          {
        "name": "1 Invite",
        "inline": true,
        "value": "⊭5"
      },
      {
        "name": "Marketer",
        "inline": true,
        "value": "⊭10"
      },
          {
        "name": "5 Invites",
        "inline": true,
        "value": "⊭15"
      },
      {
        "name": "Reddit",
        "inline": true,
        "value": "⊭10"
      },
          {
        "name": "10 Invites",
        "inline": true,
        "value": "⊭20"
      },
          {
        "name": "Health",
        "inline": true,
        "value": "⊭6"
      },
          {
        "name": "20 Invites",
        "inline": true,
        "value": "⊭20"
      },
          {
        "name": "Government",
        "inline": true,
        "value": "⊭8"
      },
          {
        "name": "30 Invites",
        "inline": true,
        "value": "⊭25"
      },
          {
        "name": "Illuminati",
        "inline": true,
        "value": "⊭8"
      },
          {
        "name": "40 Invites",
        "inline": true,
        "value": "⊭25"
      },
          {
        "name": "Science",
        "inline": true,
        "value": "⊭8"
      },
          {
        "name": "50 Invites",
        "inline": true,
        "value": "⊭30"
      },
          {
        "name": "Conspiracy Center",
        "inline": true,
        "value": "⊭5\n "
      },
          {
        "name": "=============================================",
        "inline": true,
        "value": "*Note: To get invite ranks, go to #perks.*"
      }

    ]
  }
}
	);//end message
}//end income command

if(command === "games"){
	message.channel.send(
{
  "embed": {
    "title": "Economy Games",
    "description": "page 1 of 1\n",
    "color": 16552523,
    "footer": {
      "icon_url": "https://media.discordapp.net/attachments/410911214051262464/421800934994346004/image.png",
      "text": "Programmed by Hexamous#4955 || page 1 of 1"
    },
    "thumbnail": {
      "url": "https://media.discordapp.net/attachments/410911214051262464/421782359872897034/image.png?width=300&height=300"
    },

    "fields": [

      {
        "name": "Blackjack",
        "value": "Beat the dealer's hand without going over 21.\n`!blackjack <bet>`  - Starts a new Blackjack game.\n`!hit` - Take another card.\n`!stand` - Hold your cards and end your turn.\n`!split` - Split into two hands, if you have two of the same card.\n`!double down` - Double your bet, and take 1 more card"
      },
      {
        "name": "Roulette",
        "value": "`roulette <bet> <space>` - Start a game of roulette, or place your bet in an existing game."
      },
      {
        "name": "Cock Fight",
        "value": "`!buy-item chicken` - Buys a new chicken from the shop. \nYou can only own 1 chicken at a time.\n`!cock-fight <bet>` - The more times your chicken wins, the stronger it gets."
      },
      {
        "name": "Server Lottery",
        "value": "A contest where people with lottery tickets (bought from shop) can enter. The amount of enteries depend on how many tickets are turned in and how many enteries each ticket is worth."
      },
      {
        "name": "Server Raffle",
        "value": "A contest similar to a lottery contest, but members can only enter once. Enter by reacting on the posted event. If the selected winner does not have an entry ticket in their inventory when they are selected, they are disqualified. The winner must trade the developer the entry ticket upon winning."
      },
      {
        "name": "Special Money Events",
        "value": "Sometimes special events will be held where members can participate. The winner will earn a sum of money.\n \n**=============================================\n**"
      },
      {
        "name": "Chess",
        "value": "Do `+chess` for more information. This game is not economy related."
      }

    ]
  }
}
	);//end message
}//end command

if(command === "chess"){
	message.channel.send(
{
  "embed": {
    "title": "Chess",
    "description": "page 1 of 1\n**=============================================**",
    "color": 16552523,
    "footer": {
      "icon_url": "https://media.discordapp.net/attachments/410911214051262464/421800934994346004/image.png",
      "text": "Programmed by Hexamous#4955 || page 1 of 1"
    },
    "thumbnail": {
      "url": "https://media.discordapp.net/attachments/410911214051262464/421782359872897034/image.png?width=300&height=300"
    },

    "fields": [

      {
        "name": "`|newgame <@user>`",
        "value": "Request to play a game with whoever you mention."
      },
      {
        "name": "`|move <notion>`",
        "value": "Moves a piece. The notation format is standard. Ex. a2a4 would move piece a2 to a4. a6a8q would move a piece from a6 to a8 and promote it to a queen."
      },
      {
        "name": "`|reset`",
        "value": "Creates a new game with the same opponent."
      },
      {
        "name": "`|exit`",
        "value": "Exits the current game you are in."
      },
      {
        "name": "`|board`",
        "value": "Shows the game board."
      },
      {
        "name": "=============================================",
        "value": "NOTE : Game board displays after each move."
      }
    ]
  }
});//end message
}//end chess command

if(command === "economy"){
	message.channel.send(
{
  "embed": {
    "title": "Economy",
    "description": "\npage 1 of 1 || use +games to view all economy based games.\n",
    "color": 16552523,
    "footer": {
      "icon_url": "https://media.discordapp.net/attachments/410911214051262464/421800934994346004/image.png",
      "text": "Programmed by Hexamous#4955 || page 1 of 1"
    },
    "thumbnail": {
      "url": "https://media.discordapp.net/attachments/410911214051262464/421782359872897034/image.png?width=300&height=300"
    },

    "fields": [


      {
        "name": "Income",
        "value": "Many roles recieve income automatically every hour. Use the `income` command to view the incomes of all the roles."
      },
      {
        "name": "Messages",
        "value": "Each message a member sends will pay out  ⊭15 -  ⊭50. The payout cooldown is 10 seconds to encourage people to read other's responses and to send single messages rather than many short ones. \n\nNOTE: messaging topic channels without contributing to the conversation is punishable."
      },
      {
        "name": "Work",
        "inline": true,
        "value": "`!work` will give you up to ⊭500. No risk."
      },
      {
        "name": "Slut",
        "inline": true,
        "value": "`!slut` will give you up to ⊭500, but you have a slight risk of getting caught."
      },
      {
        "name": "Rob",
        "value": "`!rob` (1h) Steal money from another member. \nFailure Rate : your networth / (their cash + your networth)."
      },
      {
        "name": "Crime",
        "value": "`!crime` (4h) Has a higher risk but up to a ⊭2,500 reward."
      },
      {
        "name": "Bank",
        "value": "`![deposit / withdraw] <amount>` Banks are a safe place to store your money so it won't be robbed. Sums collect interest."
      },
      {
        "name": "Interest",
        "value": "Interest is applied to your balance every 12 hours. +4% interest."
      },
      {
        "name": "Polls",
        "value": "A channel where people can vote for a chance to win money."
      },
      {
        "name": "Leaderboard",
        "value": "`!leaderboard` Will show the economy leaderboard for this server."
      },
      {
        "name": "Shop",
        "value": "`!shop` To see items in the shop. `+shop` for more details.\n \n**=============================================\n**"
      }


    ]
  }
}
	);//end message
}//end command

if(command === "ranks"){
	message.channel.send(
{
  "embed": {
    "title": "Conspiracy Congress Member Roles",
    "description": "\npage 1 of 1\n",
    "color": 16552523,
    "footer": {
      "icon_url": "https://media.discordapp.net/attachments/410911214051262464/421800934994346004/image.png",
      "text": "Programmed by Hexamous#4955 || page 1 of 1"
    },
    "thumbnail": {
      "url": "https://media.discordapp.net/attachments/410911214051262464/421782359872897034/image.png?width=300&height=300"
    },

    "fields": [


      {
        "name": "Ranks",
        "value": "These can be obtained by gaining levels in chat or by buying a Pendant.\n\n**=============================================\n**"
      },
      {
        "name": "Cabinet Member",
        "value": "Given to people who reach level 99 in chat."
      },
      {
        "name": "Conspiracy Congressman",
        "value": "Given to people who reach level 60 in chat."
      },
      {
        "name": "Leader",
        "value": "Given to people who reach level 50 in chat. You must have both Conspirator and Skepticist to get Leader with a pendant."
      },
      {
        "name": "Conspirator",
        "value": "Can be obtained with a pendant, equal to Skepticist.",
        "inline": true
      },
      {
        "name": "Skepticist",
        "value": "Can be obtained with a pendant, equal to Conspirator.",
        "inline": true
      },
      {
        "name": "Rebel :",
        "value": "Given to people who reach level 25 in chat."
      },
      {
        "name": "Civilian",
        "value": "Given to people who reach level 10 in chat."
      },
      {
        "name": "Plebeian",
        "value": "Given to people who reach level 1 in chat.",
        "inline": true
      },
      {
        "name": "Captive",
        "value": "Given to people who reach level 1 in chat. May be given when a staff member spots you in chat without a rank.\n \n**=============================================\n**",
        "inline": true
      }
    ]
  }
}
);//end roles 1/2
}//end command

if(command === "roles"){
	message.channel.send(
{
  "embed": {
    "title": "Conspiracy Congress Member Roles",
    "description": "\npage 1 of 1\n",
    "color": 16552523,
    "footer": {
      "icon_url": "https://media.discordapp.net/attachments/410911214051262464/421800934994346004/image.png",
      "text": "Programmed by Hexamous#4955 || page 1 of 1"
    },
    "thumbnail": {
      "url": "https://media.discordapp.net/attachments/410911214051262464/421782359872897034/image.png?width=300&height=300"
    },

    "fields": [


      {
        "name": "Roles",
        "value": "For more information on any role, do `?<role>`\n\n**=============================================\n**"
      },
      {
        "name": "Developer",
        "value": "The Developer programs and manages bots to make the server user-friendly and to make information easier to find."
      },
      {
        "name": "Administrator",
        "value": "Given to members with a Moderator rank when they are promoted. They enforce the rules and are capable of banning other users."
      },
      {
        "name": "Moderator",
        "value": "Given to members with a Helper rank when they are promoted. They enforce the rules and keep the server peaceful."
      },
      {
        "name": "Trial Mod",
        "value": "Given to members who submit a moderator application and get accepted. Upon good preformance, they may recieve a Moderater role. They will often help in specific areas, like keeping the community happy or helping the developer make the server user-friendly."
      },
      {
        "name": "Helper",
        "value": "People who are selected by the developer to help out with the server in exchange for money and additional perks."
      },
      {
        "name": "Banker",
        "value": "Given people who buy and use a Banker role from the shop. Pays an extra ⊭85."
      },
      {
        "name": "Robots",
        "value": "Server bots."
      },
      {
        "name": "Moderator Application",
        "value": "Given to people who buy and use a tinfoil hat from the shop. They will have access to the moderator application channel, and after their application is submitted, this role will be taken away."
      },
      {
        "name": "Invite Ranks",
        "value": "Given to people who invite others. This will give members extra money, as these ranks have an income.\n \n**=============================================\n**"
      }


    ]
  }
}
);//end roles 
}//end roles command

if(command === "channels"){
message.channel.send(
{
  "embed": {
    "title": "Channels",
    "description": "page 1 of 1",
    "color": 16552523,
    "footer": {
      "icon_url": "https://media.discordapp.net/attachments/410911214051262464/421800934994346004/image.png",
      "text": "Programmed by Hexamous#4955 | Channels 1 / 1"
    },
    "thumbnail": {
      "url": "https://media.discordapp.net/attachments/410911214051262464/421782359872897034/image.png?width=300&height=300"
    },


    "fields": [
      {
      "name":"=============================================\n Default Categories ",
      "value": "Everyone has access to the 2 categories below\n(excluding #reddit and #market_updates).\n "
      },
      {
      "name":"Information",
      "inline":true,
      "value": "welcome\nrules\ninformation\nannouncements\nreddit\npolls\nmarket_updates\nperks"
      },
      {
      "name":"General",
      "inline":true,
      "value": "general\noff_topic\ncurrent_events\nnsfw\nmemes\npictures\nsuggestions\narchive\nbot-commands"
      },
      {
      "name": "=============================================\nSubscribed Categories",
      "value": "All of the channels below will be unlocked when you obtain their respective roles.\n "
      },

      {
      "name":"Conspiracy Center",
      "inline":true,
      "value": "conspiracy_general\nmandela_effect\ndeaths_and_disappearances\nfalse_history\nreligion"
      },
      {
      "name":"Health & Polulation control",
      "inline":true,
      "value": "health_general\ngenocide\ngmo\nvaccinations\nwater_contamination\n "
      },
      {
      "name":"Government",
      "inline":true,
      "value": "government_general\n9-11\nfema_camps\nmartial_law\n "
      },
      {
      "name":"Illuminati",
      "inline":true,
      "value": "illuminati\nnew_world_order\nreptilians"
      },
      {
      "name":"Science",
      "inline":true,
      "value": "science_general\nartificial_intelligence\npsychology\nchemtrails\nenviroment\nhaarp_and_weather_manipulation\ntime_travel\nmoon_landing\nflat_earth\n**=============================================**\n "
      }                                                       
    ]
  }
}
);//end message
}//end command

if(command === "welcome"){
	message.channel.send(
{
  "embed": {
    "title": "Welcome!",
    "description": "Enjoy your stay at Conspiracy Congress!\n",
    "color": 16552523,
    "footer": {
      "icon_url": "https://media.discordapp.net/attachments/410911214051262464/421800934994346004/image.png",
      "text": "Programmed by Hexamous#4955"
    },
    "thumbnail": {
      "url": "https://media.discordapp.net/attachments/410911214051262464/421782359872897034/image.png?width=300&height=300"
    },

    "fields": [


      {
        "name": "\n**=============================================\n**",
        "value": "Debates**. ** News**.**  Community**.**"
      },
      {
        "name": "Getting Started",
        "value": "Introduce yourself in #General. Tell us a bit about why you're here!"
      },
      {
        "name": "About the Server",
        "value": "This server is for discussing news, current events, politics, philosophy. and many other topics! The goal here is to learn and discuss with others about topics of interest.\n\n**=============================================\n**"
      },
      {
        "name": "Roles",
        "value": "All of the roles listed bellow are self-assignable.\n\nUse `+<role>` to assign or `-<role>` to remove."
      },
      {
        "name": "Pingable Roles",
        "value": "Speaker\nDebater\nMarketer (feed)",
        "inline": true
      },
      {
        "name": "Channel Roles",
        "value": "Conspiracy Center\nReddit (feed)\nScience\nHealth\nGovernment\nIlluminati\n\n**=============================================\n**",
        "inline": true
      },
      {
        "name": "Recommended Commands :",
        "value": "Rules\nRoles\nRanks\nChannels\nEconomy\nCommands\n\n*These commands will give you more information.*\n**=============================================\n**"
      }

    ]
  }
}
);//end message
}//end welcome
else if(message.author.bot){return};

if(command === "rules"){
	message.channel.send(

{
  "embed": {
    "title": "Rules",
    "description": "page 1 of 2 | Punishments will be at the discretion of the staff.",
    "color": 16552523,
    "footer": {
      "icon_url": "https://media.discordapp.net/attachments/410911214051262464/421800934994346004/image.png",
      "text": "Programmed by Hexamous#4955 | Rules 1 / 2"
    },
    "thumbnail": {
      "url": "https://media.discordapp.net/attachments/410911214051262464/421782359872897034/image.png?width=300&height=300"
    },


    "fields": [
      {
        "name": "Rule 1 : RESPECT",
        "value": "Be respectful to others. Do not degrade others for what they believe in. Instead, feel free to debate with them or ask them for sources."
      },
      {
        "name": "Rule 2 : NO EXCESSIVE CURSING",
        "value": "No excessive cursing in non NSFW chats."
      },
      {
        "name": "Rule 3 : NO BULLYING",
        "value": "This is a friendly server to debate in; not to bully. Do not attack people personally. Includes swearing."
      },
      {
        "name": "Rule 4 : STAY ON TOPIC",
        "value": "Stay on the channel's topic. Talking about things not pertaining to the topic clutters the channel."
      },
      {
        "name": "Rule 5 : NO ADVERTISING",
        "value": "**NO ADVERTISING** without Developer permission. This will result in a **perm ban**. Includes mass DM's."
      },
      {
        "name": "Rule 6 : SFW",
        "value": "ABSOLUTELY NO NSFW CONTENT EXCEPT IN NSFW CHANNELS. This can include references to explicit content (violence and otherwise)."
      },
      {
        "name": "Rule 7 : NO SPAMMING",
        "value": "No spamming. This includes **excessive use** of bolded words, caps lock, italics, **repeating** messages or words, copypastas, and **tagging**. No spamming commands in other than the bot command channel."
      },
      {
        "name": "Rule 8 : NO HARASSMENT",
        "value": "No harassing other members. This can include DM'ing without permission or friend request spams. \n \n**=============================================\n**"
      }

    ]
  }
}
);
	message.channel.send(
{
  "embed": {
    "title": "Rules",
    "description": "page 2 of 2 | Punishments will be at the discretion of the staff.",
    "color": 16552523,
    "footer": {
      "icon_url": "https://media.discordapp.net/attachments/410911214051262464/421800934994346004/image.png",
      "text": "Programmed by Hexamous#4955 |  Rules 2 / 2"
    },
    "thumbnail": {
      "url": "https://media.discordapp.net/attachments/410911214051262464/421782359872897034/image.png?width=300&height=300"
    },


    "fields": [
      {
        "name": "Rule 9 : ON SUGGESTIONS",
        "value": "Only suggestions go in #suggestions. Take large discussions to #general or #off-topic."
      },
      {
        "name": "Rule 10 : WITNESS",
        "value": "If you knowingly see someone breaking a rule, report it under the STAFF category."
      },
      {
        "name": "Rule 11 : THREATS",
        "value": "Threatening another person on the server, including in DM's, will get you a perm ban and reported."
      },
      {
        "name": "Rule 12 : BLACKMAIL",
        "value": "Blackmailing, or attempting to blackmail another person on the server, including in DM's, will get you a perm ban and reported."
      },
      {
        "name": "Rule 13 : @everyone",
        "value": "NO PINGING EVERYONE !! - Punishable by permban!\nIncludes spamming pingable roles."
      },
      {
        "name": "Rule 14 : NICKNAMES",
        "value": "Rated R names may be changed at the discretion of the staff. Keep it PG 13."
      },
      {
        "name": "Rule 15 : ADMIN DECISIONS",
        "value": "Respect Owner and Admin decisions. If you have an issue, report it under the STAFF category."
      },
      {
        "name": "Rule 16 : MESSAGES",
        "value": "Messages in topic channels must contribute to the discussion in some way. If you are sending too many messages that don't contribute to the discussion, others are allowed to report you under the STAFF category."
      },
      {
        "name": "NOTE: Those who report rule-breakers under the STAFF category help keep our community running smoothly, and may be rewarded.",
        "value": "This can be vital to your reputation if you are wanting to become a staff member.\n \n**=============================================\n**"
      }


    ]
  }
}
);}//end command



if((command === "application")){
if(message.member.roles.some(r=>["Developer", "Moderator Application"].includes(r.name)) ) {
message.channel.send(
{
  "embed": {
    "title": "Moderator Application",
    "description": "page 1 of 2",
    "color": 16552523,
    "footer": {
      "icon_url": "https://media.discordapp.net/attachments/410911214051262464/421800934994346004/image.png",
      "text": "Programmed by Hexamous#4955 | Moderator Aplication 1 / 2"
    },
    "thumbnail": {
      "url": "https://media.discordapp.net/attachments/410911214051262464/421782359872897034/image.png?width=300&height=300"
    },


    "fields": [
      {
      "name":"Take your time.",
      "value": "============================================="
      },
      {
        "name": "1. Answer the following general questions. These will not affect your score.",
        "value": "**Age\n\nGender\n\nPronoun\n\nFirst Name\n\nTime Zone**\n\n============================================= "
      },
      {
        "name": "2. What do you like about Conspiracy Congress?",
        "value": "Why did you join? What do you like most about the server?\n\n "
      },
      {
        "name": "3. What don't you like about Conspiracy Congress?",
        "value": "This should be a critical response, meaning the information can be taken in order to improve our server.\n\n============================================="
      },
      {
        "name": "4. How active are you in the general chats?",
        "value": "Includes all channels under the general category except #bot-commands.\n\n "
      },
      {
        "name": "5. How active are you in the topic chats?",
        "value": "Consists of the channels that you have to subscribe to with a role.\n\n "
      },
      {
        "name": "6. How active are you in the voice channels?",
        "value": "Doesn't include the text channel for voice.\n\n "
      },
      {
        "name": "7. Will you be able to partake in voice channels when other members are in them?",
        "value": "This means being in the voice channel in order to monitor it and keep the peace.\n\n============================================= "
      }
    ]
  }
}
);
message.channel.send(
{
  "embed": {
    "title": "Moderator Application",
    "description": "page 2 of 2",
    "color": 16552523,
    "footer": {
      "icon_url": "https://media.discordapp.net/attachments/410911214051262464/421800934994346004/image.png",
      "text": "Programmed by Hexamous#4955 | Moderator Aplication 2 / 2"
    },
    "thumbnail": {
      "url": "https://media.discordapp.net/attachments/410911214051262464/421782359872897034/image.png?width=300&height=300"
    },


    "fields": [
         {
        "name": "8. What good qualities do you have as a person?",
        "value": "List at least 3.\n\n"
      },
      {
        "name": "9. What things do you wish to improve upon as a person?",
        "value": "List at least 1.\n\n============================================="
      },
      {
        "name": "10. How capable are you of containing your emotions under times of stress?",
        "value": "Can you maintain focus? Do you walk away? Or do you sometimes get angry at others?\n\n============================================="
      },
      {
        "name": "11. Why do you want to be a moderator?",
        "value": "Extended response.\n\n============================================="
      },
      {
        "name": "Read over your application.",
        "value": "Make sure there are no spelling errors and each question is numbered. Hard to read applications will be rejected.\n\n"
      }

    ]
  }
}
);//end message
}//end if statement
else{message.channel.send("`You must buy a tinfoil hat from the shop, them use it to get the Moderator Application role. This will let you access the application with +application (Please only use in the respective channel).`");}
}

///////////////////////////////////////////////////////////////////////////////////////////////////////
					//pendant commands
///////////////////////////////////////////////////////////////////////////////////////////////////////

if(command === "plebeian"){
	if(!message.member.roles.some(r=>["Pendant"].includes(r.name)) ) {
		message.channel.send("`You must have a pendant role to use this command! Use your pendant to gain the pendant role.`")
		return;
	}
	if(!message.member.roles.some(r=>["Captive"].includes(r.name)) ) {
		message.channel.send("`You must have the Captive rank to use this command!`")
		return;
	}
	if(message.member.roles.some(r=>["Civilian"].includes(r.name)) ) {
		message.channel.send("`Your current rank is higher than Plebeian!`")
		return;
	}
	if(message.member.roles.some(r=>["Plebeian"].includes(r.name)) ) {
		message.channel.send("`You already have the Plebeian rank!`")
		return;
	}

	let plebeian = message.guild.roles.find("name", "Plebeian");
	message.member.addRole(plebeian).catch(console.error);	

	let pendantrole = message.guild.roles.find("name", "Pendant");
	message.member.removeRole(pendantrole).catch(console.error);	

	message.reply("`You now have the Plebeian rank!`");
}

if(command === "civilian"){
	if(!message.member.roles.some(r=>["Pendant"].includes(r.name)) ) {
		message.channel.send("`You must have a pendant to use this command!`")
		return;
	}
	if(!message.member.roles.some(r=>["Plebeian"].includes(r.name)) ) {
		message.channel.send("`You must have the Plebeian rank to use this command!`")
		return;
	}
	if(message.member.roles.some(r=>["Rebel"].includes(r.name)) ) {
		message.channel.send("`Your current rank is higher than Civilian!`")
		return;
	}
	if(message.member.roles.some(r=>["Civilian"].includes(r.name)) ) {
		message.channel.send("`You already have the Civilian rank!`")
		return;
	}

	let civilian = message.guild.roles.find("name", "Civilian");
	message.member.addRole(civilian).catch(console.error);	

	let pendantrole = message.guild.roles.find("name", "Pendant");
	message.member.removeRole(pendantrole).catch(console.error);	

	message.reply("`You now have the Civilian rank!`");
}

if(command === "rebel"){
	if(!message.member.roles.some(r=>["Pendant"].includes(r.name)) ) {
		message.channel.send("`You must have a pendant to use this command!`")
		return;
	}
	if(!message.member.roles.some(r=>["Civilian"].includes(r.name)) ) {
		message.channel.send("`You must have the Civilian rank to use this command!`")
		return;
	}
	if(message.member.roles.some(r=>["Conspirator"].includes(r.name)) ) {
		message.channel.send("`Your current rank is higher than Rebel!`")
		return;
	}
	if(message.member.roles.some(r=>["Skepticist"].includes(r.name)) ) {
		message.channel.send("`Your current rank is higher than Rebel!`")
		return;
	}
	if(message.member.roles.some(r=>["Rebel"].includes(r.name)) ) {
		message.channel.send("`You already have the Rebel rank!`")
		return;
	}

	let rebel = message.guild.roles.find("name", "Rebel");
	message.member.addRole(rebel).catch(console.error);	

	let pendantrole = message.guild.roles.find("name", "Pendant");
	message.member.removeRole(pendantrole).catch(console.error);	

	message.reply("`You now have the Rebel rank!`");
}

if(command === "conspirator"){
	if(!message.member.roles.some(r=>["Pendant"].includes(r.name)) ) {
		message.channel.send("`You must have a pendant to use this command!`")
		return;
	}
	if(!message.member.roles.some(r=>["Rebel"].includes(r.name)) ) {
		message.channel.send("`You must have the Rebel rank to use this command!`")
		return;
	}
	if(message.member.roles.some(r=>["Leader"].includes(r.name)) ) {
		message.channel.send("`Your current rank is higher than Conspirator!`")
		return;
	}
	if(message.member.roles.some(r=>["Conspirator"].includes(r.name)) ) {
		message.channel.send("`You already have the Conspirator rank!`")
		return;
	}

	let conspirator = message.guild.roles.find("name", "Conspirator");
	message.member.addRole(conspirator).catch(console.error);	

	let pendantrole = message.guild.roles.find("name", "Pendant");
	message.member.removeRole(pendantrole).catch(console.error);	

	message.reply("`You now have the Conspirator rank!`");
}

if(command === "skepticist"){
	if(!message.member.roles.some(r=>["Pendant"].includes(r.name)) ) {
		message.channel.send("`You must have a pendant to use this command!`")
		return;
	}
	if(!message.member.roles.some(r=>["Rebel"].includes(r.name)) ) {
		message.channel.send("`You must have the Rebel rank to use this command!`")
		return;
	}
	if(message.member.roles.some(r=>["Leader"].includes(r.name)) ) {
		message.channel.send("`Your current rank is higher than Conspirator!`")
		return;
	}
	if(message.member.roles.some(r=>["Skepticist"].includes(r.name)) ) {
		message.channel.send("`You already have the Skepticist rank!`")
		return;
	}

	let skepticist = message.guild.roles.find("name", "Skepticist");
	message.member.addRole(skepticist).catch(console.error);	

	let pendantrole = message.guild.roles.find("name", "Pendant");
	message.member.removeRole(pendantrole).catch(console.error);	

	message.reply("`You now have the Skepticist rank!`");
}

if(command === "leader"){
	if(!message.member.roles.some(r=>["Pendant"].includes(r.name)) ) {
		message.channel.send("`You must have a pendant to use this command!`")
		return;
	}
	if(!message.member.roles.some(r=>["Conspirator"].includes(r.name)) ) {
		message.channel.send("`You must have the Conspirator rank to use this command!`")
		return;
	}
	if(!message.member.roles.some(r=>["Skepticist"].includes(r.name)) ) {
		message.channel.send("`You must have the Skepticist rank to use this command!`")
		return;
	}
	if(message.member.roles.some(r=>["Conspiracy Congressman"].includes(r.name)) ) {
		message.channel.send("`Your current rank is higher than Leader!`")
		return;
	}
	if(message.member.roles.some(r=>["Leader"].includes(r.name)) ) {
		message.channel.send("`You already have the Leader rank!`")
		return;
	}

	let leader = message.guild.roles.find("name", "Leader");
	message.member.addRole(leader).catch(console.error);	

	let pendantrole = message.guild.roles.find("name", "Pendant");
	message.member.removeRole(pendantrole).catch(console.error);	

	message.reply("`You now have the Leader rank!`");
}

if(command === "conspiracycongressman"){
	if(!message.member.roles.some(r=>["Pendant"].includes(r.name)) ) {
		message.channel.send("`You must have a pendant to use this command!`")
		return;
	}
	if(!message.member.roles.some(r=>["Leader"].includes(r.name)) ) {
		message.channel.send("`You must have the Leader rank to use this command!`")
		return;
	}
	if(message.member.roles.some(r=>["Cabinet Member"].includes(r.name)) ) {
		message.channel.send("`Your current rank is higher than Conspiracy Congressman!`")
		return;
	}
	if(message.member.roles.some(r=>["Conspiracy Congressman"].includes(r.name)) ) {
		message.channel.send("`You already have the Conspiracy Congressman rank!`")
		return;
	}

	let conspiracyCongressman = message.guild.roles.find("name", "Conspiracy Congressman");
	message.member.addRole(conspiracyCongressman).catch(console.error);	

	let pendantrole = message.guild.roles.find("name", "Pendant");
	message.member.removeRole(pendantrole).catch(console.error);	

	message.reply("`You now have the Conspiracy Congressman rank!`");
}


if(command === "cabinetmember"){
	if(!message.member.roles.some(r=>["Pendant"].includes(r.name)) ) {
		message.channel.send("`You must have a pendant to use this command!`")
		return;
	}
	if(!message.member.roles.some(r=>["Conspiracy Congressman"].includes(r.name)) ) {
		message.channel.send("`You must have the Conspiracy Congressman rank to use this command!`")
		return;
	}
	if(message.member.roles.some(r=>["Cabinet Member"].includes(r.name)) ) {
		message.channel.send("`Your current rank is Cabinet Member!`")
		return;
	}
	if(message.member.roles.some(r=>["Cabinet Member"].includes(r.name)) ) {
		message.channel.send("`You already have the Cabinet Member rank!`")
		return;
	}

	let cabinetMember = message.guild.roles.find("name", "Cabinet Member");
	message.member.addRole(cabinetMember).catch(console.error);	

	let pendantrole = message.guild.roles.find("name", "Pendant");
	message.member.removeRole(pendantrole).catch(console.error);	

	message.reply("`You now have the Cabinet Member rank!`");
}
	
	
///////////////////////////////////////////////////////////////////////////////////////////////////////
					//memes
///////////////////////////////////////////////////////////////////////////////////////////////////////

let memes = {
//awyis : "https://www.funnyjunk.com/imgrd/rd/thumbnails/comments/d7/2b/d72b8a974c185878d5b3d4a885d788b7.jpg",
chinesecorn : "https://www.youtube.com/watch?v=khXbRI7KGuk",
comptroll : "https://m.popkey.co/8ca17e/JaOMj_s-200x150.gif",
computersleep : "http://www.synapsesem.com/wp-content/uploads/2017/02/SEO-mistakes.jpg",
Mistakes : "http://www.synapsesem.com/wp-content/uploads/2017/02/SEO-mistakes.jpg",
computerstrip : "https://gph.is/11nJVcT",
corngirl : "https://www.youtube.com/watch?v=CO8Uszop5GU",
danceguy : "http://1.bp.blogspot.com/-Q3HKxKf6VJA/VPcGUAqOwhI/AAAAAAAAEDo/W1cJehWfRBc/s1600/23.gif",
dancepennywise : "https://gph.is/2xtqoep",
deleteallevidence : "https://gph.is/HkiA0m",
disappoint : "https://fthmb.tqn.com/m6gHpKn8UfYuczYqNnURYQbuALk=/768x0/filters:no_upscale()/okay_guy-56a9fe093df78cf772abf2ea.jpg",
doublesmoke : "https://giphy.com/gifs/weed-wiz-khalifa-smoke-KpAPQVW9lWnWU",
//emoawesome : "http://i3.kym-cdn.com/photos/images=/facebook/000/226/765/1310800939068.gif",
excite : "http://ragefaces.memesoftware.com/faces/svg/neutral-fsjal.svg",
extremefacepalm : "https://static.comicvine.com/uploads/original/11121/111210935/4311026-bd6.png",
eyesonyou : "https://i.pinimg.com/736x/1a/cd/9c/1acd9c2cf27c29fabc9eafca4523fa04--troll-face-tes.jpg",
facepalm : "http://3.bp.blogspot.com/-P0jLdct71dQ/T_68DtdyVJI/AAAAAAAAA1E/KsLqdOZrb_A/s1600/Face+palm.jpg",
fffuuu : "https://fthmb.tqn.com/4zpOvywgxUrhzArC7B2UHdhwCa4=/768x0/filters:no_upscale()/epic-rage-guy-58072dc45f9b5805c23974d5.jpg", 
friedchicken : "https://gph.is/1XRDpS8",
hacker:"https://media.giphy.com/media/YQitE4YNQNahy/giphy.gif",
hackinginprocess : "https://media.giphy.com/media/eCqFYAVjjDksg/giphy.gif",
lenny : "http://i0.kym-cdn.com/entries/icons/original/000/011/764/LennyFace.jpg",
motherofgod : "https://vignette.wikia.nocookie.net/legomessageboards/images/2/28/Meme-Faces-Mother-Of-God-16.png/revision/latest/scale-to-width-down/468?cb=20151217171439,",
nerdrage : "https://media.discordapp.net/attachments/389857801985327114/391716778306174976/maxresdefault.png?width=441&height=248",
no : "https://forums.theblockheads.net/uploads/default/original/3X/0/0/00c40014b33f4988e9693e4505cd301e53942295.jpg",
o_o : "http://i0.kym-cdn.com/photos/images/newsfeed/000/210/953/130719130758.jpg",
perplexed : "http://i0.kym-cdn.com/photos/images/original/001/030/017/901.png",
phonetroll : "http://www.sherv.net/cm/emoticons/memes/trollface-problem-meme-smiley-emoticon.png",
pokerface : "https://cdn.shopify.com/s/files/1/0891/8314/products/Poker_Face_Decal_4f0383be00a99_large.png?v=1459054442",
pretendtowork : "http://i.imgur.com/wTh2JFI.gif",
programming : "https://i.imgur.com/VhlQK.gif",
programmingclient : "https://i.imgur.com/FsDgYcr.gif",
programmingoffice : "https://i.imgur.com/lIzkqy9.gif",
programmingtriggered : "https://steemit-production-imageproxy-web.s3.amazonaws.com/U5drmvRSan5Bp3zJjW9BgDZt22Jdc3h",
puzzled : "http://mp1st.com/wp-content/uploads/2013/06/hd_computer_guy_meme_by_zapgod16-d4t2jh3-e1371833271958.png",
//troll : "http://i0.kym-cdn.com/entries/icons/original/000/000/091/Trocontent/uploads/2013/06/hd_computer_guy_meme_by_zapgod16-d4t2jh3-e1371833271958.png",
rainbow : "https://gph.is/1KiUsd4",
reee : "https://media.discordapp.net/attachments/389857801985327114/393821271961632771/image.gif",
salt : "https://media1.tenor.com/images/e5ca83d9d4a403acb68eb45f58ae8bac/tenor.gif?itemid=4815189",
saltintensifies : "https://media1.tenor.com/images/c21d6a19423ff444f6383fda164908f2/tenor.gif?itemid=5477150",
seriously : "http://readerswonderland.com/wp-content/uploads/2013/08/eb7.gif",
shocked : "https://gph.is/2uSzZKj",
shy : "https://files.gamebanana.com/img/ico/sprays/53411d41c7d83.png",
smokeitup : "https://giphy.com/gifs/weed-wiz-khalifa-smoke-KpAPQVW9lWnWU",
stopit : "https://media.discordapp.net/attachments/389857801985327114/393821537586642964/image.gif",
suicide : "`National Suicide Prevention Lifeline Call 1-800-273-8255 Available 24 hours everyday`",
sweetjesus : "http://i0.kym-cdn.com/entries/icons/medium/000/005/742/sweetjesusface.jpg",
terry : "https://www.youtube.com/watch?v=RAzuy7UxlE8",
thinking : "https://i.pinimg.com/236x/b8/98/25/b89825b94ed1c61cede5658dc42ef6bb--rage-faces-troll-face.jpg",
tobey : "http://i0.kym-cdn.com/entries/icons/facebook/000/005/068/Emo_Peter_Parker.jpg",
triggered : "https://media.giphy.com/media/vk7VesvyZEwuI/giphy.gif",
triggered2 : "llFace.jpg",
vendingmachine : "https://i.makeagif.com/media/12-03-2015/NdsP8H.gif",
wednesday : "https://www.youtube.com/watch?v=du-TY1GUFGk",
windowlicker : "https://media.discordapp.net/attachments/389857801985327114/391717108519665674/R-3666-1473487793-7004.png?width=331&height=331",
yee : "http://i0.kym-cdn.com/entries/icons/original/000/016/362/tumblr_nb7jgq9kcR1slfxluo1_1280.jpg",
yeehee : "https://www.shitpostbot.com/resize/585/400?img=%2Fimg%2Fsourceimages%2Ftroll-computer-fire-57b2c326377fb.png",
yuno : "https://i.pinimg.com/736x/4b/52/28/4b5228f476a13f023e30147a1eb70f4a--funny-internet-memes-funny-memes.jpg",

// Grunge Palace
balsam : "https://media.discordapp.net/attachments/389857801985327114/391713965371031554/apesxsteiwn.jpg?width=331&height=331",
cookingman : "https://media.discordapp.net/attachments/389539066254852099/395701364560363540/image.jpg?width=327&height=331",
fingerbib : "https://media.discordapp.net/attachments/389857801985327114/391714429080961024/R-30849-1336914949-4168.png?width=335&height=330",
heypaul : "https://media.discordapp.net/attachments/389857801985327114/391715802375520257/PatBateman.jpg?width=293&height=331",

// Conspiracy Congress
administrates : "https://media.discordapp.net/attachments/410547986691522570/424732911921659905/unknown.png",
notadministrator : "https://pics.me.me/youre-not-the-administrator-change-my-mind-31454163.png",
nottheadministrator : "https://pics.me.me/youre-not-the-administrator-change-my-mind-31454163.png",
nottheadministrator : "https://pics.me.me/youre-not-the-administrator-change-my-mind-31454163.png",
sixam : "https://pics.me.me/6am-is-great-time-to-scream-change-my-mind-31519521.png",
swan : "https://media.discordapp.net/attachments/410547986691522570/424736313414254616/VPDY9mp.gif",
wrong : "https://pics.me.me/wrong-change-my-mind-wrong-31589084.png",
yourenotadministrator : "https://pics.me.me/youre-not-the-administrator-change-my-mind-31454163.png",
yourenottheadministrator : "https://pics.me.me/youre-not-the-administrator-change-my-mind-31454163.png"	
}

for (let meme in memes) {
    if (command === meme){
    	message.channel.send(memes[meme]);
    }
}
	
	
var texas = [
	"http://i0.kym-cdn.com/entries/icons/facebook/000/008/040/latest.jpg", 
	"http://www.austin360.com/rf/image_large/Pub/p8/Austin360/2017/09/22/Images/Texas-spongebob-squarepants-14640304-440-307.jpg", 
	"http://s2.storage.akamai.coub.com/get/b87/p/coub/simple/cw_timeline_pic/8ed4dfe288e/01b6a245f600448a5c61c/med_1490980757_image.jpg",
	"`Wot n' self mutilation.`", 
	"`Wot n' self mutilation.`", 
	"http://vignette2.wikia.nocookie.net/legendsofthemultiuniverse/images/7/7c/08-King-of-Hill-Hank_l.jpg/revision/latest?cb=20140902033620", 
	"`Everything is bigger in Texas`.", 
	"`Wot n' self mutilation`.", 
	"`Wot n' retardation`.", 
	"`Wot n' ternation`.", 
	"`Wot n' tarnation`."];
	
	if(input.includes("texas")) {
		message.channel.send(texas[Math.floor(Math.random() * texas.length)]);}
	






///////////////////////////////////////////////////////////////////////////////////////////////////////
					//Immages
///////////////////////////////////////////////////////////////////////////////////////////////////////

let images = {
	
	joke : [
	"`A physicist, a mathematician and a computer programmer discuss what is better: a wife or a girlfriend. The physicist: A girlfriend. You still have freedom to experiment. The mathematician: A wife. You have security. The computer programmer: Both. When I'm not with my wife, she thinks I'm with my girlfriend. With my girlfriend it's vice versa. And I can be with my computer without anyone disturbing me...`", 
	"`Programming is like sex. One little mishap and you have to support it for the rest of your life.`", 
	"`What's the difference between Windows and a virus? A virus rarely fails.`", 
	"`What's the difference between Linux and a virus? With a virus, you don't have to do anything for it to execute a small chunk of code.`", 
	"`What's the difference between Paul Walker and my computer? I care when my computer crashes.`", 
	"`I remember when I broke up with the internet. I just didn't feel the connection.`", 
	"`Will executing all of my programs make me a king?`", 
	"`If I freeze, please do not put me in the microwave.`", 
	"`Sometimes I feel like I have a loose bracket.`", 
	"`Computers are like elephants. An elephant never forgets. However, a mortal being such as an elephant can outlive modern day computers.`", 
	"`If I leave Windows open, I get cold.`", "`Do you want to grab a byte to eat at lunch tomorrow?`", 
	"`Ever wonder how I was made?` http://www.indya101.com/funnypictures/People/2012/10/15/Funny_Boy_Sleeping_in_Bed_with_Computer_GF_czlkr_Indya101(dot)com.jpg ", 
	"`Programmers do not need girlfriends. They can program their own AI.`", 
	"`Is this real life? Or am I just programmed?`"
	],
	
	christmas : [
	"https://i.pinimg.com/736x/4b/2a/bf/4b2abf0093af7af289484d3bab9d3773--funny-christmas-memes-christmas-quotes.jpg", 
	"https://mymerrychristmas.com/x/wp-content/uploads/2016/09/brace-yourselves-christmas-memes-are-coming.jpg", 
	"https://i.pinimg.com/originals/f2/ab/04/f2ab04701bd317cb2370546a9b5f5767.jpg", 
	"http://www.funnybeing.com/wp-content/uploads/2016/12/Only-Gives-Expensive-Presents.jpg", 
	"https://mormonhub.com/wp-content/uploads/2016/12/Hipster-Santa.jpg", 
	"http://funnyexpo.com/wp-content/uploads/2017/09/FUNNY-CHRISTMAS-MEME-26.jpg", 
	"https://www.christmastreeworld.co.uk/wp/wp-content/uploads/2015/12/christmas-meme-016-christmas-harder-than-you.jpg"
	],
	
	computertroll : [
	"https://img.memecdn.com/even-my-computer-trolls-me_o_654290.jpg", 
	"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6CPSdcwo9iGpvuHJipdxiXqCwcMm5NQsWGUxF6JzlaA4ihpJ0eA",
	"https://media.giphy.com/media/Cl3n0ZWQG4V8I/giphy.gif", 
	"https://konlinejobs.com/wp-content/uploads/2017/02/rage-face-computer.jpg", 
	"https://media.giphy.com/media/MqqZykfPyrKeY/giphy.gif", 
	"https://umad.com/img/2015/9/troll-computer-gif-3221-3390-hd-wallpapers.jpg", 
	"https://s20.postimg.org/tqnvfce19/troll.gif", 
	"http://i0.kym-cdn.com/photos/images/original/000/115/696/1289787485759.png", 
	"http://i0.kym-cdn.com/photos/images/original/000/502/956/a4c.png", 
	"http://78.media.tumblr.com/tumblr_lfvpiuSIQl1qafrh6.jpg", 
	"http://i0.kym-cdn.com/photos/images/newsfeed/000/170/115/tumblr_litvwegaLF1qfdpzz.jpg", 
	"http://4.bp.blogspot.com/-UcSOLiWGH0s/UsecI-8Ub_I/AAAAAAAAAxw/fddZJHdKyWc/s1600/throw+PC.jpg", 
	"http://images6.fanpop.com/image/articles/243000/fanfiction-net_243459_top.png?cache=1422590741", 
	"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7AG4vYVHMbeqJ7U1u_mg_0y9FIe3zwWWcCltYxalqMKDBaz8A8w", 
	"http://wwwwwwwww.at/trolls/i/src/13276392538.png", 
	"http://l7.alamy.com/zooms/846bacabf9084f248adcbd2a6c7c456b/man-as-troll-hiding-under-bridge-online-trolling-f5em04.jpg",
	"https://memegenerator.net/img/instances/73587216/my-friends-hate-me-and-so-does-my-computer.jpg", 
	"http://i0.kym-cdn.com/photos/images/original/000/163/623/1313613920045.png", 
	"http://i0.kym-cdn.com/photos/images/newsfeed/000/228/108/1325650008001.jpg", 
	"http://i0.kym-cdn.com/photos/images/newsfeed/000/210/953/130719130758.jpg", 
	"http://i0.kym-cdn.com/photos/images/newsfeed/000/138/163/1308700783989.png", 
	"http://i0.kym-cdn.com/photos/images/newsfeed/000/262/384/add.jpg",  
	"http://mp1st.com/wp-content/uploads/2013/06/hd_computer_guy_meme_by_zapgod16-d4t2jh3-e1371833271958.png", 
	"https://www.shitpostbot.com/resize/585/400?img=%2Fimg%2Fsourceimages%2Ftroll-computer-fire-57b2c326377fb.png",   
	"https://img.memecdn.com/computer-troll_o_737590.gif", 
	"http://i0.kym-cdn.com/photos/images/original/001/030/017/901.png"
	],
	
	computeryoga : [
	"https://media.discordapp.net/attachments/389522720087343125/393819905721368606/700-00478866en_Masterfile.png?width=270&height=405", 
	"http://becomingengaged.com/wp-content/uploads/2013/03/business-man-hiding-under-desk-pop_11889.jpg", 
	"http://a.abcnews.go.com/images/Business/ABC_THE_COMPUTER_PROBLEM_mar_141027.gif", 
	"http://www.indya101.com/funnypictures/People/2012/10/15/Funny_Boy_Sleeping_in_Bed_with_Computer_GF_czlkr_Indya101(dot)com.jpg", 
	"https://3rqigbyqdu93oemcc2px0vss-wpengine.netdna-ssl.com/wp-content/uploads/2011/01/computer-hug.jpg", 
	"http://www.castittalent.com/blog/wp-content/uploads/2015/09/Person-Excited-at-Computer.jpg", 
	"https://thumb7.shutterstock.com/display_pic_with_logo/78164/78164,1300417265,1/stock-photo-a-business-woman-bending-backwards-over-laptop-73380349.jpg", 
	"http://www.synapsesem.com/wp-content/uploads/2017/02/SEO-mistakes.jpg", 
	"https://thumb7.shutterstock.com/display_pic_with_logo/52013/52013,1177616206,1/stock-photo-businessman-bending-over-backwards-and-using-laptop-3173777.jpg", 
	"https://us.123rf.com/450wm/bowie15/bowie151211/bowie15121100052/16621179-young-businessman-using-a-laptop-computer-upside-down.jpg?ver=6", 
	"https://cdn.businessnews.com.au/Flexible-Work.jpg", 
	"http://janetfouts.com/wp-content/uploads/2012/10/Fotolia_41294281_XS.jpg" 
	],

	fish : [
	"https://lovefishtank.com/wp-content/uploads/2017/01/tiger-oscar-cichlid.jpg",
	"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZNv1ioiUxAI5aJRU43kddd3ief849sqMa-Y0tNObJ5dsGZ_fe",
	"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuoH9jkz56PjaMY-DC5iowSVrM3HO-3pdK1jfHRKgqnPSWk5Hh0w",
	"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkzGQLyHSKWAIO4CX6BrNAiH4EoJ92JU5mAPtg2Xtt0do-qVBXfw",
	"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmZgtOSbvj-P77O0_nNR_21-4NyS2soZoGhkm9MxuKl6S6jHc0",
	"http://www.newlink.cl/virtualfish/imagenes/Peces/Labidochromis_caeruleusWW.jpg",
	"http://4.bp.blogspot.com/_0Js4q23LxSc/Spj1gyMa_rI/AAAAAAAAA7Q/MQJbkd-yXqo/s320/Jack+Dempsey+Cichlids.png",
	"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPrjs7FZ0-lLHmUKHcKs3pwyMtw7aQF77lHoJDosrVD2i-3ylC",
	"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpsiM6i13mWb0oh22si-VXn6npnIKrFS-AwCz157RTP1tGUGek",
	"http://i623.photobucket.com/albums/tt317/riceburner63/Fish/PC187561ax.jpg",
	"http://www.aquaticstoyourdoor.co.uk/wp-content/uploads/2017/06/black-knife.jpg",
	"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQt4too8zjN2ayYXqt1fq4Mm4TfkMNrmJFyqPR0fVZm_Z6HoPyd",
	"https://cdn.frooition.com/110156/images/black+ghost+knife+fish.jpg",
	"http://www.tropco.co.uk/images/knife.jpg",
	"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRS2EBBF-RpK4qlNfU8BKA1IDz4FGBV0Ag5zVltdiJKEyfBUCo",
	"https://i.pinimg.com/236x/51/4a/e1/514ae1dcf11d2825090e8fdbbb17a6a8--siamese-fighting-fish-beta-fish.jpg",
	"https://i.pinimg.com/236x/05/31/69/053169aad7003e71668aaf49c08aa655--siamese-fighting-fish-pretty-fish.jpg",
	"https://i.pinimg.com/236x/b0/09/ef/b009efca38193eeeb96633ad9b57514f--siamese-fighting-fish-beta-fish.jpg",
	"https://i.pinimg.com/236x/d8/d0/9b/d8d09bd7ac4071168de42e827d64ea99--fish-betta-betta-aquarium.jpg",
	"https://i.pinimg.com/236x/56/6f/7d/566f7dc5e46c75c66c22bd8ccfd583a6--fish-fin-siamese-fighting-fish.jpg",
	"https://i.pinimg.com/236x/41/24/f0/4124f086e2f348b80ef53489b705a142--colorful-fish-tropical-fish.jpg",
	"https://i.pinimg.com/236x/da/d3/ae/dad3ae52f566f5143ee8a3e617529d71--elephant-ears-blue-butterfly.jpg",
	"https://i.pinimg.com/236x/03/46/a3/0346a304baa6592e5e617fac32e2830d--gold-fish-aquarium-beta-aquarium-ideas.jpg",
	"https://i.pinimg.com/236x/7a/f3/04/7af3044b51b1f5a9bc1150997a9f9535--pretty-fish-beautiful-fish.jpg",
	"https://i.pinimg.com/236x/e5/cf/3e/e5cf3e9b7629d17eaa392b9de4df27e1--fish-aquariums-aquarium-fish.jpg",
	"https://i.pinimg.com/236x/4c/b3/44/4cb3449c56604f192ae28189406ce0ae--betta-fish-tattoo-patriots.jpg",
	"https://i.pinimg.com/236x/fa/45/fa/fa45fac66e27ba1805c7e5b62f3983c8--drawing-animals-siamese-fighting-fish.jpg",
	"https://i.pinimg.com/236x/4d/1f/02/4d1f0224dd2184b020b3ca937c95ebfb--beta-fish-tank-betta-tank.jpg",
	"https://i.pinimg.com/236x/0a/03/f7/0a03f7f723ab75b1238637d7743620ef.jpg",
	"https://i.pinimg.com/236x/c5/c3/dd/c5c3dd64763e5cabb627f15f7e6f6de2--fish-fish-beta-fish.jpg",
	"https://i.pinimg.com/236x/ce/22/85/ce2285470a9f3877d67e96f6245a8728--beta-fish-fish-fish.jpg",
	"https://i.pinimg.com/236x/5b/e1/c4/5be1c4da2973c68efde2f28f098d508b--beta-fish-tank-ideas-betta-aquarium.jpg",
	"https://i.pinimg.com/236x/c2/56/51/c25651920b9bd57135aa0375d8309855--japanese-goldfish-pet-fish.jpg",
	"https://i.pinimg.com/236x/66/34/e1/6634e14c2aac8fd3766dc63670494f0c--betta-fish-tank-beta-fish.jpg",
	"https://i.pinimg.com/236x/5c/20/15/5c2015e863c4ec9cf9f6096a5869a52f--betta-aquarium-pez-betta.jpg",
	"https://i.pinimg.com/236x/92/41/69/924169eef0b0aeb08cefa61218d7cc3f--betta-fish-tank-pez-betta.jpg",
	"https://i.pinimg.com/236x/3f/6f/f9/3f6ff9d33a72ed31055659130803fc43--underwater-fish-siamese-fighting-fish.jpg",
	"https://i.pinimg.com/236x/44/03/3c/44033c9f194bfb439321c09ecdb871c2--aquarium-betta-mini-aquarium.jpg",
	"https://i.pinimg.com/236x/1c/cb/4b/1ccb4be49add6d58e04c860a1f568f79--fish-fish-beta-fish.jpg",
	"https://i.pinimg.com/236x/ed/48/57/ed48574cc0166a3932222cb7d645c1c5--colorful-fish-color-combos.jpg",
	"https://i.pinimg.com/236x/84/5b/51/845b5119c7c8e96b4457aa99ba19a284--betta-fish-tank-beta-fish.jpg",
	"https://i.pinimg.com/236x/8a/60/6a/8a606a01d850b9cd7a753fbf3270b758--tropical-fish-dexter.jpg",
	"https://i.pinimg.com/236x/07/35/3c/07353c812d4b496819e29ceb8183a235--cupang-fish-beta-fish.jpg",
	"https://i.pinimg.com/236x/65/7c/14/657c14fd6f861341d2519299b92dd910--note-deer.jpg",
	"https://i.pinimg.com/236x/ad/95/18/ad95182dea6c289376dc5136da46b254--beta-fish-tank-betta-tank.jpg",
	"https://i.pinimg.com/236x/c2/9b/27/c29b276be77c698017666a96f336e531--kings-crown-white-dragon.jpg",
	"https://i.pinimg.com/236x/3f/25/f9/3f25f99288535734d0a11252e4465b7b--pink-blue-siamese-fighting-fish.jpg",
	"https://i.pinimg.com/236x/46/ca/57/46ca573712b65bb5b2aa279613c75b4c--siamese-fish-beta-fish.jpg",
	"https://i.pinimg.com/236x/a3/d9/e1/a3d9e1ab5b35481d2b6ad796fc460827--betta-fish-tank-fish-tanks.jpg",
	"https://i.pinimg.com/236x/17/54/fd/1754fd4d530d7a35d0121de630bb0116--violets-half-moons.jpg",
	"https://i.pinimg.com/236x/af/51/f1/af51f1303ca143ecf641caa2a48ddd27.jpg",
	"https://i.pinimg.com/236x/30/d5/45/30d545b333151ecec49084bc5535b6db--red-fish-fish-fish.jpg",
	"https://i.pinimg.com/236x/dd/53/86/dd538655d02876ea6e9c73db8777ebca--black-betta-fish.jpg",
	"https://i.pinimg.com/236x/0d/19/5e/0d195ef6569b496146eb3884f55c92f2--siamese-fighting-fish-photo-s.jpg",
	"https://i.pinimg.com/236x/69/39/58/6939589a5f9845027bf5e09fc4a90bef--beautiful-fish-most-beautiful.jpg",
	"https://i.pinimg.com/236x/ee/92/10/ee9210ab34fc4fc1226941114e4d6301--purple-sunset-purple-fish.jpg",
	"https://i.pinimg.com/236x/af/51/f1/af51f1303ca143ecf641caa2a48ddd27.jpg",
	"https://i.pinimg.com/236x/cc/61/0b/cc610bf68cd18bf463310674114b32b9--photo-editor-online-siamese-fighting-fish.jpg",
	"https://i.pinimg.com/236x/7c/47/0f/7c470f3484f24c40c8ca14f4d253761d--red-black-betta-tank.jpg",
	"https://i.pinimg.com/236x/8c/cb/56/8ccb56018ef271d6cb5f1c42c6ac0fc1--betta-fish-tank-beta-fish.jpg",
	"https://i.pinimg.com/236x/1a/f6/b9/1af6b9f29dc7bbdd63ddb18c1e1504fe--blue-yellow-blue-and.jpg",
	"https://i.pinimg.com/236x/d9/ca/8d/d9ca8d553c03ec8d19c093ed465e2ec9--betta-fish-tank-beta-fish.jpg",
	"https://i.pinimg.com/236x/aa/4e/06/aa4e06bc0baa8c2a58d81d9ab4707016--navy-blue-blue-yellow.jpg",
	"https://i.pinimg.com/236x/c2/13/da/c213dabd35e9914e17c1132bbe20e3da--siamese-fighting-fish-siamese-fish.jpg",
	"https://i.pinimg.com/236x/46/bf/78/46bf7826178be7a38304ec06268fdbe4--siamese-fighting-fish-beta-fish.jpg",
	"https://i.pinimg.com/236x/30/d5/45/30d545b333151ecec49084bc5535b6db--red-fish-fish-fish.jpg",
	"https://i.pinimg.com/236x/dd/53/86/dd538655d02876ea6e9c73db8777ebca--black-betta-fish.jpg",
	"https://i.pinimg.com/236x/93/04/60/9304601b56276654a6ac7623e8ddc532--pretty-fish-beautiful-fish.jpg",
	"https://i.pinimg.com/236x/08/72/ba/0872ba0e3f9a4fbf1c14193aa30ed8c0--betta-aquarium-fish-aquariums.jpg",
	"https://i.pinimg.com/236x/92/c7/57/92c7575ea262e6cf5681bbe81b820312--beta-fish-centerpiece-beach-centerpieces.jpg",
	"https://i.pinimg.com/236x/55/bc/40/55bc404b7790236482a639333b976911--hydroponic-plants-aquaponics.jpg",
	"https://i.pinimg.com/236x/2a/46/72/2a4672b213d7b15034536e8b7bdf4224--plant-crafts-betta-fish.jpg",
	"http://www.tropco.co.uk/images/albino%20oscar.jpg",
	"http://meethepet.com/wp-content/uploads/2015/04/4_1-1.jpg",
	"http://www.tropical-fish-keeping.com/wp-content/uploads/2015/05/Electric-Yellow-Cichlid-Labidochromis-caeruleus..jpg",
	"http://cdn3.bigcommerce.com/s-qqoyf9q9/products/1334/images/2895/LongfinLab2cr__94293.1499452316.500.659.jpg?c=2",
	"http://meethepet.com/wp-content/uploads/2016/10/fgyr.jpg",
	"http://meethepet.com/wp-content/uploads/2016/10/trwv.jpg",
	"http://meethepet.com/wp-content/uploads/2016/10/ewqa.jpg",
	"http://animal-world.com/encyclo/fresh/cichlid/images/JackDempsey(Blue)WFCiam_Cn0754.jpg",
	"https://i.ytimg.com/vi/SxEFSOwG8J0/maxresdefault.jpg",
	"http://www.tropco.co.uk/images/knife.jpg",
	"http://www.aquatic-village.com/wp-content/uploads/2014/03/black-ghost-sternarchus-albifrons.jpg",
	"https://i.ebayimg.com/00/s/NDQ2WDY3MA==/z/02kAAOSwsYpaR4tf/$_86.JPG",
	"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoTaqkmHiuHy8jYX0msYZNTni1vKnU3L0O-6-sWH61DK0F2afpeA",
	],

	goat : [
	"https://i.pinimg.com/564x/10/f6/17/10f61732583164fd5140a6dce4b9c198.jpg",
	"https://i.pinimg.com/236x/0f/7a/5c/0f7a5c385029c57ea460aa6be0f2b678.jpg",
	"https://i.pinimg.com/564x/7d/69/88/7d698821ba6474cf73694f6f80d55dfa.jpg",
	"https://i.pinimg.com/564x/b2/be/2a/b2be2a04c93118a93a71bbb38238488b.jpg",
	"https://i.pinimg.com/564x/84/d7/c0/84d7c03d3d6cd09aa73d547901718545.jpg",
	"https://i.pinimg.com/564x/55/2d/5c/552d5cb24f97a3644159c82599a21a65.jpg",
	"https://i.pinimg.com/564x/f1/b2/f9/f1b2f97525c88b7bf0d64fccf3914a01.jpg",
	"https://i.pinimg.com/236x/fa/9a/2a/fa9a2a1e8da0615b4f9ad9484eb4a566.jpg",
	"https://i.pinimg.com/564x/2f/73/44/2f734470f2f78d814dcc7df8c0448982.jpg",
	"https://i.pinimg.com/564x/67/f2/26/67f226a192a7ff6c470b3c85086467ab.jpg",
	"https://i.pinimg.com/236x/94/a9/15/94a9159b0bc475c0f271c1b7cc6a28e0.jpg",
	"https://i.pinimg.com/564x/8e/8a/cb/8e8acba87d435dbbe6f6e9f5a7577751.jpg",
	"https://i.pinimg.com/564x/fe/c9/46/fec9464c153c0849f3798d60ad2b3769.jpg",
	"https://i.pinimg.com/564x/6a/4e/0c/6a4e0c9b73ca7499beb7225c95c66437.jpg",
	"https://i.pinimg.com/564x/8d/32/66/8d3266f44b3f37e9dd564d50330cdef1.jpg",
	"https://i.pinimg.com/564x/fa/9a/2a/fa9a2a1e8da0615b4f9ad9484eb4a566.jpg",
	"https://i.pinimg.com/564x/2e/a6/a2/2ea6a26a27a80be9588986baee72c868.jpg",
	"https://i.pinimg.com/564x/49/56/ee/4956eeee630754ca2879ad027c4daaf8.jpg",
	"https://i.pinimg.com/564x/51/ea/75/51ea758c5517c98ff65186bd416be078.jpg",
	"https://i.pinimg.com/564x/ed/c5/a9/edc5a94513d0af363201959b41756517.jpg",
	"https://i.pinimg.com/564x/41/72/71/417271b95c8c45b264d3602ef63e145e.jpg",
	"https://i.pinimg.com/564x/f2/eb/33/f2eb330485aa5a99a7f292424ca885ed.jpg",
	"https://i.pinimg.com/564x/c8/b4/06/c8b406ad3841d92d2bba9e82a54ce308.jpg",
	"https://i.pinimg.com/564x/b4/7d/05/b47d051f028b1c129f8078d563a9c4d7.jpg",
	"https://i.pinimg.com/564x/99/09/38/990938b548c1bb6343d8bc00e825776a.jpg",
	"https://i.pinimg.com/564x/41/72/71/417271b95c8c45b264d3602ef63e145e.jpg",
	"https://i.pinimg.com/564x/d7/5a/b3/d75ab335d9f42a34d022cecc9ecdf8f0.jpg",
	"https://i.pinimg.com/564x/fe/c9/46/fec9464c153c0849f3798d60ad2b3769.jpg",
	"https://i.pinimg.com/564x/a9/06/9d/a9069df2ccf4484cef353db81b697952.jpg",
	"https://i.pinimg.com/564x/63/01/8d/63018d0e4bdaf4ab12cb432c55edcd58.jpg"
	],

	bird : [
	"https://i.pinimg.com/564x/14/a0/99/14a0998002d9a952af0f2df712367578.jpg",
	"https://i.pinimg.com/564x/15/c3/68/15c36807cc052c01728611d2f1238638.jpg",
	"https://i.pinimg.com/564x/07/56/27/0756274004df42f4ca4f0a2fbe536ed9.jpg",
	"https://i.pinimg.com/564x/d6/2a/9e/d62a9e2af6ef3379ba1c7df4e54c6644.jpg",
	"https://i.pinimg.com/564x/61/0d/4a/610d4a4baa66ea41a02b37eb4f7f48cf.jpg",
	"https://i.pinimg.com/564x/6d/90/bd/6d90bd93d015b2a7bc031bac475f6703.jpg",
	"https://i.pinimg.com/564x/dd/59/59/dd5959596f76c52c264b2a4b6cc88a2e.jpg",
	"https://i.pinimg.com/564x/b7/9c/8a/b79c8afd7a98af2b38440d696820ee50.jpg",
	"https://i.pinimg.com/564x/b0/92/53/b09253ef079797b3bf8833123041c1d1.jpg",
	"https://i.pinimg.com/236x/2a/fa/cb/2afacb9078b0128dc20e72cffe731a18.jpg",
	"https://i.pinimg.com/564x/67/06/a5/6706a5e0f0ebeb01d50168fc72d5013c.jpg",
	"https://i.pinimg.com/564x/e1/cc/aa/e1ccaafbd8cd581e65d328dc84f004f0.jpg",
	"https://i.pinimg.com/564x/cf/59/35/cf5935a1de4087fa21bce8eec5c6bd96.jpg",
	"https://i.pinimg.com/564x/19/ae/bf/19aebf509955da001c9f42df0bd36067.jpg",
	"https://i.pinimg.com/564x/f2/b2/39/f2b23964cb1548d5d87d46e9cf299a3c.jpg",
	"https://i.pinimg.com/564x/a9/a1/c8/a9a1c8b17ddf1b701800b99d6bdf99dc.jpg",
	"https://i.pinimg.com/564x/45/52/09/455209a1403406288a8a56597c608093.jpg",
	"https://i.pinimg.com/564x/17/75/f1/1775f1bca1181e75f311b1b90006d605.jpg",
	"https://i.pinimg.com/564x/6e/9d/43/6e9d43284b402dd87c915dc220db3de0.jpg",
	"https://i.pinimg.com/564x/d6/de/01/d6de01c51cfbe0bb7515c1496cc57ae5.jpg",
	"https://i.pinimg.com/564x/ec/f6/24/ecf624d219ab08e0666e88f526009e20.jpg",
	"https://i.pinimg.com/236x/03/9d/e9/039de9e3ee06ca676376cc36841f765c.jpg",
	"https://i.pinimg.com/236x/b9/7d/dd/b97dddeb9f504b86de8357c5d0cf29ad.jpg",
	"https://i.pinimg.com/564x/0a/47/fa/0a47fa16a331948f61c5d79bb0aa75d8.jpg",
	"https://i.pinimg.com/564x/7b/30/1a/7b301a39795c633cdc1d7097647545d5.jpg",
	"https://i.pinimg.com/236x/41/85/f9/4185f91f9cc25d5cba74556d35b58f02.jpg",
	"https://i.pinimg.com/236x/54/e4/ff/54e4ffdfb9f89d03f949bad76a7f37ba.jpg",
	"https://i.pinimg.com/236x/b7/b0/b0/b7b0b040a10b2d47ef64509b9538a118.jpg",
	"https://i.pinimg.com/236x/d7/8b/29/d78b29a4950088c9344d9540f492ee46.jpg",
	"https://i.pinimg.com/236x/94/f0/c2/94f0c266802136507619c50fb6095125.jpg",
	"https://i.pinimg.com/564x/31/9f/03/319f03061a2998bebcbdf339ddf57a83.jpg",
	"https://i.pinimg.com/564x/7e/53/73/7e537353c8208204fd2200f4daa9149d.jpg",
	"https://i.pinimg.com/564x/94/d7/a1/94d7a1237d4b841fa07bea4dd8b73ab2.jpg",
	"https://i.pinimg.com/564x/05/22/de/0522de865a6b2d39e6aa9dc3dbd5d565.jpg",
	"https://i.pinimg.com/564x/2e/c8/cd/2ec8cdd9ce9dc4033d655c409085dd91.jpg",
	"https://i.pinimg.com/564x/5a/cd/a3/5acda329618f85808cb8c791903cb9c3.jpg",
	"https://i.pinimg.com/564x/76/aa/2a/76aa2aa1baa1ced27c39421b00ebdcfa.jpg",
	"https://i.pinimg.com/564x/db/c2/a0/dbc2a00a45d6f6e9617fb07cdec9a795.jpg",
	"https://i.pinimg.com/564x/2f/76/1d/2f761de52ee79832fb8a48de2274e732.jpg",
	"https://i.pinimg.com/564x/2f/3f/17/2f3f17c538f1e38d16a9e4dde6472b87.jpg",
	"https://i.pinimg.com/564x/c2/4f/f7/c24ff7222f567a392f1b6554671be2bc.jpg",
	"https://i.pinimg.com/564x/81/c8/e3/81c8e31f5bc3b3055cf760829e7098f2.jpg",
	"https://i.pinimg.com/564x/7e/97/5f/7e975fda585462426455aa29f2443107.jpg",
	"https://i.pinimg.com/564x/97/32/39/97323935e63a23ee3681d18130ab4989.jpg",
	"https://i.pinimg.com/564x/46/10/37/461037f56253bf1d24be917c6bf6734a.jpg",
	"https://i.pinimg.com/236x/74/77/83/747783a95d5997ceacdb4cf14e0f238f.jpg",
	"https://i.pinimg.com/564x/84/b5/55/84b555e21c9cdd868e7eb9edf8e0402b.jpg",
	"https://i.pinimg.com/236x/d5/0f/77/d50f7786c895a1e324343e28fab7a56a.jpg",
	"https://i.pinimg.com/236x/66/5f/e6/665fe699cd35b101b09c19a8b0843312.jpg",
	"https://i.pinimg.com/564x/f8/c6/b4/f8c6b4dcefa016e5da72d4395e4722bd.jpg",
	"https://i.pinimg.com/236x/a3/1d/cc/a31dccbf1cd554239f6acee5d60d0a03.jpg",
	"https://i.pinimg.com/236x/ed/5f/ed/ed5fed015730fe94209343a7f2b7a0fc.jpg",
	"https://i.pinimg.com/564x/1b/95/c2/1b95c276fef99ea8e53a763666dab1c0.jpg",
	"https://i.pinimg.com/564x/7f/6c/2a/7f6c2a3c5180dde720c31dfea3eced6e.jpg",
	"https://i.pinimg.com/564x/fc/b7/04/fcb704110772940ea09edaef7186007a.jpg",
	"https://i.pinimg.com/564x/0f/bd/04/0fbd0496353dbf2b1e331fe92abbcc09.jpg",
	"https://i.pinimg.com/236x/98/ad/dd/98addd3b805cfc82132aef3ad41651ca.jpg",
	"https://i.pinimg.com/564x/3b/e4/cf/3be4cfdff25285dffa2bd9de5a0b9e3b.jpg",
	"https://i.pinimg.com/564x/2b/de/1f/2bde1f5fa2024e36a38d47fd5eacfcc8.jpg",
	"https://i.pinimg.com/564x/de/09/80/de098008708d0a0c5c1a6eba721ed868.jpg",
	"https://i.pinimg.com/564x/10/c6/08/10c6084b803b7c25cbe81ddfc281912a.jpg",
	"https://i.pinimg.com/564x/84/5c/29/845c29dbf2f47ff505a20cc7ef76e7ba.jpg",
	"https://i.pinimg.com/564x/27/bc/35/27bc350c910415886f9dd407ba79ea74.jpg",
	"https://i.pinimg.com/564x/b2/ac/29/b2ac2967c1b81c125812d3027a777a61.jpg",
	"https://i.pinimg.com/564x/d2/59/83/d259830387ab544d7e94b59e66cdd19b.jpg",
	"https://i.pinimg.com/564x/0f/51/6b/0f516bda8064ce5d1de771479e189e45.jpg",
	"https://i.pinimg.com/564x/2a/4a/7e/2a4a7e23d070d3bb37725358b817abdd.jpg",
	"https://i.pinimg.com/564x/13/6c/8f/136c8f59ed29b781475484202ca33d25.jpg",
	"https://i.pinimg.com/564x/ed/ee/9a/edee9a5e4d1652b636af5ea2268a1f24.jpg",
	"https://i.pinimg.com/564x/8d/21/59/8d2159d39d6e380f798651823454dc40.jpg"
	],

	bunny : [
	"https://i.pinimg.com/236x/2f/83/cb/2f83cb981551278f275d74ea3f9847c5--a-bunny-bunny-rabbits.jpg",
	"https://i.pinimg.com/236x/bc/1f/f9/bc1ff968c66f01e23a60e8a0301b07c6--cute-easter-bunny-hoppy-easter.jpg",
	"https://i.pinimg.com/236x/18/14/2d/18142df6131bd939ca91b0c901671d3e--netherland-dwarf-bunnies-bunny-dwarf.jpg",
	"https://i.pinimg.com/236x/32/aa/0d/32aa0db7054b1543da06fc26f78eca7a--a-bunny-cute-bunny.jpg",
	"https://i.pinimg.com/236x/2f/83/cb/2f83cb981551278f275d74ea3f9847c5--a-bunny-bunny-rabbits.jpg",
	"https://i.pinimg.com/236x/1f/db/99/1fdb99958feaf18875a8666a75ce1e36--rabbits-cute-bunnies-rabbit.jpg",
	"https://i.pinimg.com/236x/a4/41/a0/a441a032bed4dbf785484b696327ba02--cutest-bunnies-cute-bunny.jpg",
	"https://i.pinimg.com/236x/34/9a/d1/349ad1e0b8c54b295e0847ee45e1e401--bunny-cute-cute-rabbit.jpg",
	"https://i.pinimg.com/236x/19/27/ca/1927ca5c0545af603ad99613b4a4a2f0--bunny-bunny-baby-bunnies.jpg",
	"https://i.pinimg.com/236x/ad/85/2f/ad852fc0843f6bad568645c872d00abc--cutest-bunnies-cute-bunny.jpg",
	"https://i.pinimg.com/236x/0f/0e/bf/0f0ebf52bd7fd4360fb4ed13cadbed3f--cute-baby-bunnies-bunny-bunny.jpg",
	"https://i.pinimg.com/236x/2e/0b/49/2e0b4958970420f0b811ce43ef4c4cf8--chocolate-bunny-chocolate-brown.jpg",
	"https://i.pinimg.com/236x/1d/6a/79/1d6a792e9275884f2addaba92b95fff2--baby-bunnies-bunny-rabbits.jpg",
	"https://i.pinimg.com/236x/39/f2/b4/39f2b4f876dff626822bee5b14b134d6--funny-bunnies-cute-bunny.jpg",
	"https://i.pinimg.com/236x/03/1d/2c/031d2c2a7bc019212dcd3cc66a22de9b--cute-bunny-a-bunny.jpg",
	"https://i.pinimg.com/236x/35/e8/40/35e8407cca3a26188e78b75847b2d883--teddy-bears-fluffy-bunny.jpg",
	"https://i.pinimg.com/236x/c0/b2/3e/c0b23e4af3e5ea8cfba2bcd21f38715e--fat-baby-animals-chubby-animals.jpg",
	"https://i.pinimg.com/236x/ad/de/35/adde355823bdeac2f2cb3e4266ba7954.jpg",
	"https://i.pinimg.com/236x/91/df/c0/91dfc0582867ba5ca91b198eb237b15a--mini-lop-rabbit-pet-rabbit.jpg",
	"https://i.pinimg.com/236x/95/17/24/95172452cd61beb4ece35b5dfef00bba--beautiful-love-baby-bunnies.jpg",
	"https://i.pinimg.com/236x/9d/30/92/9d3092f18d7ba3f608fdf4231b06dc4c--tiny-bunnies-bunnies-cute.jpg",
	"https://i.pinimg.com/236x/95/17/24/95172452cd61beb4ece35b5dfef00bba--beautiful-love-baby-bunnies.jpg",
	"https://i.pinimg.com/236x/b7/1d/8f/b71d8f4d3ea8537b58fe4af2b831e73e--bun-bun-thanks.jpg",
	"https://i.pinimg.com/236x/23/56/bf/2356bfa2ed0758948bb4695afec99299--fluffy-bunny-lop-bunnies.jpg",
	"https://i.pinimg.com/236x/c9/0a/f5/c90af536afe8289bd6f83dc4afbe675c.jpg",
	"https://i.pinimg.com/236x/18/dc/d1/18dcd15a2ace78c8e9ce4907b10a19d3--lop-eared-bunny-lop-eared-rabbits.jpg",
	"https://i.pinimg.com/236x/5e/a0/a6/5ea0a6c9c865b16c15d5e241a45f0179.jpg",
	"https://i.pinimg.com/236x/2a/22/0d/2a220d0e65a435103cf4f26d85685db6--cute-baby-bunnies-bunny-bunny.jpg",
	"https://i.pinimg.com/236x/f3/95/c6/f395c64d4c7e91ec9c2307e78f897863--decorative-paintings-decorative-painting-projects.jpg",
	"https://i.pinimg.com/236x/7c/99/ed/7c99ed4af10074ac7a44d17576b5fd9e--holland-lops-holland-lop-bunnies.jpg",
	"https://i.pinimg.com/236x/a1/5e/0a/a15e0a5307a47005b45c0e76e3d84a43--bunny-bunny-bunny-rabbits.jpg",
	"https://i.pinimg.com/236x/a2/9d/b0/a29db05a6a7cb5d96dbc0ae0e032769d--funny-bunnies-bunny-bunny.jpg",
	"https://i.pinimg.com/236x/76/25/57/7625570edcb0f763853e42d218841cc3.jpg",
	"https://i.pinimg.com/236x/3a/d4/97/3ad497e2edf79735376a5628fa53647e--hunny-bunny-keep-calm-and-love.jpg",
	"https://i.pinimg.com/236x/b7/a5/9c/b7a59ce6a6541c70b5c40e1edb3119de--cutest-bunnies-cute-bunny.jpg",
	"https://i.pinimg.com/236x/95/17/24/95172452cd61beb4ece35b5dfef00bba--beautiful-love-baby-bunnies.jpg",
	"https://i.pinimg.com/236x/2f/3a/b1/2f3ab1f2e6c05697ed96dfcbde7430f2--cute-baby-bunnies-bunny-bunny.jpg",
	"https://i.pinimg.com/236x/19/27/ca/1927ca5c0545af603ad99613b4a4a2f0--bunny-bunny-baby-bunnies.jpg",
	"https://i.pinimg.com/236x/b7/1d/8f/b71d8f4d3ea8537b58fe4af2b831e73e--bun-bun-thanks.jpg",
	"https://i.pinimg.com/236x/a6/e2/2c/a6e22c0c2afb7f48fd3dad86b61d0e90--lop-eared-bunny-house-rabbit.jpg",
	"https://i.pinimg.com/236x/35/24/1f/35241f23725c2675d4c078f591fe0426.jpg",
	"https://i.pinimg.com/236x/2e/11/b1/2e11b14b9ddf26ed24ce5fbfd18dd138.jpg",
	"https://i.pinimg.com/236x/0d/f3/fb/0df3fbe79646bccb7c2f272a2a21ddc0.jpg",
	"https://i.pinimg.com/564x/ed/93/fc/ed93fc1e18612891cd2d5dfe2831db00.jpg",
	"https://i.pinimg.com/236x/6c/89/8b/6c898beaa08b1442a78d19095d789dff.jpg",
	"https://i.pinimg.com/236x/1a/ce/2f/1ace2f409ff9c99a138342d6c6e726ce.jpg",
	"https://i.pinimg.com/564x/50/23/c9/5023c9bed05c29328b893ccc61fec607.jpg",
	"https://i.pinimg.com/236x/59/0a/dc/590adce930503b7ffa88477012c56784.jpg",
	"https://i.pinimg.com/236x/b6/e1/ea/b6e1ead67625200da2ee0c02fa7f623d.jpg",
	"https://i.pinimg.com/236x/82/e5/ee/82e5eed088cb86d4272a433e93f199c5.jpg",
	"https://i.pinimg.com/564x/40/f6/de/40f6debdbc60e076e514dbaab8c40cd7.jpg",
	"https://i.pinimg.com/236x/f0/6c/f5/f06cf5c71b5cc2f795c560d01660a69d.jpg",
	"https://i.pinimg.com/564x/0c/06/6e/0c066ec1dd8e06759d4b722b8ff262ee.jpg",
	"https://i.pinimg.com/564x/97/d6/a6/97d6a6d095aaceb5c42643895ffc8d2b.jpg",
	"https://i.pinimg.com/236x/a6/54/74/a65474fc4dde1392c1c602437ff5167e.jpg",
	"https://i.pinimg.com/564x/1f/71/ab/1f71ab6d24d30eb76a2d2548f1c5ddb9.jpg",
	"https://i.pinimg.com/564x/69/35/20/6935207a6818c9ccd80bb1c6af2021ba.jpg",
	"https://i.pinimg.com/564x/01/e2/09/01e2096e02304142f8353196685e07fa.jpg",
	"https://i.pinimg.com/564x/a7/dc/9e/a7dc9e643d8b032460ff47e1d8f29b90.jpg",
	"https://i.pinimg.com/564x/b1/36/f8/b136f8cd51e45bba17fa4cbcd370e715.jpg",
	"https://i.pinimg.com/564x/40/70/37/4070378ccba391dd3f34fa3067c5d255.jpg",
	"https://i.pinimg.com/564x/00/27/73/002773b568eb31a051e20088ca2251e9.jpg",
	"https://i.pinimg.com/236x/aa/27/8a/aa278a60636ec5fd7e3d4e46c6ea2bb4.jpg",
	"https://i.pinimg.com/564x/94/c5/59/94c5590f1b9165d605f7531c13262957.jpg",
	"https://i.pinimg.com/564x/62/9d/f8/629df8955e2a4bee8116a1b6bbb16739.jpg",
	"https://i.pinimg.com/564x/95/f4/8b/95f48b631c309799c5b5e28f429829f7.jpg",
	"https://i.pinimg.com/564x/e6/cb/c8/e6cbc8275367c91e401e85f9aa65c127.jpg",
	"https://i.pinimg.com/564x/4d/2b/01/4d2b01d59745f875d76727bee5552d80.jpg",
	"https://i.pinimg.com/564x/00/c7/5a/00c75abc965678684e090aaa880c3f07.jpg",
	"https://i.pinimg.com/564x/21/cf/90/21cf9016ae065f937edf4fe86559a1c1.jpg",
	"https://i.pinimg.com/236x/c7/69/c4/c769c4616d6e3de86e72c73cdfcf60d9--cutest-bunnies-funny-bunnies.jpg",
	"https://i.pinimg.com/236x/35/e8/40/35e8407cca3a26188e78b75847b2d883--teddy-bears-fluffy-bunny.jpg",
	"https://i.pinimg.com/236x/74/73/14/747314ba42df666c2026720997e90d28--be-real-cutest-bunnies.jpg",
	"https://i.pinimg.com/236x/0f/0e/bf/0f0ebf52bd7fd4360fb4ed13cadbed3f--cute-baby-bunnies-bunny-bunny.jpg",
	"https://i.pinimg.com/236x/48/9e/06/489e06a1aefcee2da60f848dfaa87e31--black-bunny-white-bunnies.jpg",
	"https://i.pinimg.com/236x/b6/83/9d/b6839df8dc84c73e6f641f8a05cf7347--too-cute-bunny-rabbit.jpg",
	"https://i.pinimg.com/236x/48/9e/06/489e06a1aefcee2da60f848dfaa87e31--black-bunny-white-bunnies.jpg",
	"https://i.pinimg.com/236x/16/b6/64/16b664ce027807c8fe3bca8ecbf20547--baby-bunnies-easter-bunny.jpg",
	"https://i.pinimg.com/236x/12/14/f2/1214f2de137429d6e6b762cfa1da658b--white-bunnies-white-rabbits.jpg",
	"https://i.pinimg.com/236x/1c/4c/5c/1c4c5c6a2451801489f5c29054d8f211--big-eyes-bun-bun.jpg",
	"https://i.pinimg.com/564x/4d/17/5a/4d175a9c77ccadb9d400097b9ce10ac4.jpg",
	"https://i.pinimg.com/564x/7e/5e/17/7e5e17ef8e40404cdca1a3a9a95ebbe6.jpg",
	"https://i.pinimg.com/236x/d8/9c/7f/d89c7fac0cd3606f272e593b5ec8c127.jpg",
	"https://i.pinimg.com/564x/c7/25/46/c72546096c9cd24e8a764f88a7144b21.jpg",
	"https://i.pinimg.com/564x/a5/9b/47/a59b47e122e0a66d5ad14b7fe9c623f2.jpg",
	"https://i.pinimg.com/564x/aa/48/59/aa485976c620ac025df1e61c36d3f347.jpg",
	"https://i.pinimg.com/564x/ee/ea/aa/eeeaaaa33b63d64551e80c522b219ded.jpg",
	"https://i.pinimg.com/564x/ee/5b/3e/ee5b3ebc387009981a094eaa53f3e800.jpg",
	"https://i.pinimg.com/564x/3a/4e/6a/3a4e6af8dcb9f11a73777f6965bed9cb.jpg",
	"https://i.pinimg.com/236x/9b/bb/37/9bbb377b552ec2b73ce5e91f3d1d6d43.jpg",
	"https://i.pinimg.com/236x/af/1b/58/af1b58bb6f749550697eb9e34b612d30.jpg",
	"https://i.pinimg.com/236x/1e/4f/53/1e4f5342797df3ad2267db329e5dbbaf.jpg",
	"https://i.pinimg.com/564x/67/d7/f3/67d7f35b56cbfbf916fd03a133fb5d02.jpg",
	"https://i.pinimg.com/564x/86/2e/9d/862e9d6d12bb0bce0e2257f1452749e6.jpg",
	"https://i.pinimg.com/236x/f3/c9/a6/f3c9a642a740a13fa5bce39768804028.jpg",
	"https://i.pinimg.com/236x/cf/86/6c/cf866cb1610991f43200b1b2394a1378.jpg",
	"https://i.pinimg.com/564x/83/73/48/837348ea28d8c38427a2834665409f9d.jpg",
	"https://i.pinimg.com/236x/41/3a/f1/413af1714fc8c174be7024514b6ebd62.jpg",
	"https://i.pinimg.com/564x/d9/44/d5/d944d5ea209120ee546d96af6cadcce3.jpg",
	"https://i.pinimg.com/564x/6b/74/72/6b7472020499b6a3ce4fbfb40b4ed0f6.jpg",
	"https://i.pinimg.com/564x/9c/27/2f/9c272f53acd71bf7455c8a9e9a0d72d9.jpg",
	"https://i.pinimg.com/564x/1d/51/41/1d51413023e88c4fd354685a44080d75.jpg",
	"https://i.pinimg.com/564x/06/6d/3b/066d3bfdd590767e524cb1853e691f46.jpg",
	"https://i.pinimg.com/564x/43/c0/1a/43c01a6fc2cf1b59a6962182043045e9.jpg",
	"https://i.pinimg.com/564x/b0/a5/5d/b0a55d228fd46f55f5729608d439e715.jpg",
	"https://i.pinimg.com/564x/94/03/8a/94038a7e65d6b8af5c96b566108540f0.jpg",
	"https://i.pinimg.com/236x/3b/82/74/3b82742a9f4ae34f14e20f8090fdef23.jpg",
	"https://i.pinimg.com/236x/49/e0/c5/49e0c56de22c47a704043349b1c91663.jpg",
	"https://i.pinimg.com/564x/83/6b/bf/836bbfd9d81fb3a2e70b19871ba6ebdb.jpg",
	"https://i.pinimg.com/564x/3c/ae/e6/3caee6d3d0824abd37ffb5a6bff768ad.jpg",
	"https://i.pinimg.com/564x/1e/91/41/1e9141792cca707cd31bdea0e66abaa2.jpg",
	"https://i.pinimg.com/564x/d3/ce/09/d3ce09f7af5f870699866d6747c321ac.jpg",
	"https://i.pinimg.com/236x/d6/b4/3c/d6b43cdd714b59075d18cca60a793f0c.jpg",
	"https://i.pinimg.com/564x/a5/0c/dc/a50cdceeb3f89440e4a3c4959c0580a5.jpg",
	"https://i.pinimg.com/564x/d0/1e/8d/d01e8d49d2c96a5731589b677d564868.jpg",
	"https://i.pinimg.com/564x/d0/1e/8d/d01e8d49d2c96a5731589b677d564868.jpg",
	"https://i.pinimg.com/564x/57/83/93/578393e23b47b3c7cd476890b8014583.jpg",
	"https://i.pinimg.com/564x/72/be/8f/72be8fbd12371b8b26924ed3f441f497.jpg",
	"https://i.pinimg.com/564x/54/35/ae/5435ae83197550f59bdb892bd83d1c0c.jpg",
	"https://i.pinimg.com/564x/93/f0/c5/93f0c53b8b0984f566f23c8090260da0.jpg",
	"https://i.pinimg.com/236x/48/9e/06/489e06a1aefcee2da60f848dfaa87e31--black-bunny-white-bunnies.jpg",
	"https://i.pinimg.com/236x/9d/7b/ef/9d7bef3a7b53766825f2b0e4e920d26b--baby-bunnies-bunny-rabbits.jpg",
	"https://i.pinimg.com/236x/82/26/b1/8226b130120d252ffe61a81f93fb63e4--rabbit-ideas-bunny-hutch.jpg",
	"https://i.pinimg.com/236x/17/f2/68/17f268db020554a8c1e81de0713324f4--cute-little-animals-cutest-animals.jpg",
	"https://i.pinimg.com/236x/7a/f0/f5/7af0f5def0980b9282475659cb48c40c--white-bunnies-cute-bunny.jpg",
	"https://i.pinimg.com/236x/18/14/2d/18142df6131bd939ca91b0c901671d3e--netherland-dwarf-bunnies-bunny-dwarf.jpg",
	"https://i.pinimg.com/236x/bf/ef/76/bfef76b46b48efcab1baf007c130cd99--bun-bun-instagram.jpg",
	"https://i.pinimg.com/236x/15/f4/d5/15f4d59ad6041ad3c1bd18ae52b341a0--small-animals-cute-little-animals.jpg",
	"https://i.pinimg.com/236x/39/34/88/39348874dc4bda8165a11c078c497344--tiny-flowers-bunnies-with-flower-crowns.jpg",
	"https://i.pinimg.com/236x/95/17/24/95172452cd61beb4ece35b5dfef00bba--beautiful-love-baby-bunnies.jpg",
	"https://i.pinimg.com/236x/40/f6/de/40f6debdbc60e076e514dbaab8c40cd7--winter-coats-funny-bunnies.jpg",
	"https://i.pinimg.com/236x/34/8b/54/348b54db435522f78d91551a0272a2c6--true-stories-so-true.jpg"
	],

	kitten : [
	"https://static.boredpanda.com/blog/wp-content/uploads/2016/08/cute-kittens-30-57b30ad41bc90__605.jpg",
	"https://thewondrous.com/wp-content/uploads/2015/05/cute-and-funny-kittens.jpg",
	"https://s-media-cache-ak0.pinimg.com/originals/4e/5d/da/4e5dda7ff507b7098b9b6f9d1450d7cb.jpg",
	"https://pbs.twimg.com/profile_images/600708453389225984/FdzSOzFL.jpg",
	"https://pbs.twimg.com/media/Cm1v0z4WcAAwZLI.jpg",
	"http://1.bp.blogspot.com/-RTrOAVJiC4Y/UtOb60EBQYI/AAAAAAAAAlg/su2t2782zyo/s1600/sad-cute-kittens9897185_n.jpg",
	"https://i.ytimg.com/vi/ACa6a-x5egg/maxresdefault.jpg",
	"http://tvoydosug.com/wp-content/uploads/2014/12/very-cute-funny-kitten-wearing-a-hat.jpg",
	"http://funnykittycats.com/wp-content/uploads/2016/07/hqdefault-817x350.jpg",	
	"http://viraldeer.com/wp-content/uploads/2017/04/Newborn-kittens.jpg", 
	"http://www.purrinlot.com/o17.jpg", 
	"http://www.communityconcernforcats.org/wp-content/gallery/test_1/kitten-aj-1.jpg", 
	"http://www.irkincat.com/wp-content/uploads/2017/10/newborn-kittens-for-sale.jpg", 
	"https://bdn-data.s3.amazonaws.com/uploads/2012/08/CITkittens2P081412-600x519.jpg", 
	"http://1.bp.blogspot.com/-LxLwJTXW6AU/UUVlSMONqKI/AAAAAAAAAEY/-S6MTJC2dSk/s1600/7.JPG", 
	"https://t1.ea.ltmcdn.com/en/images/5/2/4/img_how_to_feed_a_newborn_kitten_step_by_step_guide_2425_paso_0_600.jpg", 
	"https://i.ytimg.com/vi/MCgYHJyIRe4/maxresdefault.jpg", 
	"https://www.petful.com/wp-content/uploads/2012/02/newborn-kitten-750x519.jpg", 
	"https://www.petplace.com/wp-content/uploads/2017/08/3303_cats.jpg", 
	"http://files.ctctcdn.com/1e16d75f001/18d6cb57-a0e3-4425-b8ad-fcfb5ea6d53f.jpg", 
	"https://www.petmd.com/sites/default/files/petmd-kitten-facts.jpg", 
	"http://cdn1-www.cattime.com/assets/uploads/gallery/32-impossibly-cute-kittens/cute-kitten-1.jpg", 
	"https://vetstreet-brightspot.s3.amazonaws.com/46/0b/a7074b104022aad2f1366a221b43/cute-kitten-thinkstock-180934048-335sm12913.jpg", 
	"https://imgix.ranker.com/user_node_img/3386/67703891/original/siberian-freestyle-list-photo-u1?w=650&q=50&fm=jpg&fit=crop&crop=faces", 
	"https://media2.s-nbcnews.com/i/newscms/2017_19/1214076/kitten-season-today-170512-tease_cfe938896c4eb2cb4eaa396dbcc4cdcf.jpg", 
	"https://www.arlnow.com/wp-content/uploads/2017/06/Neonatal-kitten-via-Animal-Welfare-League-of-Arlington.jpg", 
	"https://s7d1.scene7.com/is/image/PETCO/new-kitten-guide-090517-cat-featured-355w-200h-d", 
	"https://i.ytimg.com/vi/Ep3jK1bZrB8/maxresdefault.jpg", 
	"https://www.hirerush.com/blog/wp-content/uploads/2016/02/playful-kitten-6683.jpg",
	"https://assets3.thrillist.com/v1/image/2563373/size/tmg-article_tall;jpeg_quality=20.jpg",
	"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTckPqNtWmCJXQ5RwIpkCprf-e8LXhbmuJxePiU-YNcUiBNsk8b8g",
	"https://wallpapersite.com/images/wallpapers/cute-kittens-2560x1440-adorable-hd-5655.jpg",
	"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSktb7-hpr1IR0R2aYwe8eYvqiRBiD91aKZg15vIDgfwTzqqVoK",
	"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjFkL-KaOBgjc8_M7Xwk1ScBL3saYfXm4r_mplJEg2hdv8bAQm",
	"https://petcube.com/blog/content/images/2017/06/kitten-laying-on-the-bed.jpg",
	"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2J3G3qujaML1kk62-CNPVpzYOliDYu7z9wswg6cFAmZm4hCyf",
	"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2J3G3qujaML1kk62-CNPVpzYOliDYu7z9wswg6cFAmZm4hCyf",
	"https://cdn.petcarerx.com/LPPE/images/articlethumbs/Kitten-Behavior-Large.jpg",
	"https://whyevolutionistrue.files.wordpress.com/2016/09/cute-kittens-11-57b30aa95f3c6__605.jpg?w=534&h=450",
	"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXnUz8NaJK_AVopqW5lgmPLH_w74XR4GU3GlXpBGk6JWjtH8Lt",
	"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIaR_hf749WAg35Xs1qCbUUsVosrfDPYGygcfj5CXjT-8sGcnpWA",
	"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzxCo9C4zBIgYki94cYpW0hb3tKzzNDJH8BTVNoqIj-GfQs4aS",
	"https://honesttopaws.com/wp-content/uploads/sites/5/2017/11/04-kitten-and-owl-best-friends.jpg",
	"https://cdn.thinglink.me/api/image/879032707835756544/1240/10/scaletowidth",
	"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT24F0utWOxJUF34oEmZMVTy9KUvg07hj9GjpDPTNqWxGwK36YhEw",
	"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1AN2n3mdUeUiARu1Gu3isDvp8dEtdPIQSi_RGzedmMbMZMpf7UQ",
	"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcVdweojKqPoqQ7jia0eeMQDEe9mTz3u2MzW92JBiCYjq395yMkw",
	"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJlIV_e3KoO6im0PAITmw7KHdXWaj2GO12v6PTVZMZlwS3uFiv",
	"https://i.pinimg.com/236x/ec/a3/2e/eca32ee5c3c2c768704a7198d60b867d--munchkin-kitten-kitty-cats.jpg",
	"https://i.pinimg.com/236x/a5/cf/c6/a5cfc692d4a99d64b4d31719df53ffc1--baby-kittens-adorable-kittens.jpg",
	"https://i.pinimg.com/236x/cf/9f/1d/cf9f1d3b2cc90d3fa86f0a10ff4195f5--siamese-kittens-baby-kittens.jpg",
	"https://i.pinimg.com/236x/b4/6b/07/b46b079df6f47c093f7c123e70776892--fluffy-kittens-cute-kitten-fluffy.jpg",
	"https://i.pinimg.com/236x/e4/b7/7c/e4b77ca06e1d4a401b1a49d7fadd90d9--kittys-kitty-cats.jpg",
	"https://i.pinimg.com/236x/7b/87/9c/7b879cd8d427b1252f285015af991bbf--small-animals-pretty-animals.jpg",
	"https://i.pinimg.com/236x/ba/4f/3a/ba4f3a9b37a31c82a034b47cf0ba1a09--adorable-babies-adorable-kittens.jpg",
	"https://i.pinimg.com/236x/88/50/2b/88502b58b2ca3509be47473044fde8cc--wink-wink-adorable-animals.jpg",
	"https://i.pinimg.com/236x/56/e2/28/56e2282f1d13e9863f00bf7d801b69b1--ruby-red-orange-kittens.jpg",
	"https://i.pinimg.com/236x/04/f1/3f/04f13fdb7580dcbe8c4d6b7d5a0a5ec2--ginger-kitten-ginger-cats.jpg",
	"https://i.pinimg.com/236x/da/6e/be/da6ebe73dacd76cfc29a79b1fbfe8378--the-netherlands-persian-kittens.jpg",
	"https://i.pinimg.com/236x/2c/e0/c8/2ce0c87a7d71ff203c7a54400c72e168--silver-tabby-kitten-british-shorthair-kitten.jpg",
	"https://i.pinimg.com/236x/ac/e5/9d/ace59d197bb17d9672e5155e88bcb0df--kittens-cuddling-cats-cute-kittens.jpg",
	"https://i.pinimg.com/236x/0f/59/fe/0f59fe0c6fb0608f556d291a6c370ca3--british-shorthair-kittens-british-shorthair-cats-blue.jpg",
	"https://i.pinimg.com/236x/e4/31/65/e4316567fe046eba051d62b832fd47c0--do-u-head-injury.jpg",
	"https://i.pinimg.com/236x/e4/0f/04/e40f040228988cddc7e38c839e8c23dd--adorable-kittens-adorable-animals.jpg",
	"https://i.pinimg.com/236x/f0/fb/bc/f0fbbc60a53c3938bb079a1d1f2fc88a--beautiful-kittens-adorable-kittens.jpg",
	"https://i.pinimg.com/236x/b9/9f/8f/b99f8f1be7cb686c9163246680102689--adorable-babies-adorable-animals.jpg",
	"https://i.pinimg.com/236x/6a/ac/94/6aac94f17325926affbdff77a21182c8--ragdoll-kittens-kitty-cats.jpg",
	"https://i.pinimg.com/236x/ea/ae/45/eaae456da493828488c9243a40e232d2--cutest-kittens-fluffy-kitties-cutest.jpg",
	"https://i.pinimg.com/236x/f3/c6/f7/f3c6f70e0340b941174b8971b8a28935--baby-steps-baby-kitty.jpg",
	"https://i.pinimg.com/236x/c2/7a/02/c27a02eb00fb476f253c7a85f40d2d75.jpg",
	"https://i.pinimg.com/236x/c2/7a/02/c27a02eb00fb476f253c7a85f40d2d75.jpg",
	"https://i.pinimg.com/236x/9f/9d/e7/9f9de7059fab1c153ed0f2dd41a07753--beautiful-green-eyes-pretty-eyes.jpg",
	"https://i.pinimg.com/236x/78/52/f8/7852f8df4d53fb3509824b25aa681c30--beautiful-green-eyes-pretty-eyes.jpg",
	"https://i.pinimg.com/236x/0f/c4/5b/0fc45b63179b78b64b82ad94bc210d45--beautiful-cats-beautiful-images.jpg",
	"https://i.pinimg.com/236x/b5/7d/13/b57d13a05db4bce0dbebe423ccde67ad--beautiful-green-eyes-pretty-eyes.jpg",
	"https://i.pinimg.com/236x/b0/37/1a/b0371a4df81104908cbcfc6da03bedd1--beautiful-green-eyes-stunning-eyes.jpg",
	"https://i.pinimg.com/236x/04/ba/20/04ba209bea617825c86446d39df634d3--beautiful-green-eyes-beautiful-cats.jpg",
	"https://i.pinimg.com/236x/df/86/d1/df86d1641eeb0f624802e30a36a55ef7--beautiful-eyes-amazing-eyes.jpg",
	"https://i.pinimg.com/236x/d6/b7/40/d6b740937bb1bbfda75f62856214a412--beautiful-cats-beautiful-green-eyes.jpg",
	"https://i.pinimg.com/236x/57/18/15/571815946346295fd5625e11994dbf1f--grey-tabby-cats-green-eyes.jpg",
	"https://i.pinimg.com/236x/31/dc/af/31dcaf54939c742d540733aac0b1179a.jpg",
	"https://i.pinimg.com/236x/fd/3f/aa/fd3faaa8ac65aa04214b0c567403b583--gorgeous-eyes-pretty-eyes.jpg",
	"https://i.pinimg.com/236x/8e/2d/e0/8e2de076ece6a1fc04a6a7c9ffebf167.jpg",
	"https://i.pinimg.com/236x/c1/1b/d9/c11bd95a30dcf35e75a8a7f4001557be--beautiful-green-eyes-cat-beautiful.jpg",
	"https://i.pinimg.com/236x/6d/eb/e7/6debe7a03278a6fa97443e5c3bec67c2--puma-russian-blue-cats.jpg",
	"https://i.pinimg.com/236x/68/69/34/6869342828d96ce707dd9f7d081054d0--beautiful-green-eyes-beautiful-cats.jpg",
	"https://i.pinimg.com/236x/4a/0c/1c/4a0c1cf7c16b5e3ef0738c8f664bc987--beautiful-eyes-green-eyes.jpg",
	"https://i.pinimg.com/236x/28/c8/c8/28c8c8cd349ad17b44ee499821a9cb8a--mothers-love-mother-daughters.jpg",
	"https://i.pinimg.com/236x/12/2e/de/122edead7a71a059e003a93c8e42648e--pretty-eyes-beautiful-eyes.jpg",
	"https://i.pinimg.com/236x/95/e9/f2/95e9f2fe1570f019c7a6653ce3fdf5e3--pretty-eyes-beautiful-eyes.jpg"
	],
	
	puppy : [
	"https://i.pinimg.com/236x/3f/bb/6c/3fbb6c2df575298dfc7e27ad47131bc3--black-lab-puppies-puppies-puppies.jpg",
	"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDWiVGSg27KoJKvFpYm5dBtkCnZ4y4fcjdwBoMqdyXZy-az-mx",
	"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReGUC9xDbWE6amVu04OHfyafbCeTpmHkQ8cowF53cJpxHaS0TG",
	"http://www.swpapyr.org/uploads/3/4/8/7/34877427/4966181.jpg",
	"https://free-classifieds-usa.com/oc-content/uploads/352/17478.jpg",
	"http://www.harvestacrespyrenees.com/wp-content/uploads/Yukon-great-pyrenees-puppy-for-sale.jpg",
	"http://magnerd.com/wp-content/uploads/great-pyrenees-on-lake-bled.jpg",
	"https://www.petclassifieds.us/user_images/8866364.jpg",
	"https://i.imgur.com/xLLN2CH.jpg",
	"https://barkpost.com/wp-content/uploads/2016/04/great-pyreness-feature.jpg",
	"https://s-media-cache-ak0.pinimg.com/originals/84/4a/91/844a9102e7d5b2560d5694474d501877.jpg",
	"https://www.dogbreedinfo.com/images11/GreatPyreneesLexi22405004.JPG",
	"https://i.pinimg.com/originals/fa/f9/42/faf942ac2bb8f3af22d2000b7afa20a4.jpg",
	"https://i.ytimg.com/vi/4zq1W4ByXaY/hqdefault.jpg",
	"http://www.harvestacrespyrenees.com/wp-content/uploads/leo-great-pyrenees-dog-great-with-children.jpg",
	"https://www.puppyfind.com/breed/saint_bernard/m_5940362.jpg",
	"https://i.ytimg.com/vi/qVzyBa2-Suc/maxresdefault.jpg",
	"https://i.pinimg.com/736x/5e/0d/e0/5e0de0a2bad098764a0547072fe835d3--baby-safe-sock-monkeys.jpg",
	"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWtL2vfULgkVBknYszSjhZywfQLX1yzC6NprMrx3Qa2eHuw5iKWQ",
	"http://cdn-www.dailypuppy.com/media/dogs/anonymous/tatanka_stbernard01.jpg_w450.jpg",
	"https://images.puppyfinder.com/AdInfo/9/b/3/9b3ede914d2c2140_o_1biuhv37otnu4g11at6is5cdjc_medium.jpg",
	"http://cdn3-www.dogtime.com/assets/uploads/2017/09/pit-bull-puppies-3.jpg",
	"https://i.pinimg.com/736x/4b/a9/42/4ba9422701af3553fb404d1e3c31fddf--blue-pits-pit-bull-puppies.jpg",
	"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlaBWS28NaTzBNi8zy02ChBDwPvvflUNlxYs3_st2eEYByTEky",
	"http://5.imimg.com/data5/OS/CS/MY-50181888/pitbull-puppy-500x500.jpg",
	"https://i.ytimg.com/vi/BDHjIzu8TMs/maxresdefault.jpg",
	"https://snowyswan.com/wp-content/uploads/2016/03/sleeping-free-pibull-puppies.jpg",
	"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfNBh0RwMYZs7TzpOuNLLXtQ1XUnwiYilZNdiv2YWK7qjckOJmJw",
	"https://static1.squarespace.com/static/530ec4b7e4b0f7e807d78526/t/569f2cfb0e4c11ec47aa7a9f/1453272316285/",
	"https://media.mnn.com/assets/images/2014/10/main_puppy.jpg.653x0_q80_crop-smart.jpg",
	"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6xTuHqJWlXltxR-SH7V18nrU3FWOQP7DikAkjH_YoFsIzbGeUXw",
	"https://i.ytimg.com/vi/5wdgrEGE50Q/maxresdefault.jpg",
	"https://i.ytimg.com/vi/5wdgrEGE50Q/maxresdefault.jpg",
	"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_N1v1qcVf1N5Yl6Kx8g3Vdz_mHHoOHhD4tbqeCKVin5-2coh-",
	"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2wSqfo9ZajkaEVgkJi6nZNccsLz0hN-W867HvKqK35LH837KccQ",
	"https://gfp-2a3tnpzj.stackpathdns.com/wp-content/uploads/2011/05/gfp-banner-pug-slide-1600x730.jpg",
	"https://barkpost.com/wp-content/uploads/2017/08/81Y67rO0vqL.jpg?q=70&fit=crop&crop=entropy&w=58&h=48",
	"https://barkpost.com/wp-content/uploads/2015/11/Fifty-The-Pit-Bull-and-His-Foster-Puppy-Jane.jpg",
	"http://cdn3-www.dogtime.com/assets/uploads/gallery/30-impossibly-cute-puppies/impossibly-cute-puppy-30.jpg",
	"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT86eK_CkjOXC6K6UMCOedE5MM0-EKhrlbpdcrIJsxshkFQQ5GqwA",
	"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsvffK0yUC1xaPeH4gAgoKVDxWkzpw62MHGA3XNq5Zd8j7ufsogQ",
	"http://www.petpuppymania.com/images/back1.jpg",
	"https://brightcove04pmdo-a.akamaihd.net/4221396001/4221396001_5209480649001_5209479447001-vs.jpg?pubId=4221396001&videoId=5209479447001",
	"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw7TNq_Z9P7cMP7AKte9TXlj9b8hl1o8KqOl86u9yEhjuegwJDQA",
	"https://cdn.theatlantic.com/assets/media/img/photo/2017/03/today-is-national-puppy-day/p22_RTR41V6E/main_900.jpg?1490286160",
	"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUrIUU-brTraWKoX3nHiQO6PV_X8btVr8G9WBZPz-_6myo83nAzg",
	"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRESeI-Zrfi9jZJYIVILeSpPgOYEX_lc9F7foAEo-8A2pAP-uUP",
	"https://www.stayathomemum.com.au/cache/860x380-0/wp-content/uploads/2015/10/Teacup-Pomeranian-White-e1446515202248.jpg",
	"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB8FN7_dzcdgT9WGZJWRAO1QvQEycQhTc5wAs2vjPFh79OKNKeeQ",
	"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU8gEbCJLdm1WQZz_BzGWsxPdxl4XE6bkYeV4xpqKYE9KK-F5zBQ",
	"https://i.pinimg.com/236x/a0/3f/46/a03f46c079ebf9757c0c3fa2e6f9305d--cute-pitbull-puppies-pit-bull-puppies.jpg",
	"https://i.pinimg.com/236x/75/e5/97/75e597d4681b15a4b01fea3ac6493aa6--white-pitbull-puppies-pitbull-pups.jpg",
	"https://i.pinimg.com/236x/5a/dd/c0/5addc09f495edc29449482436d195c8b--dabbing-everton.jpg",
	"https://i.pinimg.com/236x/56/b7/1a/56b71a6bdf6e96886b6cf1cfe6d56d40--pit-puppies-cute-pitbulls-puppies.jpg",
	"https://i.pinimg.com/236x/43/24/25/43242516bb722a81a3383bab51da4a3d--pitbull-pups-staffy-pups.jpg",
	"https://i.pinimg.com/236x/4b/a9/42/4ba9422701af3553fb404d1e3c31fddf--blue-pits-pit-bull-puppies.jpg",
	"https://i.pinimg.com/236x/d2/dd/91/d2dd9171135fede557fae4f7b9c57925--cutest-animals-baby-animals.jpg",
	"https://i.pinimg.com/236x/8a/bd/95/8abd95bde99fda6405578489b6b40d2c--white-pitbull-puppies-pitbulls-puppies.jpg",
	"https://i.pinimg.com/236x/51/03/8a/51038aa46ecca044524800164232e0bc--cute-little-girls-blue-pits.jpg",
	"https://i.pinimg.com/236x/f2/08/3f/f2083fecc4592d7493e4acd0c0ca62ea--pitbulls-puppies-cute-pitbulls.jpg",
	"https://i.pinimg.com/236x/8b/84/fe/8b84fe5a4c1086b3490f43d74a248bea--pitbull-pups-pit-bull-puppies.jpg",
	"https://i.pinimg.com/236x/a6/2d/91/a62d91707da98952f4c8a7844af56264--staffie-puppies-baby-pitbull-puppies.jpg",
	"https://i.pinimg.com/236x/d9/97/8a/d9978a35a946f05a4e3d83a975ba25ec--puppy-pitbulls-pit-bull-puppies.jpg",
	"https://i.pinimg.com/236x/88/1d/bd/881dbd9c635b7be353b2cb977f8fa8b2--pitbull-terrier-puppies-pitbull-puppy.jpg",
	"https://i.pinimg.com/236x/9e/9d/44/9e9d44624a48c4e7eaecaef911481f6b--cute-pitbull-puppies-pitbull-pups.jpg",
	"https://i.pinimg.com/236x/3a/e9/1f/3ae91f6ecccf456bb729fc214c137f17--puppy-dog-eyes-a-dog.jpg",
	"https://i.pinimg.com/236x/d7/ef/d9/d7efd9db12b14b7e81c44f4dad25f70c--blue-nosed-pitbull-blue-nose-pitbull-puppy.jpg",
	"https://i.pinimg.com/236x/11/50/cf/1150cf55b21a5f1788c557f155942072--pit-bull-puppies-dogs-and-puppies.jpg",
	"https://i.pinimg.com/236x/75/e5/97/75e597d4681b15a4b01fea3ac6493aa6--white-pitbull-puppies-pitbull-pups.jpg",
	"https://i.pinimg.com/236x/0e/07/9f/0e079f22de8bb3919196db590d1cf9db--photo-credit-pitty.jpg",
	"https://i.pinimg.com/236x/43/24/25/43242516bb722a81a3383bab51da4a3d--pitbull-pups-staffy-pups.jpg",
	"https://i.pinimg.com/236x/4b/a9/42/4ba9422701af3553fb404d1e3c31fddf--blue-pits-pit-bull-puppies.jpg",
	"https://i.pinimg.com/236x/8a/bd/95/8abd95bde99fda6405578489b6b40d2c--white-pitbull-puppies-pitbulls-puppies.jpg",
	"https://i.pinimg.com/236x/a6/2d/91/a62d91707da98952f4c8a7844af56264--staffie-puppies-baby-pitbull-puppies.jpg",
	"https://i.pinimg.com/236x/6e/35/d0/6e35d01e66165769b47384457294add1--country-girls-nike.jpg",
	"https://i.pinimg.com/236x/9d/12/3b/9d123b01b8cdbf647a953d862f16fe78--pit-bull-puppies-pitbull-puppies-red-nose.jpg",
	"https://i.pinimg.com/236x/3f/6d/de/3f6dde156e55d25aa7187a9fbd099322.jpg",
	"https://i.pinimg.com/236x/90/eb/35/90eb355772cdc156a86dd65d6f65dc7c--puppies-pitbull-pit-puppies.jpg",
	"https://i.pinimg.com/236x/6f/8a/b6/6f8ab6f6856956b7aea982747e303e51--puppy-pitbulls-pit-bull-puppies.jpg",
	"https://i.pinimg.com/236x/27/ff/e2/27ffe2986eb286ea3a3ab8a1380e008a--hes-mine-baby-pitbulls.jpg",
	"https://i.pinimg.com/236x/97/a1/70/97a1706db546a3fab6827b731d2de631--blue-pits-pit-bull-puppies.jpg",
	"https://i.pinimg.com/236x/99/d4/86/99d486344538296254d48a9d736311cf--american-stafford-staffies.jpg",
	"https://i.pinimg.com/236x/1d/18/12/1d1812e4616703e965d083a0e72ae8ad--pittbulls-adorable-animals.jpg",
	"https://i.pinimg.com/236x/db/0e/8a/db0e8a34b81b836a56c8537be5cc669f--red-pitbull-red-nose-pitbull-puppies.jpg",
	"https://i.pinimg.com/236x/20/ac/66/20ac6649d072cd0c667901f821d3d416--pitbull-blue-blue-nose-pitbull-puppies.jpg",
	"https://i.pinimg.com/236x/dd/9e/b9/dd9eb9482712c27a34a5a4eb198dbb7f--puppy-pitbulls-pitbull-pups.jpg",
	"https://i.pinimg.com/236x/d4/95/30/d49530c27de73d1a7e6dcae9492a0b8c--pittbulls-mans.jpg",
	"https://i.pinimg.com/236x/ff/5c/53/ff5c533a7bfb488ec89a3d08438825ce--cute-puppies-cute-dogs.jpg",
	"https://i.pinimg.com/236x/e1/d5/e5/e1d5e51d8ef8d49698dbd3be0b4ccad8--blue-pitbull-puppies-bully-pitbull.jpg",
	"https://i.pinimg.com/236x/55/61/bd/5561bdf5f39e18b186b8d96879c5621e--pitbull-breeders-blue-pitbull-puppies.jpg",
	"https://i.pinimg.com/236x/9c/e5/0c/9ce50c18ffea2a8908ee55d749b20679--blue-pits-pittbulls.jpg",
	"https://i.pinimg.com/236x/70/1c/b8/701cb8e8b7be6c4dacd2d5f9fbd59502--pitbull-puppies-for-sale-pitbull-lab-mix.jpg",
	"https://i.pinimg.com/236x/8c/dc/72/8cdc720ce623bda0ef3816be6cf4b8e6--pitbull-puppies-for-sale-pit-bull-puppies.jpg",
	"https://i.pinimg.com/236x/e9/d8/c5/e9d8c5a25ec4b183f4d7d1af87ea2489--cute-pitbull-puppies-bully-pitbull.jpg",
	"https://i.pinimg.com/236x/36/79/9b/36799b36194c6ff61a3464a8f401218f--big-pitbull-cute-pitbull-puppies.jpg",
	"https://i.pinimg.com/236x/9e/b6/22/9eb622b7f552c0a579f359060c4738ff--american-bulldog-puppies-american-bulldogs.jpg",
	"https://i.pinimg.com/236x/7c/fb/d9/7cfbd96714594b30d6cec1ef6c4ae583--blue-pits-beautiful-dogs.jpg",
	"https://i.pinimg.com/236x/1e/63/d4/1e63d488a676430db5b7fad290d3e10d--blue-pits-pit-bull-puppies.jpg",
	"https://i.pinimg.com/236x/bc/b3/3b/bcb33bd94719ed86ec464ec5821cc655--blue-pits-pit-bull-puppies.jpg",
	"https://i.pinimg.com/236x/1f/98/9a/1f989a546652bed74ce196544e430113--blue-pit-puppies-pit-bull-puppies.jpg",
	"https://i.pinimg.com/236x/6b/e9/47/6be947c039ea6e989633c2da61a73f27--white-pitbull-puppies-pit-bull-puppies.jpg",
	"https://i.pinimg.com/236x/f4/23/5b/f4235b30635741e581061f841a11aff4--pretty-eyes-beautiful-eyes.jpg",
	"https://i.pinimg.com/236x/33/8e/da/338edad21d009d33daf54a0a5ef53d93--puppy-pitbulls-husky-pitbull-mix-puppies.jpg",
	"https://i.pinimg.com/236x/44/9d/04/449d04d8cb40dbbe5fabccd65a1bf4a8--baby-pitbull-puppies-pitbulls-puppies.jpg",
	"https://i.pinimg.com/236x/ab/3a/9f/ab3a9fd4555e0fd1bd78a40c1015d793--pitbull-puppies-for-sale-red-nose-pitbull-puppies.jpg",
	"https://i.pinimg.com/236x/ce/be/fa/cebefaf45d380f919c6b3293ab36a15a--pit-bull-puppies-dog-pitbull.jpg",
	"https://i.pinimg.com/236x/44/5c/58/445c58694b6671b67e15f77a2f81468c--blue-pits-pit-bull-puppies.jpg",
	"https://i.pinimg.com/236x/6f/bc/32/6fbc3211754fe2b19c6d9a9f6ed240bf--red-nose-pitbull-puppies-pit-bull-puppies.jpg",
	"https://i.pinimg.com/236x/2c/ab/fd/2cabfd97bc6fb74306b143637a5911ca--pitbull-blue-pitbull-pups.jpg",
	"https://i.pinimg.com/236x/6d/d6/de/6dd6de922010a936248a8bc053e4d159--blue-nose-pitbull-puppies-pitbull-blue.jpg",
	"https://i.pinimg.com/236x/9e/27/5d/9e275d39ec78c9afde57bf6286286785--white-pitbull-pitbull-mix.jpg",
	"https://i.pinimg.com/236x/3f/a9/8e/3fa98e83c9f2d853f48c1ce29d08841c--pitbull-puppies-for-sale-a-photo.jpg",
	"https://i.pinimg.com/236x/6d/1a/01/6d1a01459c838b4b1cd9b6d5d79350ba--bull-terrier-puppy-pit-bull-puppies.jpg",
	"https://i.pinimg.com/236x/c5/05/0b/c5050b82180151426efbe0cf6acf56b2--nanny-dog-pitbulls.jpg",
	"https://i.pinimg.com/236x/32/0c/1b/320c1b4fb5f2dd6fe1ef2b63a221dbfa--pocket-pitbull-pit-bull-puppies.jpg",
	"https://i.pinimg.com/236x/f6/c3/54/f6c354f40b7ca949e1cc7a124f5cf645--red-pitbull-pitbull-pups.jpg",
	"https://i.pinimg.com/236x/23/df/72/23df72d80bd231a56c66c6ab5c78330f--pitbull-love-love-love.jpg",
	"https://i.pinimg.com/236x/eb/43/a0/eb43a00de015e00629d188dae8f7f71a--pit-bull-puppies-pitbull-pups.jpg",
	"https://i.pinimg.com/236x/c9/1f/de/c91fde08d32131a9855b54b8c20bc387--pit-bulls-adorable-animals.jpg",
	"https://i.pinimg.com/236x/f3/72/03/f372036449fff46364cbc0e64b726a50--poodles-toy-toy-poodle-puppies.jpg",
	"https://i.pinimg.com/236x/e2/60/d7/e260d75aceed9a8b9d4341d08009f065--mini-poodles-toy-poodles.jpg",
	"https://i.pinimg.com/236x/c1/d7/d1/c1d7d1771326fc312b497131968a097d--mini-poodles-standard-poodles.jpg",
	"https://i.pinimg.com/236x/5e/64/b5/5e64b5ce2d4c8cd512804136b2906a57--mini-poodles-toy-poodles.jpg",
	"https://i.pinimg.com/236x/a6/ab/e7/a6abe743b8ec875af86828ca19a1e823--teddy-bear-dogs-bear-puppy.jpg",
	"https://i.pinimg.com/236x/3c/60/21/3c60210898928cbce356dfef01ea5ab0--fluffy-dogs-poodle-puppies.jpg",
	"https://i.pinimg.com/236x/ad/e9/ae/ade9ae275eb0193e2d6a8764139143d0--maltipoo-puppies-baby-puppies.jpg",
	"https://i.pinimg.com/236x/c6/34/cf/c634cf2ef81f6c92ba008c462b07fa2b--poodle-puppies-standard-poodles.jpg",
	"https://i.pinimg.com/236x/59/b5/af/59b5af976bd5080b31659ac7cf07f36d--puppys-for-sale-teacup-poodle-puppies.jpg",
	"https://i.pinimg.com/236x/2b/33/77/2b337742c8eb0b734911677cc9556336.jpg",
	"https://i.pinimg.com/236x/77/92/6b/77926b2f9cf03450fc0d503cef957de1.jpg",
	"https://i.pinimg.com/236x/a5/b4/0c/a5b40cde9efde1a7dc21896aa121ab06--teacup-poodle-puppies-teacup-poodles.jpg",
	"https://i.pinimg.com/236x/30/b5/5b/30b55bc6a95fab4192a5449571f1ef25--toy-poodle-puppies-toy-poodles.jpg",
	"https://i.pinimg.com/236x/cd/fd/8e/cdfd8e43c8761e4bd2ac9aff3d1e390e--mini-poodles-toy-poodles.jpg",
	"https://i.pinimg.com/236x/e1/c4/cb/e1c4cb98179c783db3690c724c7da544--poodles-toy-toy-poodle-puppies.jpg",
	"https://i.pinimg.com/236x/93/35/cf/9335cfe44fbe71ad786db054af1e2cc4--toy-poodles-for-sale-toy-poodle-puppies.jpg",
	"https://i.pinimg.com/236x/77/a4/0b/77a40b71648af609ae2cd20c18534c3e--french-poodles-standard-poodles.jpg",
	"https://i.pinimg.com/236x/5e/b7/8f/5eb78f1a48cf8fd8c0dd5b4452d10f34--dog-training-videos-toy-poodles.jpg",
	"https://i.pinimg.com/236x/38/25/d0/3825d0ef6348b00c6bfd3a30f56cbffc--toy-poodle-puppies-red-poodles.jpg",
	"https://i.pinimg.com/236x/9f/1e/b0/9f1eb00eef00c328554d2933c2d7d02a--teacup-poodle-puppies-teacup-poodles.jpg",
	"https://i.pinimg.com/236x/bf/2a/ed/bf2aed7f7526a5a9dad121ffdee30758--toy-poodle-puppies-toy-poodles.jpg",
	"https://i.pinimg.com/236x/4b/95/c2/4b95c2151da685f166bb8ebf2069dbe3--parti-poodles-standard-standard-poodle-puppy.jpg",
	"https://i.pinimg.com/236x/24/e8/88/24e8881e98dcb04f6fb45dc9997442b7--teacup-puppies-teacup-shih-tzu-puppy.jpg",
	"https://i.pinimg.com/236x/73/00/a7/7300a77d40bea73d3d0432a87cbddb54--teacup-poodle-puppies-teacup-poodles.jpg",
	"https://i.pinimg.com/236x/8d/16/5a/8d165af313e01ca6c3284eb6bca5ffa1--teacup-poodle-puppies-teacup-poodles.jpg",
	"https://i.pinimg.com/236x/24/b1/ef/24b1efaa58fa20030f0a9fcb571b910d--parti-poodles-standard-white-coats.jpg",
	"https://i.pinimg.com/236x/43/fc/0b/43fc0b3d2a7ec7a47eb7703ec08d1303--toy-poodle-puppies-toy-poodles.jpg",
	"https://i.pinimg.com/236x/8f/4d/63/8f4d63cc6c8bbef0b7c2139ed1bcbb40.jpg",
	"https://i.pinimg.com/236x/61/75/69/6175699da703b40272232f2236bf930a--play-yard-poodles-toy.jpg",
	"https://i.pinimg.com/236x/d1/58/18/d15818dd9d920aeaf5895b2374370256--doggies-adorable-animals.jpg",
	"https://i.pinimg.com/236x/bf/a1/67/bfa1679eaca1909026bbd151e4871d39--toy-poodle-puppies-poodle-mix.jpg",
	"https://i.pinimg.com/236x/aa/aa/2e/aaaa2ee7a7df4bf8b82a8ce97018976c.jpg",
	"https://i.pinimg.com/236x/7d/47/a7/7d47a71f0c6718278d65a43b703ee069--red-poodles-french-poodles.jpg",
	"https://i.pinimg.com/236x/63/c0/6d/63c06d9aca6b0604ac4f2962b1dbbfa2--yellow-lab-puppies-sleeping-puppies.jpg",
	"https://i.pinimg.com/236x/d3/cd/31/d3cd31babd03616d06642a306ce9be47--lab-puppy-bean-boots.jpg",
	"https://i.pinimg.com/236x/c1/ca/ed/c1caed2d9cd96879cd2cb51cdd1e2dc8--black-lab-puppies-cute-puppies.jpg",
	"https://i.pinimg.com/236x/53/58/d1/5358d18a128af4c5ab85ed2e37176eaf--yellow-lab-puppies-yellow-labs.jpg",
	"https://i.pinimg.com/236x/1d/9c/6e/1d9c6e9d4d93265412fdee1ed4ea4bd3--yellow-lab-puppies-yellow-labrador-puppy.jpg",
	"https://i.pinimg.com/236x/67/e5/cd/67e5cd9f22cfbb121781ea072c90dbd7--chocolate-lab-puppies-chocolate-labradors.jpg",
	"https://i.pinimg.com/236x/88/50/d6/8850d6c9c3cb9f40454e9b77020cf28a--chocolate-labrador-puppies-chocolate-labradors.jpg",
	"https://i.pinimg.com/236x/71/c1/9e/71c19eaf6096778120374eef58a98ec8--first-snow-black-lab-puppies.jpg",
	"https://i.pinimg.com/236x/13/a8/7e/13a87ec41502a660c10f15c2acbe23f5--chocolate-lab-puppies-chocolate-labradors.jpg",
	"https://i.pinimg.com/236x/65/01/59/6501596848d92d9fad01d68eb213e4fd--golden-retriever-puppies-golden-retrievers.jpg",
	"https://i.pinimg.com/236x/e6/af/41/e6af417674e7600583cfd095731b6c9c--black-labrador-puppies-black-labrador-retriever.jpg",
	"https://i.pinimg.com/236x/04/39/f1/0439f100efc4af6bc3459314312b6097--chocolate-lab-puppies-chocolate-labrador-retriever.jpg",
	"https://i.pinimg.com/236x/88/50/d6/8850d6c9c3cb9f40454e9b77020cf28a--chocolate-labrador-puppies-chocolate-labradors.jpg",
	"https://i.pinimg.com/236x/67/e5/cd/67e5cd9f22cfbb121781ea072c90dbd7--chocolate-lab-puppies-chocolate-labradors.jpg",
	"https://i.pinimg.com/236x/ab/4b/d8/ab4bd8da3d058470a83a3392e641894c--silver-lab-puppies-black-lab-puppies.jpg",
	"https://i.pinimg.com/236x/13/a8/7e/13a87ec41502a660c10f15c2acbe23f5--chocolate-lab-puppies-chocolate-labradors.jpg",
	"https://i.pinimg.com/236x/15/fe/93/15fe93dc12aca1e6fa03d7ba31e09894--yellow-lab-puppies-white-lab-puppies.jpg",
	"https://i.pinimg.com/236x/e6/af/41/e6af417674e7600583cfd095731b6c9c--black-labrador-puppies-black-labrador-retriever.jpg",
	"https://i.pinimg.com/236x/93/25/de/9325de54ad69cf2f1acee113bb975997--yellow-lab-puppies-puppy-love.jpg",
	"https://i.pinimg.com/236x/5f/d6/c1/5fd6c16c6a43d46e915e60a2bd1b1824.jpg",
	"https://i.pinimg.com/236x/84/43/e3/8443e345075cda63d6631d814900b3f2--cute-pet-adorable-pets.jpg",
	"https://i.pinimg.com/236x/b0/02/a7/b002a71dcf90fcd1fc5e8711acecb6da--yellow-labrador-retrievers-labrador-retriever-dog.jpg",
	"https://i.pinimg.com/236x/61/6e/5e/616e5e7b7e61512b3e24ee8af6cb9f91--puppies-labrador-dogs-puppies.jpg",
	"https://i.pinimg.com/236x/10/b5/02/10b502c8524951848cbdb631b319e643--chocolate-lab-puppies-chocolate-labs.jpg",
	"https://i.pinimg.com/236x/9c/9e/be/9c9ebe637f0a12ddb585e919baa5d881--white-puppies-white-dogs.jpg",
	"https://i.pinimg.com/236x/d4/eb/27/d4eb27f1ee3929d0811185352e3d6e01--silver-lab-puppies-silver-labrador.jpg",
	"https://i.pinimg.com/236x/02/80/5f/02805faff97651258de1b1aee0151226--chocolate-labrador-puppies-chocolate-labs.jpg",
	"https://i.pinimg.com/236x/1c/cb/ee/1ccbeefa99769a20bfacbe6f33caafd2--puppy-play-puppy-love.jpg",
	"https://i.pinimg.com/236x/35/20/e8/3520e8294b827ddaf590177c59085a01--yellow-black-color-black.jpg",
	"https://i.pinimg.com/236x/27/82/a5/2782a5035322e3d1bf1da65fffe22e98--chocolate-moose-chocolate-labs.jpg",
	"https://i.pinimg.com/236x/97/1a/d0/971ad020ad6b680c572c612dc987d98b--chocolate-lab-puppies-chocolate-labs.jpg",
	"https://i.pinimg.com/236x/50/35/70/503570e20f56c25a4ff70df264a4359b--black-labrador-puppies-black-labrador-retriever.jpg",
	"https://i.pinimg.com/236x/6a/87/dd/6a87dd3d996103a040e79fec037cc6b7--silver-lab-puppies-charcoal-lab-puppies.jpg",
	"https://i.pinimg.com/236x/16/fd/22/16fd22edea1f1cdbe2c693dfe9644bba--silver-labrador-retriever-silver-lab-puppies.jpg",
	"https://i.pinimg.com/236x/f1/24/9f/f1249f7142b2a0eded958d4537983b4e--black-lab-puppies-labrador-puppies.jpg",
	"https://i.pinimg.com/236x/7a/c1/c7/7ac1c7a80124a65b264541b3bdbc9cb3--baby-bulldogs-cute-bulldogs.jpg",
	"https://i.pinimg.com/236x/d5/99/4b/d5994ba1f2fd2af3fff905888cadbd32--cute-bulldog-puppies-cute-bulldogs.jpg",
	"https://i.pinimg.com/236x/c1/08/81/c1088193dc09f09f4400eaaa7f748fe5--english-bulldog-puppies-english-bulldogs.jpg",
	"https://i.pinimg.com/236x/e6/ec/7f/e6ec7fc5f66c7476c61196fb0164eba3--icecream-bull-dog.jpg",
	"https://i.pinimg.com/236x/43/9f/34/439f3409de5fae88d2eb6dba2686fdb9--baby-bulldogs-bulldog-names.jpg",
	"https://i.pinimg.com/236x/96/ea/d0/96ead06b90abf302db02a5dec81802be--english-bulldog-puppies-english-bulldogs.jpg",
	"https://i.pinimg.com/236x/a9/1c/6b/a91c6b59e15ce5996b09fb3c430701c6--teddy-bears-bull-dog.jpg",
	"https://i.pinimg.com/236x/15/9c/82/159c822983c95e76d525d44495cd66c9--blue-bulldog-english-bulldog-puppies.jpg",
	"https://i.pinimg.com/236x/20/61/b6/2061b6f7a8820aa1c9b0a97275b4cafa--too-cute-plays.jpg",
	"https://i.pinimg.com/236x/53/9d/33/539d33ab2fba084e921f0eaa1609699e--english-bulldog-puppies-english-bulldogs.jpg",
	"https://i.pinimg.com/236x/73/cc/b4/73ccb42bc41a050785a21946a3e15050--blue-english-bulldogs-blue-bulldog.jpg",
	"https://i.pinimg.com/236x/56/a9/23/56a9232790cc08769ce919f70c4fa694--cute-bulldogs-bulldog-puppies.jpg",
	"https://i.pinimg.com/236x/ba/90/80/ba9080809a0440ab6db0d1c7611fa7ab.jpg",
	"https://i.pinimg.com/236x/07/b8/17/07b817f6b61c98ead677212d849a251c--blue-english-bulldogs-english-bulldog-puppies.jpg",
	"https://i.pinimg.com/236x/fc/0a/0d/fc0a0dd03259c1e5279a6a416aeab179--english-bulldog-puppies-english-bulldogs.jpg",
	"https://i.pinimg.com/236x/bf/32/94/bf32941eb8ffdb2efe49b34ebd7c6ff5--cute-little-puppies-cute-puppies.jpg",
	"https://i.pinimg.com/236x/5e/a4/99/5ea4995074311ce96055a0e7451e2bf2--cute-bulldogs-baby-bulldogs.jpg",
	"https://i.pinimg.com/236x/e1/84/0f/e1840f53e80bf456e983c99ba3028a42--english-bulldog-puppies-miniature-english-bulldog.jpg",
	"https://i.pinimg.com/236x/d0/62/c1/d062c1b2d00e244d83709f1bacb1614a--french-bulldog-puppies-french-bulldogs.jpg",
	"https://i.pinimg.com/236x/83/57/7d/83577dd8a8f3a5cc5d9961340c613b86.jpg",
	"https://i.pinimg.com/236x/ce/43/5b/ce435b62efdea2eb031007de5672bebf--miniature-english-bulldog-old-english-bulldog-puppies.jpg",
	"https://i.pinimg.com/236x/ed/93/5b/ed935b132b5e743639fe64d66114a59e--french-bulldog-breeders-english-bulldog-puppies.jpg",
	"https://i.pinimg.com/236x/6f/56/03/6f5603704490a59654d9444ccd11307c--baby-bulldogs-cute-bulldogs.jpg",
	"https://i.pinimg.com/236x/6f/a4/41/6fa4418435f10b1ba6e16d6319354d75--funny-french-bulldogs-french-bulldog-puppies.jpg",
	"https://i.pinimg.com/236x/bd/e1/a8/bde1a85a2e8c47704445cc5c26bb6148--bulldog-puppies-for-sale-english-bulldog-puppies.jpg",
	"https://i.pinimg.com/236x/0c/80/88/0c80886cb4d1b73f4e12d5451385add4--chubby-puppies-cute-little-puppies.jpg",
	"https://i.pinimg.com/236x/83/a0/28/83a0280badbf01f7d60e3fe9478b4d5f--english-bulldog-puppies-english-bulldogs.jpg",
	"https://i.pinimg.com/236x/47/95/e2/4795e212d10fe50777ae2c16f2c02033--blue-english-bulldogs-blue-bulldog.jpg",
	"https://i.pinimg.com/236x/72/a9/4e/72a94e909e03d88473b9bfd1f98c2a7d--english-bulldog-puppies-english-bulldogs.jpg",
	"https://i.pinimg.com/236x/82/c5/e7/82c5e7e3733d602982f772c2735976f3--my-heart-cutest-dogs.jpg",
	"https://i.pinimg.com/236x/93/d9/66/93d9662c74c6ad70e72a5620a2c706aa.jpg",
	"https://i.pinimg.com/236x/ad/3e/a3/ad3ea398266bc506087589bca572d2ce--english-bulldog-puppies-english-bulldogs.jpg",
	"https://i.pinimg.com/236x/d8/c7/50/d8c750ea8356bee648e1a2de5f9a61c9--engelske-bulldogs-english-bulldog-puppies.jpg",
	"https://i.pinimg.com/236x/5d/4b/24/5d4b24f0dbc956f2c82da5393c86e940--english-bulldog-puppies-english-bulldogs.jpg",
	"http://www.yourpurebredpuppy.com/dogbreeds/photos-IJKL/komondorsf5.jpg",
	"https://static.wixstatic.com/media/ef9921_98d50d238fef421dbdb57d77758083c4.jpg/v1/fill/w_383,h_595,al_c,q_80,usm_0.66_1.00_0.01/ef9921_98d50d238fef421dbdb57d77758083c4.webp",
	"https://i.pinimg.com/236x/13/98/a8/1398a87a9350b8f5372d7578d2c9310a--komondor-tags.jpg",
	"https://i.pinimg.com/236x/16/29/8f/16298f4ba49f264f46e739278f98eb00--puli-dog-beautiful-dogs.jpg",
	"https://i.pinimg.com/236x/16/73/c7/1673c73eda95e2dd53f8fce2f80683c3--puli-dog-joggers.jpg",
	"https://i.pinimg.com/236x/4b/64/0f/4b640f74f3a638d492e50fa96848ace1--pictures-online-komondor.jpg",
	"https://i.pinimg.com/236x/9f/0c/41/9f0c4137c80cb67b2f171b399a5c6503--komondor-puppy-pictures.jpg",
	"https://i.pinimg.com/236x/bc/9f/42/bc9f42a6f15f119818b992a5f48788e8--puppies-for-sale-west-coast.jpg",
	"https://i.pinimg.com/236x/09/98/88/099888a0a170e4315833190daff5275b--komondor-vizsla.jpg",
	"https://i.pinimg.com/236x/13/98/a8/1398a87a9350b8f5372d7578d2c9310a--komondor-tags.jpg",
	"https://i.pinimg.com/236x/6d/b5/94/6db5946b392bcc0be5543f13e7274bb3--lilla-puli-dog.jpg",
	"https://i.pinimg.com/236x/c6/ac/84/c6ac8440430eeabe2b1a5c9537bfbffd--komondor-coco.jpg",
	"https://i.pinimg.com/236x/73/55/c6/7355c61e9736c04b4278ae4aa459fbf7--mop-dog-komondor.jpg",
	"https://i.pinimg.com/236x/6e/0f/b4/6e0fb43b09c214f487cdc79f4eecb3c4--komondor-puppy-pictures.jpg",
	"https://i.pinimg.com/236x/90/dd/d5/90ddd5f2196821545fb0cc795b3f05bc--hipster-hairstyles-cute-hairstyles.jpg",
	"https://i.pinimg.com/236x/87/5e/d9/875ed9a75e081298376991182243925c--photoshop-pics-pet-dogs.jpg",
	"https://i.pinimg.com/236x/c0/e3/3a/c0e33a076eca52da06cc7a0cefa414cc--dapple-dachshund-dachshund-puppies.jpg",
	"https://i.pinimg.com/236x/40/64/57/406457cc96bdfd8bdcfa9a0f785ac5a3--puppy-eyes-dachshund-puppies.jpg",
	"https://i.pinimg.com/236x/e2/61/a5/e261a526a1733fa8493dd03bea477811--weiner-dogs-puppy-love.jpg",
	"https://i.pinimg.com/236x/e8/c1/b9/e8c1b9681d4e2f2d549a271b86c1277b--dachshund-puppies-wiener-dogs.jpg",
	"https://i.pinimg.com/236x/b9/1a/39/b91a39cfe9cc9893fd02876049692b04--weenie-dogs-doggies.jpg",
	"https://i.pinimg.com/236x/2e/31/07/2e31078b483fc8759f4099e4ecca68e8--dachshund-puppies-weenie-dogs.jpg",
	"https://i.pinimg.com/236x/c8/12/f5/c812f52e9dcf3a0611d10e1dc02f1c5a--weiner-dogs-puppies-puppies-cutest.jpg",
	"https://i.pinimg.com/236x/8b/f8/d8/8bf8d8ffb1bbc14dea59eb995877f1b9--weiner-dog-puppies-mini-daschund-puppies.jpg",
	"https://i.pinimg.com/236x/f1/d2/d6/f1d2d6e0c09ed01dd6aa0780cff20c81--dachshund-puppies-cute-puppies.jpg",
	"https://i.pinimg.com/236x/b5/d5/95/b5d5954cde6bf7f68c552064ff96dcba--weiner-dogs-puppys.jpg",
	"https://i.pinimg.com/236x/15/5f/07/155f07affe38574b70c6895c8a338a7f--long-haired-dachshund-puppies-wiener-dog-puppies.jpg",
	"https://i.pinimg.com/236x/81/fd/db/81fddbf9d4e115b4bdccfca1b3f6e543--dapple-dachshund-dachshund-puppies.jpg",
	"https://i.pinimg.com/236x/43/9d/13/439d13aea76bcb10f5a2e8638bc8d1b6--dachshund-puppies-for-sale-dachshunds-puppy.jpg",
	"https://i.pinimg.com/236x/82/21/ee/8221ee933886b3517b89431d95c1ffa6--dachshund-humor-dapple-dachshund.jpg",
	"https://i.pinimg.com/236x/5b/5e/c9/5b5ec9461a378099ae63c3601466a041--dapple-dachshund-dachshund-puppies.jpg",
	"https://i.pinimg.com/236x/42/f3/84/42f384a6ca23198e5a34c2705775c5ef--dachshund-puppy-miniature-more-more.jpg",
	"https://i.pinimg.com/236x/db/50/72/db50720a2640cf25e41e3064ab75f745--love-is-patient-patiently-waiting.jpg",
	"https://i.pinimg.com/236x/5e/e0/52/5ee052a2d7be95128f00b69dfcae81e8.jpg",
	"https://i.pinimg.com/236x/6a/e4/7d/6ae47d75d3afe97be1680e55500a22d7--dapple-dachshund-dachshund-love.jpg",
	"https://i.pinimg.com/236x/32/f3/97/32f397aabc80609f84b1a18c7ea81547.jpg",
	"https://i.pinimg.com/236x/37/4d/7a/374d7ae6aee6a06616dbb975f3d0062b.jpg",
	"https://i.pinimg.com/236x/4c/54/a8/4c54a8180e46376d99b9f077d79b768e--dachshund-puppies-dachshund-love.jpg",
	"https://i.pinimg.com/236x/ac/54/9e/ac549e92f8035fcadc5d6ae615d08c85.jpg",
	"https://i.pinimg.com/236x/df/3c/ce/df3cce0117dd1f0a0fcc5e521da3fe02.jpg",
	"https://i.pinimg.com/236x/7d/ff/ce/7dffce1ad6142ac554041199d5e03540.jpg",
	"https://i.pinimg.com/236x/56/b7/1a/56b71a6bdf6e96886b6cf1cfe6d56d40--pit-puppies-cute-pitbulls-puppies.jpg",
	"https://i.pinimg.com/236x/36/01/3f/36013f36602fc476aeb2f40e4b5b9d76--eye-colors-husky-eyes.jpg",
	"https://i.pinimg.com/236x/3a/07/ee/3a07ee625125589f90e5f3a6aa3ca5e5--german-shorthaired-pointer-hunting-dogs.jpg",
	"https://i.pinimg.com/236x/1e/b8/7a/1eb87a6ef0d036b0e332fccdf1ba27ac--chocolate-labrador-retriever-labrador-retriever-dog.jpg",
	"https://i.pinimg.com/236x/3a/07/ee/3a07ee625125589f90e5f3a6aa3ca5e5--german-shorthaired-pointer-hunting-dogs.jpg"
	],

	feet : [
	"https://chaimommas.com/wp-content/uploads/2015/09/FullSizeRender-1-1-1024x768.jpg",  
	"https://i.imgur.com/dL3LF4k.jpg",  
	"https://i.pinimg.com/236x/9d/6c/00/9d6c00f082ddfca26911cb3845ce37ff--nike-free-shoes-nike-shoes-outlet.jpg",
	"http://i.imgur.com/DeIoP2U.jpg", 
	"https://i.imgur.com/wzobCdN.jpg", 
	"http://altamontespringsyoga.com/images/357_yogafeet.jpg", 
	"https://i.pinimg.com/736x/9f/7a/74/9f7a74e1b06eea1125e86b85aa84f35a--sexy-high-heels-strappy-heels.jpg", 
	"https://i1.wp.com/www.ayurpedia.org/wp-content/uploads/burning_feet_ayurveda_remedy.jpg?fit=620%2C323", 
	"https://i.pinimg.com/originals/f0/bc/1a/f0bc1a69edcd632c494fbd2963655b8e.jpg", 
	"https://i.pinimg.com/736x/99/04/a3/9904a3c34e105d80efe952be91ffbe0b--feer-toe-nails.jpg",  
	"https://t00.deviantart.net/lBhujmPtaU_UQkF9ublTRW3RnGc=/fit-in/700x350/filters:fixed_height(100,100):origin()/pre00/f0aa/th/pre/i/2009/213/e/6/you_like_my_hot_feet__by_fuessli.jpg",
	"https://orig00.deviantart.net/af8e/f/2014/020/b/5/sexy_feet_by_alal7174-d730ntv.jpg", 
	"https://img00.deviantart.net/8165/i/2012/020/d/0/sexy_feet_in_flip_flops_by_djskief-d4n0hdj.jpg", 
	"https://guideimg.alibaba.com/images/shop/100/12/19/4/hot-barefoot-blonde-doing-yoga-pretty-feet-soles-slo-mo-clip-6_1510334.jpg", 
	"http://farm8.static.flickr.com/7250/13428347213_c875cb4e28.jpg", 
	"https://cloudfront.beautyheaven.com.au/sites/default/files/styles/heaven_medium/public/article_main_images/13548-scholl-video-main.jpg?itok=RFL8QfYy", 
	"https://media.mnn.com/assets/images/2016/04/feet-in-sand.jpg.838x0_q80.jpg", 
	"https://i.ytimg.com/vi/RKLd-tqKdIU/hqdefault.jpg", 
	"https://www.flickr.com/photos/27328140@N04/12026907593", 
	"https://media.ldscdn.org/images/media-library/jesus-christ/christus-foot-lds-454937-gallery.jpg", 
	"https://s-media-cache-ak0.pinimg.com/originals/bf/1e/82/bf1e820914f8b0b1a750d26cd2b5a58e.jpg", 
	"https://chaimommas.com/wp-content/uploads/2015/09/FullSizeRender-1-1-1024x768.jpg", 
	"https://i.imgur.com/dL3LF4k.jpg", 
	"http://i.imgur.com/DeIoP2U.jpg", 
	"https://i.imgur.com/wzobCdN.jpg", 
	"http://altamontespringsyoga.com/images/357_yogafeet.jpg", 
	"https://i.pinimg.com/736x/9f/7a/74/9f7a74e1b06eea1125e86b85aa84f35a--sexy-high-heels-strappy-heels.jpg", 
	"https://i1.wp.com/www.ayurpedia.org/wp-content/uploads/burning_feet_ayurveda_remedy.jpg?fit=620%2C323", 
	"https://i.pinimg.com/originals/f0/bc/1a/f0bc1a69edcd632c494fbd2963655b8e.jpg", 
	"https://i.pinimg.com/736x/99/04/a3/9904a3c34e105d80efe952be91ffbe0b--feer-toe-nails.jpg", 
	"https://www.babycenter.com/ims/2015/03/493836197_wide.jpg", 
	"https://t00.deviantart.net/lBhujmPtaU_UQkF9ublTRW3RnGc=/fit-in/700x350/filters:fixed_height(100,100):origin()/pre00/f0aa/th/pre/i/2009/213/e/6/you_like_my_hot_feet__by_fuessli.jpg", 
	"https://orig00.deviantart.net/af8e/f/2014/020/b/5/sexy_feet_by_alal7174-d730ntv.jpg", 
	"https://img00.deviantart.net/8165/i/2012/020/d/0/sexy_feet_in_flip_flops_by_djskief-d4n0hdj.jpg", 
	"https://guideimg.alibaba.com/images/shop/100/12/19/4/hot-barefoot-blonde-doing-yoga-pretty-feet-soles-slo-mo-clip-6_1510334.jpg", 
	"http://farm8.static.flickr.com/7250/13428347213_c875cb4e28.jpg", 
	"https://cloudfront.beautyheaven.com.au/sites/default/files/styles/heaven_medium/public/article_main_images/13548-scholl-video-main.jpg?itok=RFL8QfYy", 
	"https://cdn.images.express.co.uk/img/dynamic/109/590x/Feet-facts-601160.jpg", 
	"https://www.dhresource.com/0x0s/f2-albu-g1-M01-2C-81-rBVaGFVnm_mAdTnSAACPCs-UEYs776.jpg/36-silicone-female-feet-model-with-inner.jpg", 
	"https://ak4.picdn.net/shutterstock/videos/3425234/thumb/1.jpg", 
	"http://picture-cdn.wheretoget.it/51ydwq-l-610x610-shoes-cat-kitty-socks-cute-kawaii-mint+green-whiskers-tattoos-green.jpg", 
	"https://lh5.googleusercontent.com/-bd0ptVilhPI/UHMlnrGjLAI/AAAAAAAAKew/wGBFcZFt-08/s640/toes.JPG", 
	"https://media.boingboing.net/wp-content/uploads/2015/10/foot-fetish.jpg",
	"https://i.pinimg.com/236x/06/aa/84/06aa84720b24797c093759bcd66d49b8--white-nail-polish-white-nails.jpg",
	"https://i.pinimg.com/236x/fa/72/e5/fa72e59a5e092aad470af2d03e818539--black-flat-sandals-black-gladiator-sandals.jpg",
	"https://i.pinimg.com/236x/16/85/22/16852237570d7d44a9c8c14879b6c383--metallic-sandals-lace-up-sandals.jpg",
	"https://i.pinimg.com/236x/f4/fd/b6/f4fdb677ef9cbc031b74fc83f7827e8d--glitter-toes-sparkles-glitter.jpg",
	"https://i.pinimg.com/236x/f2/8f/a6/f28fa6cc38f078d0a6b1f78fd4387130--gold-anklet-anklets.jpg",
	"https://i.pinimg.com/236x/b8/cd/cc/b8cdcc8167e7f722ca72249309ae2408--womens-sandals-summer-sandals.jpg",
	"https://i.pinimg.com/236x/f6/6e/3b/f66e3b5144dd137b141c69d72d2ec6dd--floral-socks-sheer-socks.jpg",
	"https://i.pinimg.com/236x/42/fb/f4/42fbf47b112e23bb3052a7ea0001a6fe--toe-rings-ring-designs.jpg",
	"https://i.pinimg.com/236x/1e/ef/81/1eef81d4f16af601431380cd9e999858--summer-toenails-white-toenails.jpg",
	"https://i.pinimg.com/236x/1b/9c/fc/1b9cfc32c7151c7f04adcdf6f34281a9--foot-jewellery-feet-jewelry.jpg",
	"https://i.pinimg.com/236x/3f/6e/5f/3f6e5f6bccc820ee831009c8b0c31adc--ankle-jewelry-feet-jewelry.jpg",
	"https://i.pinimg.com/236x/eb/ab/95/ebab95faa1b146a4748f61bd3c5a9b61--barefoot-sandals-wedding-crochet-barefoot-sandals.jpg",
	"https://i.pinimg.com/236x/f7/f9/a3/f7f9a34fa2eccd80ba97b54fdafb7130--unique-gifts-for-her-beaded-sandals.jpg",
	"https://i.pinimg.com/236x/37/97/99/379799c365f66c48cdc2afa6abe751b0--autumn-flowers-white-flowers.jpg",
	"https://i.pinimg.com/236x/f9/b8/c7/f9b8c78d92e3a16540a7bc6b79fd74be--spring-summer-summer-time.jpg",
	"https://i.pinimg.com/236x/04/a1/e5/04a1e53481812bb9c70e49f742f6993a--beach-feet-beach-walk.jpg",
	"https://i.pinimg.com/236x/fe/0c/f5/fe0cf54c9f8acd3c7387332b714835ad--walking-barefoot-going-barefoot.jpg",
	"https://i.pinimg.com/236x/42/8e/23/428e23595e079ea7445f68c143343403--french-toenails-french-manicure-toe-nails.jpg",
	"https://i.pinimg.com/236x/4e/af/82/4eaf826083fcb17c53faf344b78e3c86--barefoot-shoes-boho-barefoot-sandals-diy.jpg",
	"https://i.pinimg.com/236x/d3/e5/ad/d3e5ad910f076808616e99fee5c1c093--beach-wedding-sandals-barefoot-wedding.jpg",
	"https://i.pinimg.com/236x/b5/69/08/b569089a2b41a4c12dc441c895840f54--feet-jewelry-beach-jewelry.jpg",
	"https://i.pinimg.com/236x/30/cd/39/30cd39ebe5f80eb3277a75bb8d33dcdf--crochet-barefoot-sandals-crochet-wedding.jpg"
	],
	
	cyka : [
	"https://www.youtube.com/watch?v=y90yaLFoYoA", 
	"https://www.youtube.com/watch?v=R8PMIuPgoTU&index=1&list=LLs-BjL28XBmoKr0xjZLjb8w", 
	"https://www.youtube.com/watch?v=bo5ZVe1LHxU&has_verified=1"
	]
}


for (let image in images) {
    if (command === image){   
    	message.channel.send(images[image][Math.floor(Math.random() * images[image].length)]);
    }
}



/*
if(command === ""){
	message.channel.send(

);}//end command

*/



/*var replyarray;

var infosettings = [
	"Commands for settings : ",
	"[prefix] settings <command>", 
	"list - lists out all of the settings and their values.",
	"info - sends this message.", 
	"------------------------",
	"Commands for individual settings : ",
	"[prefix] <setting> <command/value> - ",
	"description - sends a description for the setting.",
	"<value> - sets a value for the command.",
	"For both description and value, command the setting without an argument."
];

	


if(command === "settings" && input[1] === "info"){//lists setting info
	replyarray = "`";
	//replyarray.push("`");
	for (i = 0; i < infosettings.length; i ++){
		replyarray.push(i);
	}
	replyarray.push(" \n`");
}
	
  //SETTINGS

let settings = {
marketupdates : [
	"marketupdates", 
	false, 
	"Deletes all developer's commands starting with '!' when enabled"
],
botreply : [
	"botreply", 
	false, 
	"Allows the bot to send messages when not prompted"
],
prefix : [
	"prefix",
	"+",
	"Prefix can be changed to any value 2 char or less"
],
conspiracycommands : [
	"conspiracycommands", 
	false, 
	"For Conspiracy Congress : Allows users to use server-related commands"
]
};

if(command === "settingslist"){//lists all settings and values
	for (i = 0; i < settings.length; i ++){
	message.channel.send("`" + settings[i][0] + settings[i][1] + "`");
	}
message.channel.send("`NOTE : Settings are changeable only by members with 'Developer' role.`");
}
	
if(command === "settings"){
	for (i = 0; i < info.settings.length; i ++){
	message.channel.send("`" + info.settings[i] + "`" + "/n");
	}
}

for (let setting in settings) {
    if (command === setting){
		if(!input[1]){
    		message.channel.send("`" + settings[setting][0] + " set to " + settings[setting][1] + "/n Description : " + settings[setting][2] + ".`");
		} 
		//changes the values of the setting
		if (input[1] === "true"){
			settings[setting[1]] = true;
		}
		else if (input[1] === "false"){
			settings[setting[1]] = false;
		}
		//returns the setting name and description
		else if (input[1] === "description" || input[1] === "info"){
			message.channel.send("`" + settings[setting][0] + " : " + settings[setting][2] + ".`");
		}//returns the setting name and value
		else if (input[1] === "value"){
			message.channel.send("`" + settings[setting][0] + " is set to " + settings[setting][1] + ".`");
		}
		else if(setting === "prefix" && input[1]){
			if(input[1].length < 3){
				settings[setting][1] = input[1];
			}
			else{message.channel.send("`Prefix argument must be less than 3 characters!`");}
		}
		//else{message.channel.send("`Not a valid argument`")}
	}
}//end setting commands
		
//start developer commands
if(message.member.roles.some(r=>["DeveloperCommands"].includes(r.name))){

//start settings.marketupdates
if (command === "marketupdates"){
var replymarketupdates = true;
		if(!input[1]){
			if(settings.marketupdates[1] === true){settings.marketupdates[1] = false;}
			if(settings.marketupdates[1] === false){settings.marketupdates[1] = true;}
		}
		else if(input[1] !== "true" && input[1] !== "false"){replymarketupdates = false;}
		else if(input[1] === "true"){settings.marketupdates[1] = true;}
		else if(input[1] === "false"){settings.marketupdates[1] = false;}	
	if(replymarketupdates === "true"){
		return message.reply("`" + settings.marketupdates[0] + " set to " + settings.marketupdates[1] + "!`");
	}
	else{message.reply("`That is not a valid argument!`");}
}//end marketupdates

}//end developer commands
///////////////////////////////////////////////////////////////////////////////////

//start settings functions

//marketupdate message deleter
if ((settings.marketupdates[1] === true) && ((input[0] === "!item-info") || (input[0] === "!shop"))){
	if(message.member.roles.some(r=>["Developer"].includes(r.name))){
		client.deleteMessage(message); 
	}
}

*/

  /*
  var wordOfTheDay;
  var wordClaimable;
  
  	if(command === "wordoftheday"){
		if(message.content.indexOf(config.prefix) !== 0) return;
	  	if(!message.member.roles.some(r=>["Developer"].includes(r.name)) )
   			return message.reply("You don't have permissions to use this command!");
      wordOfTheDay = (message.content[1]);
			message.channel.send("Word of the day set to ${wordOfTheDay}!");
      wordClaimable = true;
      message.channel.send("Word claim set to true!")
    }

  var prize;
  
  if(command === "prize"){
  	if(!message.member.roles.some(r=>["Developer"].includes(r.name)) ){
   	return message.reply("You don't have permissions to use this command!");
	prize = (Math.floor(Math.random() * 2000) + 500);
        message.channel.send("Prize amount set to ${prize}");
  	}
  }
	
  if((message.content.contains(wordOfTheDay)) && (wordClaimable === true)){
    message.reply("Congragulations! You have used the word of the day and shall be rewarded ${prize} amount of money!");
    message.channel.send("@Administrator");
    wordClaimable = false;
  }
  
  
  
  
  */
  
  
  
  
  
if(command === "devinput"){ //makes sure that the bot is recieving input from the developer
	return message.channel.send(inputTest); 
}
  
  
	
});//end

client.login(config.token);
