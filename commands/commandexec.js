const child = require("child_process")

module.exports = {
    name: "commandexec",
    timeout : 3000,
description: "Command Execution for Owner",
alias: [],
run: async (bot, message, args, url, searchString, youtube, handleVideo, serverQueue, play) => {

if(message.author.id !== 'YOUR ID') return message.reply("You do not have the permission to use the command !");

  child.exec(args.slice(1).join(" "))
  
  message.channel.send("**Command Executed**")
}
}
