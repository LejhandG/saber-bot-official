const { MessageEmbed } = require("discord.js")
const random = require('random')

module.exports = {
    name: "cat",
description: "Cute Cat Commands",
alias: ["cutecat"],
run: async (bot, message, args, url, searchString, youtube, handleVideo, serverQueue, play) => {
  
const min = 1
const max = 99999999

  const helpembed = new MessageEmbed()
      .setColor("RANDOM")
      .setImage("https://cataas.com/cat?" + random.int(min, max))
      .setFooter("Command used by " + message.author.tag)
    message.channel.send(helpembed);
}
}
