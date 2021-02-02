const { MessageEmbed } = require("discord.js")

module.exports = {
  name: "donate",
  description: "Patreon Link",
  alias: ["patreon"],
  run: async (bot, message, args, url, searchString, youtube, handleVideo, serverQueue, play) => {
    const helpembed = new MessageEmbed()
      .setColor("GOLD")
      .setImage("https://cdn.discordapp.com/attachments/565818858938826772/806030793558065162/20210202_104407.png")
      .setDescription(
        "[**DONATE US**](https://patreon.com/saberbot)"
      );
    message.channel.send(helpembed);
  }
}
