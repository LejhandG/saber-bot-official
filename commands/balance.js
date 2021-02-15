const { MessageEmbed } = require("discord.js")
const db = require("quick.db")
const Discord = require("discord.js")

module.exports = {
    name: "balance",
    timeout : 5000,
    description: "Shows your balance in economy system",
    alias: ["bal"],
    run: async (bot, message, args, url, searchString, youtube, handleVideo, serverQueue, play) => {
        let user = message.mentions.members.first() || message.author;

  let bal = db.fetch(`money_${message.guild.id}_${user.id}`)

  if (bal === null) bal = 0;

  let bank = await db.fetch(`bank_${message.guild.id}_${user.id}`)
  if (bank === null) bank = 0;

  let moneyEmbed = new Discord.MessageEmbed()
  .setColor("#FFFFFF")
  .setDescription(`**${user}'s Balance**\n\nPocket: ${bal}\nBank: ${bank}`)
  .setImage("https://ncentral.sirv.com/Balance.jpg?text.0.text=%24" + bal + "&text.0.position.x=-40%25&text.0.position.y=-62%25&text.0.size=19&text.0.color=000000&text.0.font.family=Cabin&text.1.text=%24" + bank + "&text.1.position.x=-40%25&text.1.position.y=-28%25&text.1.size=19&text.1.color=000000&text.1.font.family=Cabin")
  message.channel.send(moneyEmbed)
    }
  }
