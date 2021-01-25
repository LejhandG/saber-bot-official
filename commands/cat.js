const { MessageEmbed } = require('discord.js')

module.exports = {
    name: "cat",
description: "Cat with Text",
alias: [],
run: async (bot, message, args, url, searchString, youtube, handleVideo, serverQueue, play) => {
  
  const helpembed = new MessageEmbed()
      .setColor("RANDOM")
      .setImage("https://cataas.com/cat/says/" + args.slice(1, args.length + 1).join("+"))
      .setFooter(message.author.tag, message.author.avatarURL())
    message.channel.send(helpembed);
}
}
