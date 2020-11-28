const gifs = require('gifs-pro');
const { MessageEmbed } = require('discord.js')

module.exports = {
    name: "slap",
description: "Random Slap GIF",
alias: [],
run: async (bot, message, args, url, searchString, youtube, handleVideo, serverQueue, play) => {
  
    let name = args.slice(1).join(' ');
  if (name.length < 1) return message.reply('Write the name of the user to be slapped !!');
  
  const SlapGif = gifs.getSlapGif()
  
  let embed = new MessageEmbed()
  .setTitle(message.author.tag + " slapped " + args.slice(1, args.length + 1).join(" "))
  .setImage(SlapGif)
  .setColor("RANDOM")
  .setFooter("Command used by " + message.author.tag)
  message.channel.send(embed)
}
}