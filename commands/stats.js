const Discord = require('discord.js');
const os = require('os');

module.exports = {
    name: "stats",
description: "Shows the stats of the bot",
alias: [],
run: async (bot, message, args, url, searchString, youtube, handleVideo, serverQueue, play) => {
  
    let servercount = bot.guilds.cache.size;
    let channelscount = bot.channels.cache.size;
    let arch = os.arch();
    let platform = os.platform();
    let cores = os.cpus().length;
    let uptime = os.uptime();
    let version = os.version();
    let tomem = os.totalmem();

    let stats = new Discord.MessageEmbed()
    .setTitle(`Statistics of ${bot.user.username}`)
    .setColor('RED')
    .addField("Server Count", `${servercount}`, true)
    .addField("Channel's Count", `${channelscount}`, true)
    .addField('Architecture', `${arch}`, true)
    .addField('Platform', `${platform}`, true)
    .addField('Cores', `${cores}`, true)
    .addField('Uptime', `${uptime}`, true)
    .addField('Version', `${version}`, true)
    .addField('Total Memory', `${tomem}`, true)
    .setTimestamp()
    .setFooter(`${message.author.tag}`, message.author.displayAvatarURL());
    message.channel.send(stats);
}
}
