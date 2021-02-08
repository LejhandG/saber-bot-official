const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js')

module.exports = {
    name: "suggestcmd",
    timeout : 21600000,
description: "Suggest Command",
alias: [],
run: async (bot, message, args, url, searchString, youtube, handleVideo, serverQueue, play) => {
  
    let name = args.slice(1).join(' ');
  if (name.length < 1) return message.reply('Write some suggestions !!');
  
  const hook = new Discord.WebhookClient('780686781115793428', 'pQj8A0w1nZvzodMD3vnu1DtNg0tXgjZWx_EO5403covFgFhg-eZeWm6XRALO7dTfnJec');
  
  let user = message.guild.members.cache.get(args[0])
  if (!user) user = message.author
  
  if(!args.length) return message.channel.send("You did not specify your suggestion to send!")
  
  let embed = new MessageEmbed()
    .setTitle("Suggestion")
    .setAuthor(user.tag, user.displayAvatarURL())
    .setDescription(args.slice(1, args.length + 1).join(" "))
    .setThumbnail(user.displayAvatarURL())
    .setTimestamp()
    .setFooter(user.id)
    .setColor("RANDOM")
  
  hook.send(embed)
  message.react('✅');
  
  let dmsEmbed = new Discord.MessageEmbed()
  .setTitle("Suggestion")
  .setColor("RANDOM")
  .setDescription("Thank you for suggesting a command for the bot. If our developer finds it good he will add it within 4-5 working days. To give review about the bot do `/review [your review]`.")
  .setFooter("Your suggestion - " + args.slice(1, args.length + 1).join(" "))

user.send(dmsEmbed);
}
}
