const solenolyrics= require("solenolyrics");
const { MessageEmbed } = require("discord.js")

module.exports = {
    name: "lyrics",
    timeout : 3000,
description: "Shows the lyrics of the song",
alias: ["lyric"],
run: async (bot, message, args, url, searchString, youtube, handleVideo, serverQueue, play) => {
    
    let wrong = new MessageEmbed()
        .setTitle(`Command: ${bot.prefix}lyrics`)
        .setDescription(`
**Description:** 
Sends the lyrics of the mentioned song
**Usage:**
${bot.prefix}lyrics [song name]
**Example:**
${bot.prefix}lyrics Rap God
`)
        .setFooter(message.author.tag, message.author.avatarURL())
        .setColor(`RANDOM`);
    
  let name = args.slice(1).join(' ');
  if (name.length < 1) return message.reply(wrong);
  
  var lyrics = await solenolyrics.requestLyricsFor(args.slice(1, args.length + 1).join(" "));
  message.channel.send(lyrics, { split: true }).catch(err => {
            message.reply("Not able to find the song");
          });
}
}
