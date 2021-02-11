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
  .setDescription(`**${user}'s Balance**\n\nPocket: ${bal}\nBank: ${bank}`);
  message.channel.send(moneyEmbed)
    }
  }
