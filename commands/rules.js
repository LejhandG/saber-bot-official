const Discord = require('discord.js');

module.exports = {
  name: "rules",
  description: "Embeds rules",
  alias: [],
  run: async (bot, message, args, url, searchString, youtube, handleVideo, serverQueue, play) => {
    
if (!message.member.hasPermission("ADMINISTRATOR")) {

  message.reply('You do not have the required permissions to use this.')
  return;

}    

const helpembed = new Discord.MessageEmbed()
	.setColor('#00f9ff')
  .setImage('https://media.discordapp.net/attachments/722759592047542304/740848562799116299/IntroText_20190910_162937-2.gif?width=845&height=475')

message.channel.send(helpembed);
    
const embed1 = new Discord.MessageEmbed()
	.setColor('ORANGE')
  .setDescription(`**__RULES AND REGULATION__**

:small_orange_diamond: ➯ **Don't be offensive or Racist.**
:small_orange_diamond: ➯ **No hate speech about anyone.**
:small_orange_diamond: ➯ **Don't Harass anyone in DMs or server.***
:small_orange_diamond: ➯ **No flirting.**
:small_orange_diamond: ➯ **Spamming in any form is not allowed.**
:small_orange_diamond: ➯ **Permanent ban for scammers.**
:small_orange_diamond: ➯ **No Earrape in Voice Channels.**
:small_orange_diamond: ➯ **Don't ask for roles.**
:small_orange_diamond: ➯ **Don't share or ask personal information.**
:small_orange_diamond: ➯ **Never ask to unban or unmute anyone without proper proofs.**
:small_orange_diamond: ➯ **Self-Bots and Alt IDs are not allowed.**
:small_orange_diamond: ➯ **Take permission before join with alt ID's.**
:small_orange_diamond: ➯ **You can complaint about any mod with proofs.**
:small_orange_diamond: ➯ **Don't use ghost username (no name) in Username.**
:small_orange_diamond: ➯ **Don't Mess up with server admin or mod or Ping Them unnecessarily.**`);

message.channel.send(embed1);
    
const embed2 = new Discord.MessageEmbed()
  .setColor('ORANGE')
  .setImage('https://cdn.discordapp.com/attachments/722759592047542304/740848856811569152/IntroText_20190910_164423.gif')

message.channel.send(embed2);
    
const embed3 = new Discord.MessageEmbed()
 .setColor('ORANGE')
 .setDescription(`**__#Discord's Terms of Service &__**
**__Community Guidelines__**

**This server is running off Discord's Platform, thus we are compelled to maintain a healthy Atmosphere and ask each use to read through these.**

**Discord’s Community Guidelines :**
**https://discord.com/guidelines**

**Discord's Terms of Service :**
**https://discord.com/terms**`);

message.channel.send(embed3);
  }
  }
