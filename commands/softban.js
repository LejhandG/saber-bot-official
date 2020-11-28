const { MessageEmbed } = require('discord.js')

module.exports = {
    name: "softban",
description: "Sofbans user",
alias: [],
run: async (bot, message, args, url, searchString, youtube, handleVideo, serverQueue, play) => {
  if (!message.member.hasPermission("BAN_MEMBERS")) {
  message.reply('You do not have the required permission to use this.')
  return;
}


let user = message.mentions.users.first() || message.guild.members.find(mem => mem.user.username.toLowerCase() === args.join(" ").toLowerCase())


if (!user) return message.reply('Invalid arguments, could not find the user.')




message.reply('***' + user.tag + '*** has been softbanned, they may now join back.')
user.send('You have been softbanned from ' + message.guild.name + ', you may now join back.')
setTimeout(() => {
message.guild.member(user).ban()
}, 1000)
    
   



}
}