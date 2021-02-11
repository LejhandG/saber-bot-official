const { MessageEmbed } = require("discord.js")
const db = require("quick.db")
const Discord = require("discord.js")

module.exports = {
    name: "beg",
    timeout : 180000,
    description: "Begs for money in economy system",
    alias: [],
    run: async (bot, message, args, url, searchString, youtube, handleVideo, serverQueue, play) => {

        let user = message.author;

  let amount = 5;

  let beg = await db.fetch(`beg_${message.guild.id}_${user.id}`);

    let moneyEmbed = new Discord.MessageEmbed()
  .setColor("#FFFFFF")
  .setDescription(`You've begged and received ${amount} coins`);
  message.channel.send(moneyEmbed)
  db.add(`money_${message.guild.id}_${user.id}`, amount)


  }
    }
