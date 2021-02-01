const { MessageEmbed } = require("discord.js")
const random = require('random')

module.exports = {
    name: "cry",
description: "Cry Commands",
alias: ["sob"],
run: async (bot, message, args, url, searchString, youtube, handleVideo, serverQueue, play) => {
  
const min = 1
const max = 40

  const helpembed = new MessageEmbed()
      .setColor("RANDOM")
      .setTitle(message.author.tag + " is crying")
      .setImage("https://leref.ga/api/public/cry/" + random.int(min, max) + ".gif")
      .setFooter(message.author.tag, message.author.avatarURL())
    message.channel.send(helpembed);
}
}
