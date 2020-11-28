const { MessageEmbed } = require('discord.js')

module.exports = {
    name: "mcachiv",
description: "MC Achievement",
alias: [],
run: async (bot, message, args, url, searchString, youtube, handleVideo, serverQueue, play) => {
  
  let name = args.slice(1).join(' ');
  if (name.length < 1) return message.reply('Write some text to make it an minecraft achivement !!');
  
  const helpembed = new MessageEmbed()
      .setColor("RANDOM")
      .setTitle("New Achievement!")
      .setImage("https://minecraftskinstealer.com/achievement/2/New+achievement%21/" + args.slice(1, args.length + 1).join(" "))
      .setFooter("Command used by " + message.author.tag)
    message.channel.send(helpembed);
}
}