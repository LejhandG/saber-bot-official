module.exports = {
    name: "hastebin",
description: "Hastebin Upload",
alias: [],
run: async (bot, message, args, url, searchString, youtube, handleVideo, serverQueue, play) => {
  
  if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("You don't have premission to do that!");
  
  let text = args.slice(1).join(' ');
  if (text.length < 1) return message.reply('Write some text to be uploaded !!');
  
  const Hastebin = require("hastebin-save");
Hastebin.upload(text, link => {
    message.channel.send("https://hastebin.com/" + link)
});
}
}