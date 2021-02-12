const { MessageEmbed } = require("discord.js")
const db = require("quick.db")
const Discord = require("discord.js")
const ms = require("parse-ms")

module.exports = {
    name: "hourly",
    timeout : 1,
    description: "Get hourly money in economy",
    alias: [],
    run: async (bot, message, args, url, searchString, youtube, handleVideo, serverQueue, play) => {
        let user = message.author;

  let timeout = 3600000;
  let amount = 30;

  let hourly = await db.fetch(`hourly_${message.guild.id}_${user.id}`);

  if (hourly !== null && timeout - (Date.now() - hourly) > 0) {
    let time = ms(timeout - (Date.now() - hourly));
  
    let timeEmbed = new Discord.MessageEmbed()
    .setColor("#FFFFFF")
    .setDescription(`You've already collected your hourly reward\n\nCollect it again in ${time.hours}h ${time.minutes}m ${time.seconds}s `);
    message.channel.send(timeEmbed)
  } else {
    let moneyEmbed = new Discord.MessageEmbed()
  .setColor("#FFFFFF")
  .setDescription(`You've collected your hourly reward of ${amount} coins`);
  message.channel.send(moneyEmbed)
  db.add(`money_${message.guild.id}_${user.id}`, amount)
  db.set(`hourly_${message.guild.id}_${user.id}`, Date.now())


  }
}
  }
