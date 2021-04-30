const { MessageEmbed } = require('discord.js');

module.exports = {
    slash: true,
    testOnly: false,
    description: 'Gives a random response on your asked question',
    minArgs: 1,
    expectedArgs: '<question>',
    callback: ({ args }) => {
        const [question] = args

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
        .setTitle(`8Ball! 🎱`)
        .addField("**Question**", `\`\`\`Js\n${question}\`\`\``)
        .addField("**Reply**", `\`\`\`Js\n${response}\`\`\``)
        .setColor(`RANDOM`);

              return Embed
    }
}
