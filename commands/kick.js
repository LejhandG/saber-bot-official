const { MessageEmbed } = require('discord.js')

module.exports = {
  name: "kick",
  description: "Kick user",
  alias: [],
  run: async (bot, message, args, url, searchString, youtube, handleVideo, serverQueue, play) => {
    
    let wrong = new MessageEmbed()
        .setTitle(`Command: /kick`)
        .setDescription(`
**Description:** 
Kicks the user from the guild
**Usage:**
/kick @user
**Example:**
/kick @Vortex
`)
        .setFooter(message.author.tag, message.author.avatarURL())
        .setColor(`RANDOM`);
    
    const user = message.mentions.users.first();
    if (user) {
      const member = message.guild.member(user);
      const modavt = message.author.displayAvatarURL({ format: 'png' });
      const victim = user.displayAvatarURL({ format: 'png' });
      if (member) {
        member
          .kick("Optional reason that will display in the audit logs")
          .then(() => {
            let embed = new MessageEmbed()
            .setTitle(`Successfully kicked ${user.tag}`)
            .setImage("https://api.no-api-key.com/api/v2/kick?&kicked=" + victim + "&kicker=" + modavt)

            message.channel.send(embed)
          })
          .catch(err => {
            message.reply("I was unable to kick the member");
            console.error(err);
          });
      } else {
        message.reply("That user isn't in this guild");
      }
    } else {
      message.reply(wrong);
    }
  }
}
