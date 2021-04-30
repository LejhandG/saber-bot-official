const { MessageEmbed } = require("discord.js")

module.exports = {
    slash: true,
    testOnly: false,
    description: 'Sends the changemymind template with your text on it',
    minArgs: 1,
    expectedArgs: '<text>',
    callback: ({ args }) => {
        const [text] = args

       const helpembed = new MessageEmbed()
      .setColor("RANDOM")
      .setTitle("Changemymind Command")
      .setImage("https://vacefron.nl/api/changemymind?text=" + text)

      return helpembed
    }
}
