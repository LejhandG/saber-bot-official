const db = require("quick.db")
const Discord = require("discord.js")

module.exports = {
  name: "ban",
  description: "Ban user",
  alias: [],
  run: async (bot, message, args, url, searchString, youtube, handleVideo, serverQueue, play) => {
    
    if(!message.member.hasPermission("BAN_MEMBERS")) return message.reply("You don't have premission to do that!");
    
    const user = message.mentions.users.first();
    let reason1 = args.slice(2).join(' ');

    if (user === message.author) return message.channel.send("You can't ban yourself.");

    if (user) {
      const member = message.guild.member(user);
      if (member) {
        member
          .ban({
            reason: reason1
          })
          .then(() => {
            message.reply(`Successfully banned ${user.tag}`);
          })
          .catch(err => {
            message.reply("I was unable to ban the member");
            console.error(err);
          
          let wChan = db.fetch(`${member.guild.id}`)
	
	        if(wChan == null) return;
	
	        if(!wChan) return;
          
                    try{
  member.guild.channels.get(wChan).send() //Send the image to the channel
  }catch(e){
  }
          });
      } else {
        message.reply("That user isn't in this guild!");
      }
    } else {
      message.reply("You didn't mention the user to ban!");
    }
  }
}
