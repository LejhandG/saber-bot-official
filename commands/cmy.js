const { MessageEmbed } = require("discord.js")

module.exports = {
    name: "cmy",
description: "Change My Mind",
alias: [],
run: async (bot, message, args, url, searchString, youtube, handleVideo, serverQueue, play) => {
  
  let text = args.slice(1).join(' ');
  if (text.length < 1) return message.reply('Write some text !!');

  const helpembed = new MessageEmbed()
      .setColor("RANDOM")
      .setImage("https://vacefron.nl/api/changemymind?text=" + args.slice(1, args.length + 1).join(" "))
      .setFooter("Command used by " + message.author.tag)
    message.channel.send(helpembed);
}
}