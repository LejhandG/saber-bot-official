const { MessageEmbed } = require("discord.js")

module.exports = {
    name: "dog",
description: "Cute Dog",
alias: [],
run: async (bot, message, args, url, searchString, youtube, handleVideo, serverQueue, play) => {

  const helpembed = new MessageEmbed()
      .setColor("RANDOM")
      .setImage("https://api.yuudev.tk/dog")
      .setFooter("Command used by " + message.author.tag)
    message.channel.send(helpembed);
}
}
