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
      .setImage("https://wttr.in/" + args.slice(1, args.length + 1).join(" ") + ".png?m")
      .setFooter("Command used by " + message.author.tag)
    message.channel.send(helpembed);
}
}