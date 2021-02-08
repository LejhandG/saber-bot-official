const { MessageEmbed } = require("discord.js")
const random = require('random')

module.exports = {
    name: "duck",
    timeout : 3000,
description: "Duck Commands",
alias: [],
run: async (bot, message, args, url, searchString, youtube, handleVideo, serverQueue, play) => {
  
const min = 1
const max = 131

  const helpembed = new MessageEmbed()
      .setColor("RANDOM")
      .setTitle("Duck Command")
      .setImage("https://random-d.uk/api/v2/" + random.int(min, max) + ".jpg")
      .setFooter(message.author.tag, message.author.avatarURL())
    message.channel.send(helpembed).catch(err => {
            message.reply("An error occured");
          });
}
}
