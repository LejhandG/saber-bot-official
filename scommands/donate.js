const { MessageEmbed } = require('discord.js');

module.exports = {
    slash: true,
    testOnly: false,
    description: 'Sends the donate link',
    callback: ({ }) => {
        const helpembed = new MessageEmbed()
      .setColor("GOLD")
      .setImage("https://cdn.discordapp.com/attachments/565818858938826772/806030793558065162/20210202_104407.png")
      .setDescription(
        "[**DONATE US**](https://patreon.com/saberbot)"
      );
      return helpembed
    }
}
