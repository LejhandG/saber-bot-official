const { MessageEmbed } = require('discord.js')
const Discord = require('discord.js')

module.exports = {
    name: "snipe",
    timeout : 3000,
description: "Shows the deleted message in the channel",
alias: [],
run: async (bot, message, args, url, searchString, youtube, handleVideo, serverQueue, play) => {
    const msg = bot.snipes.get(message.channel.id)
    if(!msg) return message.channel.send("There are no deleted messages in this channel!")
    const embed = new Discord.MessageEmbed()
    .setAuthor(msg.author)
    .setDescription(msg.content)
    .setColor("RANDOM")
    .setFooter(message.author.tag, message.author.avatarURL())
    if(msg.image)embed.setImage(msg.image)
    
    message.channel.send(embed)
}
}
