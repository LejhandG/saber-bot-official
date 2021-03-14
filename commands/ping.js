const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js');

module.exports = {
  name: "ping",
  timeout : 3000,
  description: "Show bot's ping",
  alias: [],
  run: async (bot, message, args, url, searchString, youtube, handleVideo, serverQueue, play) => {
            const msg = await message.channel.send(`🏓 Pinging...`)
            const embed = new MessageEmbed()
            .setTitle('Pong!')
            .setDescription(`WebSocket ping is ${bot.ws.ping}MS\nMessage edit ping is ${Math.floor(msg.createdAt - message.createdAt)}MS!`)
            await message.channel.send(embed)
            msg.delete()
  }
}
