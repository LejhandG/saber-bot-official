const { MessageEmbed } = require("discord.js")

module.exports = {
    name: "blueify",
    timeout : 3000,
description: "Blueify Command",
alias: ["blue"],
run: async (bot, message, args, url, searchString, youtube, handleVideo, serverQueue, play) => {
  
    let user = message.mentions.users.first()
    if (!user) user = message.author

    let avatar = user.displayAvatarURL({ format: 'png' });

  const helpembed = new MessageEmbed()
      .setColor("RANDOM")
      .setTitle("Blueify Command")
      .setImage("https://api.no-api-key.com/api/v2/blueify?image=" + avatar)
      .setFooter(message.author.tag, message.author.avatarURL())
    message.channel.send(helpembed).catch(err => {
            message.reply("An error occured");
          });
}
}
