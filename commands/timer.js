const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js');
const ms = require('ms');

module.exports = {
  name: "timer",
  timeout : 1800000,
  description: "Timer Countdown",
  alias: [],
  run: async (bot, message, args, url, searchString, youtube, handleVideo, serverQueue, play) => {
    
    let wrong = new MessageEmbed()
        .setTitle(`Command: /timer`)
        .setDescription(`
**Description:** 
Sets a timer for a given time
**Usage:**
/timer [time in s/m]
**Example:**
/timer 1m
`)
        .setFooter(message.author.tag, message.author.avatarURL())
        .setColor(`RANDOM`);
  
  const Timer = args[1]
  
  if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('You do not have the required permission to use this command.')
    
    if (ms(Timer) > 600000) return message.reply("Timer should be less than ten minutes")
    if(ms(Timer) < 1) return message.reply("Timer should be more than one second")
  
    if(!args[1]){
      return message.channel.send(wrong);
    }
  
    if(args[1] <= 0){
      return message.channel.send(wrong);
    }
  
    message.channel.send(":white_check_mark: " + "| Timer Started for: " + `${ms(ms(Timer), {long: true})}`)
  
    setTimeout(function(){
      message.channel.send(`The Timer Has FINISHED!, it lasted: ${ms(ms(Timer), {long: true})}`)
    }, ms(Timer));
  }
}
