const { MessageEmbed } = require('discord.js');

module.exports = {
  name: "ban",
  timeout : 10000,
  description: "Ban user",
  alias: [],
  run: async (bot, message, args, url, searchString, youtube, handleVideo, serverQueue, play) => {
    
    if(!message.member.hasPermission("BAN_MEMBERS")) return message.reply("You don't have permission to do that!");
    
    const member = message.mentions.users.first();
    if(!member) return message.reply("Please mention a member to ban!");
    
    if(
      message.member.roles.highest.position <=
      member.roles.highest.position
    )
      return message.reply(
        "You cant ban the member because you share the same role or your role is lower"
      );
    
    const reason = args.slice(2).join(" ") || "No Reason Provided";
    
    member.ban({ reason });
    message.channel.send(`Banned ${member} for ${reason}`);
  },
};
