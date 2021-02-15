const { MessageEmbed } = require("discord.js")

module.exports = {
    name: "truth",
    timeout : 3000,
description: "Truth Command",
alias: [],
run: async (bot, message, args, url, searchString, youtube, handleVideo, serverQueue, play) => {
    
    let wrong = new MessageEmbed()
        .setTitle(`Command: ${bot.prefix}truth`)
        .setDescription(`
**Description:** 
Truth scroll meme format
**Usage:**
${bot.prefix}truth [text]
**Example:**
${bot.prefix}truth Lol
`)
        .setFooter(message.author.tag, message.author.avatarURL())
        .setColor(`RANDOM`);

  
  let text = args.slice(1).join(' ');
  if (text.length < 1) return message.reply(wrong);

  const helpembed = new MessageEmbed()
      .setColor("RANDOM")
      .setTitle("Truth Command")
      .setImage("https://api.devs-hub.xyz/truth?text=" + args.slice(1, args.length + 1).join("+"))
      .setFooter(message.author.tag, message.author.avatarURL())
    message.channel.send(helpembed).catch(err => {
            message.reply("An error occured");
          });
}
}
