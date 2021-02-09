const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js');
const ms = require('ms');

module.exports = {
  name: "gstart",
  timeout : 5000,
  description: "Starts the giveaway",
  alias: [],
  run: async (bot, message, args, url, searchString, youtube, handleVideo, serverQueue, play) => {
    
    let wrong = new MessageEmbed()
        .setTitle(`Command: ${bot.prefix}gstart`)
        .setDescription(`
**Description:** 
Starts the giveaway
**Usage:**
${bot.prefix}gstart [channel-name] [Time] [winners] [Prize]
**Example:**
${bot.prefix}gstart #giveaways 1d 1 Nitro
`)
        .setFooter(message.author.tag, message.author.avatarURL())
        .setColor(`RANDOM`);
    
  if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("You don't have premission to do that!");
    
    let priz = args.slice(4).join(" ")
    let time = ms(args[2])
    let winerz = args[3]
  
  const channel = message.mentions.channels.first();
    
    if (!channel) return message.channel.send(wrong)
    if (!priz) return message.reply(wrong);
    if (!time) return message.reply(wrong);
    if (!winerz) return message.reply(wrong);
    
        await bot.giveaways.startGiveaway({
            prize: priz,
            channelId: channel.id,
            guildId: message.guild.id,
            duration: time, // 30 Seconds
            winners: winerz, // 1 winner
            hostedBy: message.author.id
        });
  }
}
