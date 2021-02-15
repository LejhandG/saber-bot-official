const { MessageEmbed } = require("discord.js")

module.exports = {
    name: "peepobanner",
    timeout : 3000,
description: "Peepo Banner",
alias: [],
run: async (bot, message, args, url, searchString, youtube, handleVideo, serverQueue, play) => {
    
    let wrong = new MessageEmbed()
        .setTitle(`Command: ${bot.prefix}peepobanner`)
        .setDescription(`
**Description:** 
Peepo holds a banner with your text
**Usage:**
${bot.prefix}peepobanner [text]
**Example:**
${bot.prefix}peepobanner Lol
`)
        .setFooter(message.author.tag, message.author.avatarURL())
        .setColor(`RANDOM`);

  
  let text = args.slice(1).join(' ');
  if (text.length < 1) return message.reply(wrong);

  const helpembed = new MessageEmbed()
      .setColor("RANDOM")
      .setTitle("Peepobanner Command")
      .setImage("https://gofaizen.sirv.com/Peepo%20sign%20template.jpeg?text.0.text=" + args.slice(1, args.length + 1).join("+") + "&text.0.position.gravity=center&text.0.position.y=-25%25&text.0.color=000000")
      .setFooter(message.author.tag, message.author.avatarURL())
    message.channel.send(helpembed).catch(err => {
            message.reply("An error occured");
          });
}
}
