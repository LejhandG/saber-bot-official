const { MessageEmbed } = require('discord.js');

module.exports = {
    slash: true,
    testOnly: false,
    description: 'Flips the coin for heads or tails',
    callback: ({ }) => {
        
        var hd = [
            "Heads",
            "Tails"
        ];

    let response = (hd[Math.floor(Math.random() * hd.length)])
    
    let product = new MessageEmbed()
    .setTitle("Heads or Tails")
    .setDescription(" You Flipped: " + response)
    .setColor("RANDOM")

    return product
    }
}
