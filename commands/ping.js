const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js');

module.exports = {
  name: "ping",
  description: "Show bot's ping",
  alias: [],
  run: async (bot, message, args, url, searchString, youtube, handleVideo, serverQueue, play) => {
    
    const time = require('ms')

let inline = true

const pingMessage = await message.channel.send("Here are my Latency and API Latency");

const Embede = new Discord.MessageEmbed()
.addField("My Latency is:", `${pingMessage.createdTimestamp - message.createdTimestamp}ms`, inline)
.setColor("#11bed3")
.addField("My API Latency is:", `${Math.round(bot.ws.ping)}ms`, inline)

Embede.setTimestamp()
message.channel.send(Embede).catch(err => {
            message.reply("An error occured");
          });
  }
}
