const { MessageEmbed } = require('discord.js')

module.exports = {
  name: "avatar",
  description: "Show your avatar",
  alias: ["ava", "avatar", "av"],
  run: async (bot, message, args, url, searchString, youtube, handleVideo, serverQueue, play) => {
    let user = message.mentions.users.first()
  if (!user) user = message.author

  let avatar = user.displayAvatarURL({size: 4096, dynamic: true});
  let pngavatar = user.displayAvatarURL({ format: 'png' });
  let jpgavatar = user.displayAvatarURL({ format: 'jpg' });

  let embed = new MessageEmbed()
  .setAuthor(`${user.tag}`, user.displayAvatarURL({size: 4096}))
  .setDescription(`
  **❯** [Avatar URL of **${user.tag}**](${avatar})
  **❯** [Png Avatar URL of **${user.tag} avatar **](${pngavatar})
  **❯** [Jpg URL of **${user.tag} avatar**](${jpgavatar})
  `)
  .setImage(user.displayAvatarURL({ dynamic: true}))
  .setColor("RANDOM")
  .setFooter("Command used by " + message.author.tag)
  message.channel.send(embed)

}
  }
