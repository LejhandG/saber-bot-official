const { MessageEmbed } = require("discord.js")
const Discord = require('discord.js')
const fetch = require('node-fetch');

module.exports = {
    name: "djs",
description: "Discord JS Docs",
alias: ["discordjs"],
run: async (bot, message, args, url, searchString, youtube, handleVideo, serverQueue, play) => {

let wrong = new MessageEmbed()
        .setTitle(`Command: ${bot.prefix}djs`)
        .setDescription(`
**Description:** 
Shows from discordjs library/docs
**Usage:**
${bot.prefix}djs [text]
**Example:**
${bot.prefix}djs MessageEmbed
`)
        .setFooter(message.author.tag, message.author.avatarURL())
        .setColor(`RANDOM`);

let query = args.slice(1).join(" ");

                // Input Checking
                if (!query[0]) { message.channel.send(wrong) } else {


                    // Executing
                    const url = `https://djsdocs.sorta.moe/v2/embed?src=stable&q=${query}`;
                    fetch(url)
                        .then(res => res.json())
                        .then(embed => {
                            if (embed && !embed.error) {
                                message.channel.send({ embed });
                            } else {
                                message.reply(`Failed to find anything using the specified query in DiscordJS library. Please try again.`);
                            }
                        })
                        .catch(err => {
                            this.client.logger.error(err);
                            message.reply('An error occured');
                        });
                }
}
}
