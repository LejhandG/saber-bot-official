const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js');
const ms = require('ms');

module.exports = {
  name: "timer",
  timeout : 3000,
  description: "Timer Countdown",
  alias: [],
  run: async (bot, message, args, url, searchString, youtube, handleVideo, serverQueue, play) => {
  
  const Timer = args[1]
    if (ms(Timer) > 3600000) return message.reply("Timer should be less than one hour")
    if(ms(Timer) < 1) return message.reply("Timer should be more than one second")
  
    if(!args[1]){
      return message.channel.send(":x: " + "| Please Enter a time period followed by \"s or m or h\"");
    }
  
    if(args[1] <= 0){
      return message.channel.send(":x: " + "| Please Enter a time period followed by \"s or m or h\"");
    }
  
    message.channel.send(":white_check_mark: " + "| Timer Started for: " + `${ms(ms(Timer), {long: true})}`)
  
    setTimeout(function(){
      message.channel.send(` The Timer Has FINISHED!, it lasted: ${ms(ms(Timer), {long: true})}`)
    }, ms(Timer));
  }
}
