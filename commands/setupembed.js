const Discord = require("discord.js");
const { MessageEmbed } = require('discord.js')

module.exports = {
    name: "setupembed",
description: "Sends embed related to setup",
alias: [],
run: async (bot, message, args, url, searchString, youtube, handleVideo, serverQueue, play) => {
  if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('You do not have the required permission to use this command.').then(m => {
        setTimeout(() => {
            m.delete()
        }, 3000);
    })
  const exampleEmbed = new Discord.MessageEmbed()
    .setColor('#ffa500')
    .setTitle('Prefix - /')
    .setDescription('[Website](http://bit.ly/saberofficial) | [Support](https://discord.gg/63sJPb7) | [Invite](https://discord.com/oauth2/authorize?client_id=751079643980890225&scope=bot&permissions=2146958847)')
    .addFields(
		{ name: '/play', value: 'Plays the song you want' },
    { name: '/skip', value: 'Skips the current song' },
    { name: '/search', value: 'Gives option from which you can choose' },
    { name: '/stop', value: 'Stops and leaves the vc' },
    { name: '/queue', value: 'Shows the queue' },
    { name: '/stop', value: 'Stops and leaves the vc' },
    { name: '/volume', value: 'Sets the volume 1-100' },
    { name: '/nowplaying', value: 'Shows the current song playing' }
	)
    .setImage('https://media.discordapp.net/attachments/573864178838798346/764069052770680863/standard_3.gif')
    .setFooter('Made by Lejhand');

message.channel.send(exampleEmbed);
message.delete();
}
}