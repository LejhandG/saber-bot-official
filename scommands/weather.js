const { MessageEmbed } = require("discord.js")

module.exports = {
    slash: true,
    testOnly: true,
    description: 'Shows you the weather of the region',
    minArgs: 1,
    expectedArgs: '<region>',
    callback: ({ args }) => {
        const [region] = args

        const helpembed = new MessageEmbed()
      .setColor("RANDOM")
      .setTitle("Weather of " + region )
      .setImage("https://wttr.in/" + region + ".png?m")

      return helpembed
    }
}
