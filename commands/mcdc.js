const { MessageEmbed } = require("discord.js")

module.exports = {
    name: "mcdc",
description: "Minecraft Disconnect",
alias: [],
run: async (bot, message, args, url, searchString, youtube, handleVideo, serverQueue, play) => {
  
    let name = args.slice(1).join(' ');
  if (name.length < 1) return message.reply('Write some text !!');

  const helpembed = new MessageEmbed()
      .setColor("RANDOM")
      .setImage("https://useless-api.vierofernando.repl.co/disconnected?text=" + args.slice(1, args.length + 1).join("+"))
      .setFooter("Command used by " + message.author.tag)
    message.channel.send(helpembed);
}
}
