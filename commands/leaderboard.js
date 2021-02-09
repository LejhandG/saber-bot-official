const Discord = require("discord.js");
const Levels = require("discord-xp");
const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "leaderboard",
    timeout : 10000,
    description: "Sends the leaderboard of the guild",
    alias: ["lb"],
    run: async (bot, message, args, url, searchString, youtube, handleVideo, serverQueue, play) => {
    const rawLeaderboard = await Levels.fetchLeaderboard(message.guild.id, 5);
    if (rawLeaderboard.length < 1) return message.reply("Nobodys in leaderboard yet.");
    
    const leaderboard = await Levels.computeLeaderboard(bot, rawLeaderboard);
    
    const lb = leaderboard.map(e => `${e.position}. ${e.username}#${e.discriminator}\nLevel: ${e.level}\nXP: ${e.xp.toLocaleString()}`);
    
    message.channel.send(`${lb.join("\n\n")}`, { split: true})
    }
  }
