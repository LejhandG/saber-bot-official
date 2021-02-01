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
      .setTitle("Cutecat Command 🐱")
      .setImage("https://cataas.com/cat?" + random.int(min, max))
      .setFooter(message.author.tag, message.author.avatarURL())
    message.channel.send(helpembed);
}
}
