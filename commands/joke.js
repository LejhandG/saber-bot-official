const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js');
const fetch = require('node-fetch')

module.exports = {
    name: 'joke',
    timeout: '1000',
    description: 'Tells you a random joke',
    alias: [],
    run: async (bot, message, args, url, searchString, youtube, handleVideo, serverQueue, play) => {
        message.channel.startTyping();
const joke = await fetch('http://official-joke-api.appspot.com/random_joke').then(response => response.json());
const setup = joke.setup
const punchline = joke.punchline
const embed = new Discord.MessageEmbed()
.setTitle("A Random Joke")
.setDescription(`${joke} \n ${punchline}`)
.setFooter(message.author.tag, message.author.avatarURL())
message.channel.send(embed).then(() => {
    message.channel.stopTyping();
});
    }
}
