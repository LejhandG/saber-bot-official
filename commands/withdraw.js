const { MessageEmbed } = require("discord.js")
const db = require("quick.db")
const Discord = require("discord.js")
const ms = require("parse-ms")

module.exports = {
    name: "withdraw",
    timeout : 5000,
    description: "Withdraws money from your bank",
    alias: ["with"],
    run: async (bot, message, args, url, searchString, youtube, handleVideo, serverQueue, play) => {
    
    let user = message.author;

  let member = db.fetch(`money_${message.guild.id}_${user.id}`)
  let member2 = db.fetch(`bank_${message.guild.id}_${user.id}`)

  if (args[1] == 'all') {
    let money = await db.fetch(`bank_${message.guild.id}_${user.id}`)
    
    db.subtract(`bank_${message.guild.id}_${user.id}`, money)
    db.add(`money_${message.guild.id}_${user.id}`, money)
    let embed5 = new Discord.MessageEmbed()
  .setColor("#FFFFFF")
  .setDescription(`You have withdrawn all your coins from your bank`);
  message.channel.send(embed5)
  
  } else {

  let embed2 = new Discord.MessageEmbed()
  .setColor("#FFFFFF")
  .setDescription(`Specify an amount to withdraw`);
  
  if (!args[1]) {
      return message.channel.send(embed2)
  }
  let embed3 = new Discord.MessageEmbed()
  .setColor("#FFFFFF")
  .setDescription(`You can't withdraw negative money`);

  if (message.content.includes('-')) { 
      return message.channel.send(embed3)
  }
  let embed4 = new Discord.MessageEmbed()
  .setColor("#FFFFFF")
  .setDescription(`You don't have that much money in the bank`);

  if (member2 < args[1]) {
      return message.channel.send(embed4)
  }

  let embed5 = new Discord.MessageEmbed()
  .setColor("#FFFFFF")
  .setDescription(`You have withdrawn ${args[1]} coins from your bank`);

  message.channel.send(embed5)
  db.subtract(`bank_${message.guild.id}_${user.id}`, args[1])
  db.add(`money_${message.guild.id}_${user.id}`, args[1])
  }
}
    }
