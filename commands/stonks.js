const { MessageEmbed } = require("discord.js")

module.exports = {
    name: "stonks",
    timeout : 3000,
description: "Stonks Command",
alias: [],
run: async (bot, message, args, url, searchString, youtube, handleVideo, serverQueue, play) => {
  
    let user = message.mentions.users.first()
    if (!user) user = message.author

    let avatar = user.displayAvatarURL({ format: 'png' });

  const helpembed = new MessageEmbed()
      .setColor("RANDOM")
      .setTitle("Stonks Command")
      .setImage("https://vacefron.nl/api/stonks?user=" + avatar)
      .setFooter(message.author.tag, message.author.avatarURL())
    message.channel.send(helpembed);
}
}
