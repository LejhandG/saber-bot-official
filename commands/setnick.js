const Discord = require('discord.js');
const client = new Discord.Client();

module.exports = {
    name: "setnick",
description: "Changes Nickname of User",
alias: [],
run: async (bot, message, args, url, searchString, youtube, handleVideo, serverQueue, play) => {
  if (!message.guild.me.hasPermission('CHANGE_NICKNAME')) return message.channel.send('I don\'t have permission to change your nickname!');
    message.member.setNickname(message.content.replace('/setnick ', ''));
    message.channel.send("Nickname changed !!")
}
}