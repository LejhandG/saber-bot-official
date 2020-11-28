const { MessageEmbed } = require("discord.js")

module.exports = {
  name: "donate",
  description: "Patreon Link",
  alias: [],
  run: async (bot, message, args, url, searchString, youtube, handleVideo, serverQueue, play) => {
    const helpembed = new MessageEmbed()
      .setColor("GOLD")
      .setDescription(
        "[**DONATE US**](https://patreon.com/saberbot)"
      );
    message.channel.send(helpembed);
  }
}