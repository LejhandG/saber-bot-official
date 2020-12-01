module.exports = {
  name: "ban",
  description: "Ban user",
  alias: [],
  run: async (bot, message, args, url, searchString, youtube, handleVideo, serverQueue, play) => {
    
    if(!message.member.hasPermission("BAN_MEMBERS")) return message.reply("You don't have premission to do that!");
    
    const user = message.mentions.users.first();

    if (user === message.author) return message.channel.send("You can't ban yourself.");

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
            console.error(err);
          });
      } else {
        message.reply("That user isn't in this guild!");
      }
    } else {
      message.reply("You didn't mention the user to ban!");
    }
  }
}
