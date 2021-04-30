const { MessageEmbed } = require("discord.js")

module.exports = {
    slash: true,
    testOnly: false,
    description: 'Sends the buzz template with your text on it',
    minArgs: 1,
    expectedArgs: '<text>',
    callback: ({ args }) => {
        const [text] = args

       const helpembed = new MessageEmbed()
      .setColor("RANDOM")
      .setTitle("Buzz Command")
      .setImage("https://api.memegen.link/images/buzz/" + text + ".png")

      return helpembed
    }
}
