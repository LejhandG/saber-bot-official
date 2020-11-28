const { MessageEmbed } = require('discord.js')

module.exports = {
    name: "amongus",
description: "Among Us Command",
alias: [],
run: async (bot, message, args, url, searchString, youtube, handleVideo, serverQueue, play) => {
  
  let code = args.slice(1).join(' ');
  if (code.length < 1) return message.reply('Write the party code.');
  
  let region = args.slice(2).join(' ');
  if (region.length < 1) return message.reply('Write the region of the server .');
  
  let vcinvite = args.slice(3).join(' ');
  if (vcinvite.length < 1) return message.reply('Give the voice channel invite link .');

  let join = args[3]

  let embed = new MessageEmbed()
  .setColor("RANDOM")
  .setTitle(message.author.tag + " is looking for party members!")
  .setDescription("If you want to make your own party, type `/amongus [code] [region] [vcinvite]` right here.")
  .addFields(
		{ name: 'Click to join party', value: join },
		{ name: 'Code', value: args[1] },
		{ name: 'Region', value: args[2] },
	)
  .setTimestamp()
  .setFooter("Command used by " + message.author.tag)
  
  message.channel.send(embed)
}
}