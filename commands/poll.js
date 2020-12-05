const Discord = require('discord.js')

module.exports = {
    name: "poll",
description: "Poll Command",
alias: [],
run: async (bot, message, args, url, searchString, youtube, handleVideo, serverQueue, play, client) => {
    
  if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("You don't have premission to do that!");
    
  let polltimer = args.slice(1).join(' ');
  if (polltimer.length < 1) return message.reply('Write the time for which the poll should be in milli-seconds !');
  
  let pollques = args.slice(2).join(' ');
  if (pollques.length < 1) return message.reply('Write something to be polled for !!');
  
message.channel.send(`:ballot_box:  ${message.author.username} started a poll! React to my next message to vote on it. :ballot_box: `);
const pollTopic = await message.channel.send(args.slice(2).join(' '));
await pollTopic.react(`✅`);
await pollTopic.react(`⛔`);
// Create a reaction collector
const filter = (reaction) => reaction.emoji.name === '✅';
const collector = pollTopic.createReactionCollector(filter, { time: args[1] });
collector.on('collect', r => message.channel.send(`Collected ${r.emoji.name}`));
collector.on('end', collected => message.channel.send(`Collected ${collected.size} items`));;
}
}
