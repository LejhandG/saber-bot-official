const { MessageEmbed } = require('discord.js');
const db = require("quick.db");

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

    if (user) {
      const member = message.guild.member(user);
      if (member) {
        member
          .ban({
            reason: "They were bad!"
          })
          .then(() => {
            message.reply(`Successfully banned ${user.tag}`);
          })
          .catch(err => {
            message.reply("I was unable to ban the member");
          
  let modlogid = db.get(`moderation.${message.guild.id}.modlog.id`)
  let modlogtoken = db.get(`moderation.${message.guild.id}.modlog.token`)
  const hook = new Discord.WebhookClient(modlogid, modlogtoken);
  if (!hook) return;

            const embedlog = new MessageEmbed()
            .setTitle("Message Banned")
            .setDescription(`${user} was banned by ${message.author.tag}`)
            .setTimestamp()
            .setColor("ORANGE")
          
            return hook.send(embedlog)
            console.error(err);
          });
      } else {
        message.reply("That user isn't in this guild!");
      }
    } else {
      message.reply(wrong);
    }
  }
}
