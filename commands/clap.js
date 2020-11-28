const gifs = require('gifs-pro');
const { MessageEmbed } = require('discord.js')

module.exports = {
    name: "clap",
description: "Random Clap GIF",
alias: [],
run: async (bot, message, args, url, searchString, youtube, handleVideo, serverQueue, play) => {
  
  let name = args.slice(1).join(' ');
  if (name.length < 1) return message.reply('Write name of some user to clap for !!');
  
  const ClapGif = gifs.getClapGif()
  
  let embed = new MessageEmbed()
  .setTitle(message.author.tag + " clapped for " + args.slice(1, args.length + 1).join(" "))
  .setImage(ClapGif)
  .setColor("RANDOM")
  .setFooter("Command used by " + message.author.tag)
  message.channel.send(embed)
}
}