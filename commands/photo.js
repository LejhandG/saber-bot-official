const { MessageEmbed } = require("discord.js")

module.exports = {
    name: "photo",
    timeout : 3000,
description: "Photo Command",
alias: [],
run: async (bot, message, args, url, searchString, youtube, handleVideo, serverQueue, play) => {
  
    let user = message.mentions.users.first()
    if (!user) user = message.author

    let avatar = user.displayAvatarURL({ format: 'png' });

  const helpembed = new MessageEmbed()
      .setColor("RANDOM")
      .setTitle("Photo Command")
      .setImage("https://vacefron.nl/api/wolverine?user=" + avatar)
      .setFooter(message.author.tag, message.author.avatarURL())
    message.channel.send(helpembed).catch(err => {
            message.reply("An error occured");
          });
}
}
