module.exports = {
    name: "chat",
description: "Chatbot Lol",
alias: [],
run: async (bot, message, args, url, searchString, youtube, handleVideo, serverQueue, play) => {
  
let alexa = require('alexa-bot-api');
let ai = new alexa("aw2plm")

let text = args.slice(1).join(' ');
if (text.length < 1) return message.reply('Write something to chat :|');
  
ai.getReply(text).then(reply => message.channel.send(reply))
}
}