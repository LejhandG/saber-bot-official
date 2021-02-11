const { MessageEmbed } = require("discord.js")
const db = require("quick.db")
const Discord = require("discord.js")

module.exports = {
    name: "removemoney",
    timeout : 3000,
    description: "Removes money",
    alias: [],
    run: async (bot, message, args, url, searchString, youtube, handleVideo, serverQueue, play) => {
        let ownerID = '565483539500367884'
  if(message.author.id !== ownerID) return;

  let user = message.mentions.members.first() || message.author;

    if (isNaN(args[2])) return;
    db.subtract(`money_${message.guild.id}_${user.id}`, args[2])
    let bal = await db.fetch(`money_${message.guild.id}_${user.id}`)

    let moneyEmbed = new Discord.MessageEmbed()
    .setColor("#FFFFFF")
    .setDescription(`Removed ${args[2]} coins\n\nNew Balance: ${bal}`);
    message.channel.send(moneyEmbed)

}
}
