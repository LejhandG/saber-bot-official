const { MessageEmbed } = require("discord.js")
const random = require('random')

module.exports = {
    name: "dog",
description: "Dog Commands",
alias: [],
run: async (bot, message, args, url, searchString, youtube, handleVideo, serverQueue, play) => {
  
const min = 1
const max = 100

  const helpembed = new MessageEmbed()
      .setColor("RANDOM")
      .setTitle("Cute Dogs 🐶")
      .setImage("https://atlanta.x-h.fr/api/pets/dog/" + random.int(min, max))
      .setFooter(message.author.tag, message.author.avatarURL())
    message.channel.send(helpembed);
}
}
