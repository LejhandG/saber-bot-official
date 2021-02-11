const { MessageEmbed } = require("discord.js")
const db = require("quick.db")
const Discord = require("discord.js")

module.exports = {
    name: "addmoney",
    timeout : 3000,
    description: "Adds money",
    alias: [],
    run: async (bot, message, args, url, searchString, youtube, handleVideo, serverQueue, play) => {
        let ownerID = '565483539500367884'
  if(message.author.id !== ownerID) return;

  let user = message.mentions.members.first() || message.author;

    if (isNaN(args[2])) return;
    db.add(`money_${message.guild.id}_${user.id}`, args[2])
    let bal = await db.fetch(`money_${message.guild.id}_${user.id}`)

    let moneyEmbed = new Discord.MessageEmbed()
    .setColor("#FFFFFF")
    .setDescription(`Added ${args[2]} coins\n\nNew Balance: ${bal}`);
    message.channel.send(moneyEmbed)

}
}
