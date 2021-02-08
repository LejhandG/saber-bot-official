const { MessageEmbed } = require("discord.js")

module.exports = {
    name: "weather",
    timeout : 3000,
description: "Shows the weather of the region",
alias: [],
run: async (bot, message, args, url, searchString, youtube, handleVideo, serverQueue, play) => {
    
    let wrong = new MessageEmbed()
        .setTitle(`Command: /weather`)
        .setDescription(`
**Description:** 
Gives you the weather of a valid region
**Usage:**
/weather [location]
**Example:**
/weather India
`)
        .setFooter(message.author.tag, message.author.avatarURL())
        .setColor(`RANDOM`);
  
    let name = args.slice(1).join(' ');
  if (name.length < 1) return message.reply(wrong);

  const helpembed = new MessageEmbed()
      .setColor("RANDOM")
      .setTitle("Weather of " + name )
      .setImage("https://wttr.in/" + args.slice(1, args.length + 1).join("+") + ".png?m")
      .setFooter(message.author.tag, message.author.avatarURL())
    message.channel.send(helpembed);
}
}
