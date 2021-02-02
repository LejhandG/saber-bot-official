const { MessageEmbed } = require("discord.js")

module.exports = {
  name: "invite",
  description: "Show bot invite url",
  alias: [],
  run: async (bot, message, args, url, searchString, youtube, handleVideo, serverQueue, play) => {
     const helpembed = new MessageEmbed()
      .setColor("GOLD")
      .setImage("https://cdn.discordapp.com/attachments/565818858938826772/806030793210200124/20210202_104336.png")
      .setDescription(
        "[**INVITE OUR BOT**](https://discord.com/oauth2/authorize?client_id=751079643980890225&scope=bot&permissions=2146958847)"
      );
    message.channel.send(helpembed);
  }
}
