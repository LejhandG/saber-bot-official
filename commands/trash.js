const { MessageEmbed } = require("discord.js")

module.exports = {
    name: "trash",
description: "Trash Command",
alias: [],
run: async (bot, message, args, url, searchString, youtube, handleVideo, serverQueue, play) => {
  
    let user = message.mentions.users.first()
    if (!user) user = message.author

    let avatar = user.displayAvatarURL({ format: 'png' });

  const helpembed = new MessageEmbed()
      .setColor("RANDOM")
      .setTitle("Trash Command")
      .setImage("https://api.no-api-key.com/api/v2/trash?image=" + avatar)
      .setFooter(message.author.tag, message.author.avatarURL())
    message.channel.send(helpembed);
}
}
