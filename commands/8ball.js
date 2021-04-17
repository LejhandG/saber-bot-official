const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "8ball",
	timeout : 3000,
description: "command description",
alias: ["ask", "8b"],
run: async (bot, message, args, url, searchString, youtube, handleVideo, serverQueue, play) => {
	
    let wrong = new MessageEmbed()
        .setTitle(`Command: ${bot.prefix}8ball`)
        .setDescription(`
**Description:** 
Its gives an answer to your question
**Usage:**
${bot.prefix}8ball [question]
**Example:**
${bot.prefix}8ball Will I get a dog?
`)
        .setFooter(message.author.tag, message.author.avatarURL())
        .setColor(`RANDOM`);
	
    let question = args.slice(1).join(' ');
    if (question.length < 1) return message.reply(wrong);

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
        "You better not hope so",
        "It is certain.",
        "It is decidedly so.",
        "Without a doubt.",
        "Yes - definitely.",
        "You may rely on it.",
        "As I see it, yes.",
        "Most likely.",
        "Outlook good.",
        "Yes.",
        "Signs point to yes.",
        "Reply hazy, try again.",
        "Ask again later.",
        "Better not tell you now.",
        "Cannot predict now.",
        "Concentrate and ask again.",
        "Don't count on it.",
        "My reply is no.",
        "My sources say no.",
        "Outlook not so good.",
        "doubt",
        "lmao no",
        "yes 😅",
        "Very doubtful."
      ];
      let response =
        responses[Math.floor(Math.random() * responses.length - 1)];
      let Embed = new MessageEmbed()
        .setTitle(`8Ball! 🎱`)
        .addField("**Question**", `\`\`\`Js\n${question}\`\`\``)
        .addField("**Reply**", `\`\`\`Js\n${response}\`\`\``)
        .setFooter(message.author.tag, message.author.avatarURL())
        .setColor(`RANDOM`);
      message.channel.send(Embed).catch(err => {
            message.reply("An error occured");
          });
    }
  },
};
