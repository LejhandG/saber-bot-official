const ms = require("pretty-ms")
const { MessageEmbed } = require("discord.js")

module.exports = {
    name: "uptime",
    timeout : 3000,
description: "Shows the uptime of the bot",
alias: [],
run: async (bot, message, args, url, searchString, youtube, handleVideo, serverQueue, play) => {
  const uptime = ms(bot.uptime, {verbose:true})
  const embed = new MessageEmbed()
  .addField("Bot Uptime", uptime)
  .setColor("RANDOM")
  .setFooter(message.author.tag, message.author.avatarURL())
  
  message.channel.send(embed)
}
}
