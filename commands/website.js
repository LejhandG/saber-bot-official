const { MessageEmbed } = require("discord.js")

module.exports = {
  name: "website",
  description: "Show bot website url",
  alias: [],
  run: async (bot, message, args, url, searchString, youtube, handleVideo, serverQueue, play) => {
    const helpembed = new MessageEmbed()
      .setColor("GOLD")
      .setDescription(
        "[**CHECK OUT OUR WEBSITE**](https://saberofficial.ml/)"
      );
    message.channel.send(helpembed);
  }
}