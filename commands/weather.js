const { MessageEmbed } = require("discord.js")

module.exports = {
    name: "weather",
description: "Shows the weather of the region",
alias: [],
run: async (bot, message, args, url, searchString, youtube, handleVideo, serverQueue, play) => {
  
    let name = args.slice(1).join(' ');
  if (name.length < 1) return message.reply('Write the name of the city !!');

  const helpembed = new MessageEmbed()
      .setColor("RANDOM")
      .setTitle("Weather of " + name )
      .setImage("https://wttr.in/" + args.slice(1, args.length + 1).join("+") + ".png?m")
      .setFooter(message.author.tag, message.author.avatarURL())
    message.channel.send(helpembed);
}
}
