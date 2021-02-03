var adfly=require("adf.ly")();

module.exports = {
    name: "shorten",
description: "Shortens a Link",
alias: [],
run: async (bot, message, args, url, searchString, youtube, handleVideo, serverQueue, play) => {
    
    let wrong = new MessageEmbed()
        .setTitle(`Command: /shorten`)
        .setDescription(`
**Description:** 
Shortens the given link
**Usage:**
/shorten [link]
**Example:**
/shorten https://youtube.com/
`)
        .setFooter(message.author.tag, message.author.avatarURL())
        .setColor(`RANDOM`);
  
  if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("You don't have premission to do that");
  
    let name = args.slice(1).join(' ');
  if (name.length < 1) return message.reply(wrong);
  
  adfly.short(args.slice(1, args.length + 1).join(" "),function(url){
    message.channel.send("Short URL is: "+url).catch(err => {
            message.reply("Not a valid link");
          });
});
}
}
