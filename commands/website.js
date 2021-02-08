const { MessageEmbed } = require("discord.js")

module.exports = {
  name: "website",
  timeout : 3000,
  description: "Show bot website url",
  alias: [],
  run: async (bot, message, args, url, searchString, youtube, handleVideo, serverQueue, play) => {
    const helpembed = new MessageEmbed()
      .setColor("GOLD")
      .setImage("https://cdn.discordapp.com/attachments/565818858938826772/806030793893216276/20210202_104436.png")
      .setDescription(
        "[**CHECK OUT OUR WEBSITE**](https://saberofficial.ml/)"
      );
    message.channel.send(helpembed);
  }
}
