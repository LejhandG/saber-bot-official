const { MessageEmbed } = require('discord.js')

module.exports = {
    name: "imgsay",
description: "Image Text",
alias: [],
run: async (bot, message, args, url, searchString, youtube, handleVideo, serverQueue, play) => {
  
    let name = args.slice(1).join(' ');
  if (name.length < 1) return message.reply('Write some text to get a stylish text !!');
  
  const helpembed = new MessageEmbed()
      .setColor("RANDOM")
      .setImage("https://flamingtext.com/net-fu/proxy_form.cgi?script=3d-logo&text=" + args.slice(1, args.length + 1).join("+") + "+&_loc=generate&imageoutput=true")
      .setFooter("Command used by " + message.author.tag)
    message.channel.send(helpembed);
}
}
