const { MessageEmbed } = require("discord.js")
const random = require('random')

module.exports = {
    name: "emojigen",
description: "Emojigen Commands",
alias: [],
run: async (bot, message, args, url, searchString, youtube, handleVideo, serverQueue, play) => {
  
const min = 1
const max = 7980

  const helpembed = new MessageEmbed()
      .setColor("RANDOM")
      .setImage("https://cdn.frankerfacez.com/emoticon/" + random.int(min, max) + "/1")
      .setFooter("Command used by " + message.author.tag)
    message.channel.send(helpembed);
}
}