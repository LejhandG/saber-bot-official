const child = require("child_process")

module.exports = {
    name: "restart",
description: "Restarts bot",
alias: [],
run: async (bot, message, args, url, searchString, youtube, handleVideo, serverQueue, play) => {

if(message.author.id !== '565483539500367884') return message.reply("You do not have the permission to use the command !");

  child.exec("pm2 restart 0")
  
  message.channel.send("Bot restarting")
}
}
