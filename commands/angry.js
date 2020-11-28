const { MessageEmbed } = require("discord.js")
const random = require('random')

module.exports = {
    name: "angry",
description: "Angry Commands",
alias: [],
run: async (bot, message, args, url, searchString, youtube, handleVideo, serverQueue, play) => {
  
const min = 1
const max = 37

  const helpembed = new MessageEmbed()
      .setColor("RANDOM")
      .setImage("https://leref.ga/api/public/angry/" + random.int(min, max) + ".gif")
      .setFooter("Command used by " + message.author.tag)
    message.channel.send(helpembed);
}
}