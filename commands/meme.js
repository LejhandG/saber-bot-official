const { MessageEmbed } = require("discord.js")
const random = require('random')

module.exports = {
    name: "meme",
description: "Meme Commands",
alias: [],
run: async (bot, message, args, url, searchString, youtube, handleVideo, serverQueue, play) => {
  
const min = 1
const max = 500

  const helpembed = new MessageEmbed()
      .setColor("RANDOM")
      .setImage("https://ctk-api.herokuapp.com/meme/" + random.int(min, max))
      .setFooter("Command used by " + message.author.tag)
    message.channel.send(helpembed);
}
}