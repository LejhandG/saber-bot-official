const { MessageEmbed } = require("discord.js")

module.exports = {
    name: "nuke",
    timeout : 8000,
description: "Nukes the channel",
alias: [],
run: async (bot, message, args, url, searchString, youtube, handleVideo, serverQueue, play) => {
if (!message.member.hasPermission("MANAGE_CHANNELS")) {
    return message.reply('You Don\'t Have **Permissions** to execute This Command!')
    }
    let channel = bot.channels.cache.get(message.channel.id)
var pos = channel.position;
  
  
  channel.clone().then((channel2) => {
    channel2.setPosition(pos)
    channel.delete()
    channel2.send("The Channel Has been nuked!",{
    files: ['https://media.tenor.com/images/0754697c9c4dd44ca8504dbf1b36b927/tenor.gif']
    })
  })
}
}
