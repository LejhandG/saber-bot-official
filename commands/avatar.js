const { MessageEmbed } = require('discord.js')

module.exports = {
  name: "avatar",
  description: "Show your avatar",
  alias: ["ava", "avatar", "av"],
  run: async (bot, message, args, url, searchString, youtube, handleVideo, serverQueue, play) => {
    let user = message.mentions.users.first()
  if (!user) user = message.author




  let embed = new MessageEmbed()
  .setAuthor(`${user.tag}`, user.displayAvatarURL({size: 2048}))
  .setImage(user.displayAvatarURL({ dynamic: true}))
  .setColor("RANDOM")
  .setFooter("Command used by " + message.author.tag)
  message.channel.send(embed)

}
  }