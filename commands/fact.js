const { MessageEmbed } = require("discord.js")

module.exports = {
    name: "fact",
description: "Fact Commands",
alias: [],
run: async (bot, message, args, url, searchString, youtube, handleVideo, serverQueue, play) => {
  
  let name = args.slice(1).join(' ');
  if (name.length < 1) return message.reply('Write some text to make it a fact !!');

  const helpembed = new MessageEmbed()
      .setColor("RANDOM")
      .setImage("https://api.alexflipnote.dev/facts?text=" + args.slice(1, args.length + 1).join("+"))
      .setFooter("Command used by " + message.author.tag)
    message.channel.send(helpembed);
}
}
