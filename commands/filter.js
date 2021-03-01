const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js');
const client = new Discord.Client();
const DBL = require("dblapi.js");
const dbl = new DBL('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijc1MTA3OTY0Mzk4MDg5MDIyNSIsImJvdCI6dHJ1ZSwiaWF0IjoxNjA3Mjc1ODQwfQ.3jq8XhAoxzjXFDuoty8d5on2EV7jjDhAmAqLfmOeyxc', client);

module.exports = {
    name: 'filter',
    timeout: '1000',
    description: 'Idk',
    alias: [],
    run: async (bot, message, args) => {

        const user = message.author;

        dbl.hasVoted(user.id).then(voted => {
            if (voted) {
                if (!message.member.voice.channel) return message.channel.send(`${bot.emotes.error} - You're not in a voice channel !`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${bot.emotes.error} - You are not in the same voice channel !`);

        if (!bot.player.getQueue(message)) return message.channel.send(`${bot.emotes.error} - No music currently playing !`);

        if (!args[1]) return message.channel.send(`${bot.emotes.error} - Please specify a valid filter to enable or disable !`);

        const filterToUpdate = bot.filters.find((x) => x.toLowerCase() === args[1].toLowerCase());

        if (!filterToUpdate) return message.channel.send(`${bot.emotes.error} - This filter doesn't exist, try for example (8D, vibrato, pulsator...) !`);

        const filtersUpdated = {};

        filtersUpdated[filterToUpdate] = bot.player.getQueue(message).filters[filterToUpdate] ? false : true;

        bot.player.setFilters(message, filtersUpdated);

        if (filtersUpdated[filterToUpdate]) message.channel.send(`${bot.emotes.music} - I'm **adding** the filter to the music, please wait... Note : the longer the music is, the longer this will take.`);
        else message.channel.send(`${bot.emotes.music} - I'm **disabling** the filter on the music, please wait... Note : the longer the music is playing, the longer this will take.`);
            }

            else {
        const exampleEmbed = new Discord.MessageEmbed()
        .setTitle("Vote Feature")
        .setThumbnail(user.displayAvatarURL({size: 4096, dynamic: true}))
        .setColor("ORANGE")
        .setDescription(`
        Because this command uses more CPU. it is locked for Saber Voted users only. You can vote Saber on the Topgg page [here](http://bit.ly/sabervote) to get access to this command.
        `)
        message.channel.send(exampleEmbed)
            }
        })
    },
};
