const { MessageEmbed } = require('discord.js');

module.exports = {
  name: "kick",
  timeout : 10000,
  description: "Kick user",
  alias: [],
  run: async (bot, message, args, url, searchString, youtube, handleVideo, serverQueue, play) => {
    
    if(!message.member.hasPermission("KICK_MEMBERS")) return message.reply("You don't have permission to do that!");
    
    const user = message.mentions.users.first();

    if (user === message.author) return message.channel.send("You can't kick yourself.");
    
    let wrong = new MessageEmbed()
        .setTitle(`Command: ${bot.prefix}kick`)
        .setDescription(`
**Description:** 
Kicks the member from the guild
**Usage:**
${bot.prefix}kick [user]
**Example:**
${bot.prefix}kick @Vortex
`)
        .setFooter(message.author.tag, message.author.avatarURL())
        .setColor(`RANDOM`);
    
    if(!user) return message.reply("Please mention someone to kick");
    
    if(
      message.member.roles.highest.position <=
      message.roles.highest.position
    )
      return message.reply(
        "You cant punish because you share the same role or have a lower role"
      );
    
    const reason = args.slice(2).join(" ") || "No Reason Provided";
    
    user.kick({ reason });
    message.channel.send(`Kicked ${user} for ${reason}`);
  },
};
