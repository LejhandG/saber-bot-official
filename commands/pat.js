const { MessageEmbed } = require('discord.js')

module.exports = {
    name: "pat",
description: "Pat GIF",
alias: [],
run: async (bot, message, args, url, searchString, youtube, handleVideo, serverQueue, play) => {
  const helpembed = new MessageEmbed()
      .setColor("GOLD")
      .setImage("https://purrbot.site/img/sfw/pat/gif/pat")
      .setFooter("Command used by " + message.author.tag)
    message.channel.send(helpembed);
}
}