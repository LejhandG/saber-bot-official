const Discord = require("discord.js");
const client = new Discord.Client();
const DBL = require("dblapi.js");
const dbl = new DBL('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijc1MTA3OTY0Mzk4MDg5MDIyNSIsImJvdCI6dHJ1ZSwiaWF0IjoxNjA3Mjc1ODQwfQ.3jq8XhAoxzjXFDuoty8d5on2EV7jjDhAmAqLfmOeyxc', client);

module.exports = {
    name: "chat",
description: "Chatbot Lol",
alias: [],
run: async (bot, message, args, url, searchString, youtube, handleVideo, serverQueue, play) => {
  
let alexa = require('alexa-bot-api');
let ai = new alexa("aw2plm")

const user = message.author;

dbl.hasVoted(user.id).then(voted => {
    if (voted) {

let text = args.slice(1).join(' ');
if (text.length < 1) return message.reply('Write something to chat :|');
  
ai.getReply(text).then(reply => message.channel.send(reply))

    }
    
    else {
        const exampleEmbed = new Discord.MessageEmbed()
        .setTitle("Vote Feature")
        .setThumbnail(user.displayAvatarURL({size: 4096, dynamic: true}))
        .setColor("ORANGE")
        .setDescription(`
        Because this command uses an premium API. it is locked for Saber Voted users only. You can vote Saber on the Topgg page [here](http://bit.ly/sabervote) to get access to this command.
        `)
        message.channel.send(exampleEmbed)
    }
});
}
}
