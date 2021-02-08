const { MessageEmbed } = require("discord.js")

module.exports = {
    name: "buzz",
    timeout : 3000,
description: "Buzz Command",
alias: ["bzz", "bz"],
run: async (bot, message, args, url, searchString, youtube, handleVideo, serverQueue, play) => {
    
    let wrong = new MessageEmbed()
        .setTitle(`Command: ${bot.prefix}buzz`)
        .setDescription(`
**Description:** 
Adds text to toy story meme
**Usage:**
${bot.prefix}buzz [text]
**Example:**
${bot.prefix}buzz Hello
`)
        .setFooter(message.author.tag, message.author.avatarURL())
        .setColor(`RANDOM`);
    
  let text = args.slice(1).join(' ');
  if (text.length < 1) return message.reply(wrong);

  const helpembed = new MessageEmbed()
      .setTitle("Buzz Command")
      .setColor("RANDOM")
      .setImage("https://api.memegen.link/images/buzz/" + args.slice(1, args.length + 1).join("_") + ".png")
      .setFooter(message.author.tag, message.author.avatarURL())
    message.channel.send(helpembed).catch(err => {
            message.reply("An error occured");
          });
}
}
