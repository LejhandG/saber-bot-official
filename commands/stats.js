const Discord = require('discord.js');
const os = require('os');
const ms = require("pretty-ms");

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
    let uptime = ms(bot.uptime, {verbose:true})
    let version = os.version();
    let tomem = os.totalmem() / 1048576;
    let freemem = os.freemem() / 1048576;
    let data = 0;
    bot.guilds.cache.map(x => data = data + (x.memberCount))

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
    .addField('Free Memory', `${freemem} mb`, true)
    .addField('Total Memory', `${tomem} mb`, true)
    .addField('Total Users', `${data}`, true)
    .setTimestamp()
    .setFooter(`${message.author.tag}`, message.author.displayAvatarURL());
    message.channel.send(stats);
}
}
