const { MessageEmbed } = require("discord.js")

module.exports = {
    name: "covid",
description: "Shows the covid stats of the region",
alias: [],
run: async (bot, message, args, url, searchString, youtube, handleVideo, serverQueue, play) => {
  
    let name = args.slice(1).join(' ');
  if (name.length < 1) return message.reply('Write the name of the country !!');

  const helpembed = new MessageEmbed()
      .setColor("RANDOM")
      .setImage("https://covid-img.herokuapp.com/country/" + args.slice(1, args.length + 1).join("+")
      .setFooter("Command used by " + message.author.tag)
    message.channel.send(helpembed);
}
}
