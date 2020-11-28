const { MessageEmbed } = require("discord.js")

module.exports = {
  name: "syntax",
  description: "Show bot syntax of the commands",
  alias: [],
  run: async (bot, message, args, url, searchString, youtube, handleVideo, serverQueue, play) => {
    const helpembed = new MessageEmbed()
      .setColor("GOLD")
      .setDescription(
        "[**SEE THE SYNTAX OF THE COMMANDS**](https://pastebin.com/FQ2PzKjZ)"
      );
    message.channel.send(helpembed);
  }
}