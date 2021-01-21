const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "8ball",
description: "command description",
alias: [],
run: async (bot, message, args, url, searchString, youtube, handleVideo, serverQueue, play) => {
    let question = args.slice(1).join(' ');
    if (question.length < 1) return message.reply('Write some text !!');

    else {
      let responses = [
        "Yes",
        "No",
        "Definetly",
        "Absoloutely",
        "Not in a million years",
        "No , but yes",
        "Never",
        "Yes, ofcourse",
        "Wtf, are you serious",
        "Probably",
	"Probably not",
	"Dont know, try again",
        "Of course no, try again maybe",
        "I mean, i guess so",
        "If you say so",
        "Im not saying anything but you know the answer",
        "Definately not",
        "Its a possibility",
        "A huge chance",
        "A small chance",
        "You better hope so",
        "You better not hope so"
      ];
      let response =
        responses[Math.floor(Math.random() * responses.length - 1)];
      let Embed = new MessageEmbed()
        .setTitle(`8Ball!`)
        .setDescription(`Your question: ${question}\nMy reply: ${response}`)
        .setFooter(message.author.tag, message.author.avatarURL())
        .setColor(`RANDOM`);
      message.channel.send(Embed);
    }
  },
};
