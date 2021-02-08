const { MessageEmbed } = require("discord.js")

module.exports = {
  name: "support",
  timeout : 3000,
  description: "Show bot support discord server url",
  alias: ["server"],
  run: async (bot, message, args, url, searchString, youtube, handleVideo, serverQueue, play) => {
    const helpembed = new MessageEmbed()
      .setColor("GOLD")
      .setDescription(
        "[**JOIN OUR SUPPORT SERVER**](https://discord.gg/kBPpv47EJp)"
      );
    message.channel.send(helpembed);
  }
}
