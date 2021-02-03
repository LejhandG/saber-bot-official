const { MessageEmbed } = require("discord.js")

module.exports = {
    name: "watermeme",
description: "WaterMeme",
alias: [],
run: async (bot, message, args, url, searchString, youtube, handleVideo, serverQueue, play) => {
  
    let name = args.slice(1).join(' ');
  if (name.length < 1) return message.reply('Write some text !!');

  const helpembed = new MessageEmbed()
      .setColor("RANDOM")
      .setTitle("Watermeme Command")
      .setImage("https://vacefron.nl/api/water?text=" + args.slice(1, args.length + 1).join("+"))
      .setFooter(message.author.tag, message.author.avatarURL())
    message.channel.send(helpembed);
}
}
