const { MessageEmbed } = require('discord.js');

module.exports = {
  name: "kick",
  timeout : 10000,
  description: "Kick user",
  alias: [],
  run: async (bot, message, args, url, searchString, youtube, handleVideo, serverQueue, play) => {
    
    if(!message.member.hasPermission("KICK_MEMBERS")) return message.reply("You don't have permission to do that!");
    
    const member = message.mentions.users.first();
    if(!member) return message.reply("Please mention a member to kick!");
    
    let banUser = message.mentions.members.first();
    let bannerHighRole = message.member.roles.highest.position;
    let getBannedHighRole = banUser.roles.highest.position;
    if (bannerHighRole < getBannedHighRole) return message.reply("You cannot kick users that have higher roles than you!");
//you had x = y, which is an assignment
    if (bannerHighRole === getBannedHighRole) return message.reply("You cannot kick users that have same highest role!");
    
    const reason = args.slice(2).join(" ") || "No Reason Provided";
    
    member.kick({ reason });
    message.channel.send(`Kicked ${member} for ${reason}`);
  },
};
