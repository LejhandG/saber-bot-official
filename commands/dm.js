const Discord = require('discord.js');

module.exports = {
    name: "dm",
description: "Dms the user",
alias: [],
run: async (bot, message, args, url, searchString, youtube, handleVideo, serverQueue, play) => {
if(message.author.id !== '565483539500367884') return message.reply("You do not have the permission to use the command !");
let user = message.mentions.users.first();
if (message.mentions.users.size < 1) return message.reply('You must mention someone to dm them.');
let dmmessage = args.slice(2).join(' ');
if (dmmessage.length < 1) return message.reply('Write the message to dm !!');

let dmsEmbed = new Discord.MessageEmbed()
  .setTitle("Important DM")
  .setColor("#00ff00")
  .setDescription(dmmessage)
  .setFooter("Dm sent by " + message.author.tag)

user.send(dmsEmbed);

message.delete();
}
}