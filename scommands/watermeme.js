const { MessageEmbed } = require("discord.js")

module.exports = {
    slash: true,
    testOnly: false,
    description: 'Sends the watermeme template with your text on it',
    minArgs: 1,
    expectedArgs: '<text>',
    callback: ({ args }) => {
        const [text] = args

       const helpembed = new MessageEmbed()
      .setColor("RANDOM")
      .setTitle("Watermeme Command")
      .setImage("https://vacefron.nl/api/water?text=" + text)

      return helpembed
    }
}
