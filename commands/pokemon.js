const { MessageEmbed } = require('discord.js')

module.exports = {
    name: "pokemon",
description: "Finds Pokemon",
alias: [],
run: async (bot, message, args, url, searchString, youtube, handleVideo, serverQueue, play) => {
    
    let wrong = new MessageEmbed()
        .setTitle(`Command: /pokemon`)
        .setDescription(`
**Description:** 
Finds the pokemon mentioned by you
**Usage:**
/pokemon [name]
**Example:**
/pokemon Pikachu
`)
        .setFooter(message.author.tag, message.author.avatarURL())
        .setColor(`RANDOM`);
  
    let name = args.slice(1).join(' ');
  if (name.length < 1) return message.reply(wrong);
  
  const helpembed = new MessageEmbed()
      .setColor("RANDOM")
      .setTitle("A Pokemon")
      .setImage("https://i.some-random-api.ml/pokemon/" + args.slice(1, args.length + 1).join("+") + ".png")
      .setFooter("Command used by " + message.author.tag)
    message.channel.send(helpembed).catch(err => {
            message.reply("An error occured");
          });
}
}
