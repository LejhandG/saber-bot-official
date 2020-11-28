const { MessageEmbed } = require("discord.js")
const random = require('random')

module.exports = {
    name: "duck",
description: "Duck Commands",
alias: [],
run: async (bot, message, args, url, searchString, youtube, handleVideo, serverQueue, play) => {
  
const min = 1
const max = 131

  const helpembed = new MessageEmbed()
      .setColor("RANDOM")
      .setImage("https://random-d.uk/api/v2/" + random.int(min, max) + ".jpg")
      .setFooter("Command used by " + message.author.tag)
    message.channel.send(helpembed);
}
}