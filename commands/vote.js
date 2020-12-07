const { MessageEmbed } = require("discord.js")

module.exports = {
  name: "vote",
  description: "Upvote bot in topgg",
  alias: [],
  run: async (bot, message, args, url, searchString, youtube, handleVideo, serverQueue, play) => {
    const helpembed = new MessageEmbed()
      .setColor("GOLD")
      .setDescription(
        "[**VOTE OUR BOT**](https://top.gg/bot/751079643980890225/vote)"
      );
    message.channel.send(helpembed);
  }
}
