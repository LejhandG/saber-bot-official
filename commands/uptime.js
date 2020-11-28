const ms = require("pretty-ms")
const { MessageEmbed } = require("discord.js")

module.exports = {
    name: "uptime",
description: "Shows the uptime of the bot",
alias: [],
run: async (bot, message, args, url, searchString, youtube, handleVideo, serverQueue, play) => {
  const uptime = ms(bot.uptime, {verbose:true})
  const embed = new MessageEmbed()
  .addField("Bot Uptime", uptime)
  .setColor("RANDOM")
  .setFooter("Command used by " + message.author.tag)
  
  message.channel.send(embed)
}
}