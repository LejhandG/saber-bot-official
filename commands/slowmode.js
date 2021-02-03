const { MessageEmbed } = require("discord.js");
const ms = require("ms");

module.exports = {
    name: "slowmode",
description: "Sets the channel slowmode",
alias: [],
run: async (bot, message, args, url, searchString, youtube, handleVideo, serverQueue, play) => {
    
    let wrong = new MessageEmbed()
        .setTitle(`Command: /slowmode`)
        .setDescription(`
**Description:** 
Adds slowmode to the channel
**Usage:**
/slowmode [time in s,m,h]
**Example:**
/slowmode 10s
`)
        .setFooter(message.author.tag, message.author.avatarURL())
        .setColor(`RANDOM`);
    
      time = args.slice(1).join(" ");
  
      channel = message.channel;
 
  
  if (args[1] === "off" || args[1] === "0s") {
    channel.setRateLimitPerUser(0);
    return message.channel.send(`**<#${channel.id}> slowmode has been deactivated.**`)
  }
  
  if (!time) return message.channel.send(wrong)
  
  let convert = ms(time); // This will results the milliseconds.
  let toSecond = Math.floor(convert / 1000);
  
  if (!toSecond || toSecond == undefined) return message.channel.send("**Please Specify a valid time format**")
  
  if (toSecond > 21600) return message.channel.send("**Timer should be less than or equal to 6 hours.**")
  else if (toSecond < 1) return message.channel.send("**Timer should be more than or equal to 1 second.**")
  
  await channel.setRateLimitPerUser(toSecond);
    const embed = new MessageEmbed()
    .setTimestamp()
    .setColor(`RANDOM`)
    .setFooter(`Slowmode has been set to 1 message every ${ms(ms(time), {long: true})}.`)
    .setTitle(`${message.author.tag} has set a slowmode to this channel.`)
    .addFields(
        { name: "Moderator", value: `${message.author.tag}`, inline: true },
        { name: "Slowmode", value: `${ms(ms(time), {long: true})}.`, inline: true },
      );
    channel.send(embed);
}
}
