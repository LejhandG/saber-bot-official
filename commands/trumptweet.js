const { MessageEmbed } = require("discord.js")

module.exports = {
    name: "trumptweet",
description: "Trump Tweet",
alias: ["tweet"],
run: async (bot, message, args, url, searchString, youtube, handleVideo, serverQueue, play) => {
    
    let wrong = new MessageEmbed()
        .setTitle(`Command: /trumptweet`)
        .setDescription(`
**Description:** 
Trump tweets your text
**Usage:**
/trumptweet [text]
**Example:**
/trumptweet Hello
`)
        .setFooter(message.author.tag, message.author.avatarURL())
        .setColor(`RANDOM`);
  
  let text = args.slice(1).join(' ');
  if (text.length < 1) return message.reply(wrong);

  const helpembed = new MessageEmbed()
      .setColor("RANDOM")
      .setImage("https://api.no-api-key.com/api/v2/trump?message=" + args.slice(1, args.length + 1).join("+"))
      .setFooter(message.author.tag, message.author.avatarURL())
    message.channel.send(helpembed);
}
}
