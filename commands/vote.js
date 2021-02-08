const { MessageEmbed } = require("discord.js")

module.exports = {
  name: "vote",
  timeout : 3000,
  description: "Upvote bot in topgg",
  alias: [],
  run: async (bot, message, args, url, searchString, youtube, handleVideo, serverQueue, play) => {
    const helpembed = new MessageEmbed()
      .setColor("GOLD")
      .setImage("https://cdn.discordapp.com/attachments/565818858938826772/806030794148937728/20210202_104741.png")
      .setDescription(
        "[**VOTE OUR BOT**](https://top.gg/bot/751079643980890225/vote)"
      );
    message.channel.send(helpembed);
  }
}
