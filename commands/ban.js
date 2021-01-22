module.exports = {
  name: "ban",
  description: "Ban user",
  alias: [],
  run: async (bot, message, args, url, searchString, youtube, handleVideo, serverQueue, play) => {
    
    let wrong = new MessageEmbed()
        .setTitle(`Command: /ban`)
        .setDescription(`
**Description:** 
It bans the user from the server
**Usage:**
/ban [user] [reason]
**Example:**
/ban @Vortex They were bad
`)
    .setFooter(message.author.tag, message.author.avatarURL())
        .setColor(`RANDOM`);
    
    if(!message.member.hasPermission("BAN_MEMBERS")) return message.reply("You don't have premission to do that!");
    
    const user = message.mentions.users.first();
    let reason1 = args.slice(2).join(' ');
    
    let banlog = new MessageEmbed()
        .setTitle(`Member Banned`)
        .setDescription(`
**Member Banned** - ${user}
**Moderator** - ${message.author.tag}
**Reason** - ${reason1}
`)
    .setFooter(message.author.tag, message.author.avatarURL())
        .setColor(`RANDOM`);

    if (user === message.author) return message.channel.send("You can't ban yourself.");

    if (user) {
      const member = message.guild.member(user);
      if (member) {
        member
          .ban({
            reason: reason1
          })
          .then(() => {
            message.reply(banlog);
          })
          .catch(err => {
            message.reply("I was unable to ban the member");
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
