const { MessageEmbed } = require("discord.js")

module.exports = {
    name: "disgusting",
    timeout : 3000,
description: "Disgusting Command",
alias: ["eww"],
run: async (bot, message, args, url, searchString, youtube, handleVideo, serverQueue, play) => {
  
    let user = message.mentions.users.first()
    if (!user) user = message.author

    let avatar = user.displayAvatarURL({ format: 'png' });

  const helpembed = new MessageEmbed()
      .setTitle("Disgusting Command")
      .setColor("RANDOM")
      .setImage("https://useless-api--vierofernando.repl.co/disgusting?image=" + avatar)
      .setFooter(message.author.tag, message.author.avatarURL())
    message.channel.send(helpembed).catch(err => {
            message.reply("An error occured");
          });
}
}
