const { MessageEmbed } = require('discord.js');

module.exports = {
    slash: true,
    testOnly: false,
    description: 'Sends the link of the website',
    callback: ({ }) => {
        const helpembed = new MessageEmbed()
      .setColor("GOLD")
      .setImage("https://cdn.discordapp.com/attachments/565818858938826772/806030793893216276/20210202_104436.png")
      .setDescription(
        "[**CHECK OUT OUR WEBSITE**](https://saberofficial.ml/)"
      );
      return helpembed
    }
}
