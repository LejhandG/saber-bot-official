const { MessageEmbed } = require("discord.js")

module.exports = {
    name: "blueify",
description: "Blueify Command",
alias: [],
run: async (bot, message, args, url, searchString, youtube, handleVideo, serverQueue, play) => {
  
    let user = message.mentions.users.first()
    if (!user) user = message.author

    let avatar = user.displayAvatarURL({ format: 'png' });

  const helpembed = new MessageEmbed()
      .setColor("RANDOM")
      .setImage("https://api.no-api-key.com/api/v2/blueify?image=" + avatar)
      .setFooter("Command used by " + message.author.tag)
    message.channel.send(helpembed);
}
}
