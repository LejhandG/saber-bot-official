const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js')

module.exports = {
    name: "review",
    timeout : 43200000,
description: "Feedback Command",
alias: [],
run: async (bot, message, args, url, searchString, youtube, handleVideo, serverQueue, play) => {
  const hook = new Discord.WebhookClient('780686982330187787', 'KmqJzE7BDFotIswozhUqCRFfWH_Sk0Kd4kkslYnldYXEKv9oVdSR4Di_uceipsEAOZDL');
  
  let user = message.guild.members.cache.get(args[0])
  if (!user) user = message.author
  
  let name = args.slice(1).join(' ');
  if (name.length < 1) return message.reply('Write a review !!');
  
  let embed = new MessageEmbed()
    .setTitle("Review")
    .setAuthor(user.tag, user.displayAvatarURL())
    .setDescription(args.slice(1, args.length + 1).join(" "))
    .setThumbnail(user.displayAvatarURL())
    .setTimestamp()
    .setFooter(user.id)
    .setColor("RANDOM")
  
  hook.send(embed)
  message.react('✅');
  
  let dmsEmbed = new Discord.MessageEmbed()
  .setTitle("Review")
  .setColor("RANDOM")
  .setDescription("Thank you for giving us your feedback !!. To suggest any commands use `/suggest [command name]`.")
  .setFooter("Your review - " + args.slice(1, args.length + 1).join(" "))

user.send(dmsEmbed);
}
}
