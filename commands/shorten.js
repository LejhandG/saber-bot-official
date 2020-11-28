var adfly=require("adf.ly")();

module.exports = {
    name: "shorten",
description: "Shortens a Link",
alias: [],
run: async (bot, message, args, url, searchString, youtube, handleVideo, serverQueue, play) => {
  
  if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("You don't have premission to do that!");
  
    let name = args.slice(1).join(' ');
  if (name.length < 1) return message.reply('Please paste the link with the command !!');
  
  adfly.short(args.slice(1, args.length + 1).join(" "),function(url){
    message.channel.send("Short URL is: "+url);
});
}
}