const { MessageEmbed } = require('discord.js');

module.exports = {
  name: "ban",
  timeout : 10000,
  description: "Ban user",
  alias: [],
  run: async (bot, message, args, url, searchString, youtube, handleVideo, serverQueue, play) => {
    
    if(!message.member.hasPermission("BAN_MEMBERS")) return message.reply("You don't have permission to do that!");
    
    const user = message.mentions.users.first();

    if (user === message.author) return message.channel.send("You can't ban yourself.");
    
    let wrong = new MessageEmbed()
        .setTitle(`Command: ${bot.prefix}ban`)
        .setDescription(`
**Description:** 
Bans the member from the guild
**Usage:**
${bot.prefix}ban [user]
**Example:**
${bot.prefix}ban @Vortex
`)
        .setFooter(message.author.tag, message.author.avatarURL())
        .setColor(`RANDOM`);
    
    if(!user) return message.reply("Please mention someone to ban");
    
    if(
      message.member.roles.highest.position <=
      message.roles.highest.position
    )
      return message.reply(
        "You cant punish because you share the same role or have a lower role"
      );
    
    const reason = args.slice(2).join(" ") || "No Reason Provided";
    
    user.ban({ reason });
    message.channel.send(`Banned ${user} for ${reason}`);
  },
};
