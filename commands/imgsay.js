const { MessageEmbed } = require('discord.js')

module.exports = {
    name: "imgsay",
description: "Image Text",
alias: [],
run: async (bot, message, args, url, searchString, youtube, handleVideo, serverQueue, play) => {
    
    let wrong = new MessageEmbed()
        .setTitle(`Command: /imgsay`)
        .setDescription(`
**Description:** 
Turns text to image
**Usage:**
/imgsay [text]
**Example:**
/imgsay Hello
`)
        .setFooter(message.author.tag, message.author.avatarURL())
        .setColor(`RANDOM`);
  
    let name = args.slice(1).join(' ');
  if (name.length < 1) return message.reply(wrong);
  
  const helpembed = new MessageEmbed()
      .setColor("RANDOM")
      .setImage("https://flamingtext.com/net-fu/proxy_form.cgi?script=crafts-logo&text=" + args.slice(1, args.length + 1).join("+") + "+&_loc=generate&imageoutput=true")
      .setFooter(message.author.tag, message.author.avatarURL())
    message.channel.send(helpembed);
}
}
