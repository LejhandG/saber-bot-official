const { MessageEmbed } = require("discord.js")
const random = require('random')

module.exports = {
    name: "angry",
description: "Angry Commands",
alias: ["anger", "rage"],
run: async (bot, message, args, url, searchString, youtube, handleVideo, serverQueue, play) => {
  
const min = 1
const max = 37

  const helpembed = new MessageEmbed()
      .setColor("RANDOM")
      .setTitle(message.author.tag + "is very angry")
      .setImage("https://leref.ga/api/public/angry/" + random.int(min, max) + ".gif")
      .setFooter(message.author.tag, message.author.avatarURL())
    message.channel.send(helpembed);
}
}
