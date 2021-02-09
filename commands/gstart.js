const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js');

module.exports = {
  name: "gstart",
  timeout : 3000,
  description: "Starts the giveaway",
  alias: [],
  run: async (bot, message, args, url, searchString, youtube, handleVideo, serverQueue, play) => {
  
  const channel = message.mentions.channels.first();
        await bot.giveaways.startGiveaway({
            prize: 'Discord Nitro Classic',
            channelId: channel.id,
            guildId: message.guild.id,
            duration: 30000, // 30 Seconds
            winners: 1, // 1 winner
            hostedBy: message.author.id
        });
  }
}
