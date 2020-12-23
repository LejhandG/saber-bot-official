const { MessageEmbed } = require("discord.js")

module.exports = {
    name: "buzz",
description: "Buzz Command",
alias: [],
run: async (bot, message, args, url, searchString, youtube, handleVideo, serverQueue, play) => {
  
  let text = args.slice(1).join(' ');
  if (text.length < 1) return message.reply('Write some text !!');

  const helpembed = new MessageEmbed()
      .setColor("RANDOM")
      .setImage("https://api.memegen.link/images/buzz/" + args.slice(1, args.length + 1).join(" ") + ".png")
      .setFooter("Command used by " + message.author.tag)
    message.channel.send(helpembed);
}
}