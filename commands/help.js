const { ReactionCollector } = require('discord.js-collector')
const { bot, MessageEmbed } = require("discord.js");
const client = new Client();

module.exports = {
    name: "help",
description: "Show bot commands list",
alias: [],
run: async (bot, message, args, url, searchString, youtube, handleVideo, serverQueue, play) => {
    const botMessage = await message.reply('**__Command List__**');
    ReactionCollector.paginator({
        botMessage,
        user: message.author,
        pages: [
            new MessageEmbed()
            .setColor("GOLD")
            .setAuthor(bot.user.tag, bot.user.displayAvatarURL())
            .setTitle("Getting Started")
            .setDescription(`
\`setup\` , \`setupembed\`

[**INVITE OUR BOT**](https://discord.com/oauth2/authorize?client_id=751079643980890225&scope=bot&permissions=2146958847)
[**CHECK OUT OUR WEBSITE**](https://saberofficial.ml/)
[**DONATE US**](https://patreon.com/saberbot)
[**JOIN OUR SUPPORT SERVER**](https://discord.gg/kBPpv47EJp)
            `)
            .setFooter("©️ 2020 Saber Bot"),
            new MessageEmbed()
            .setColor("GOLD")
            .setAuthor(bot.user.tag, bot.user.displayAvatarURL())
            .setTitle("Music Commands")
            .setDescription(`
            \`play\` > **\`play [title/url]\`**
            \`search\` > **\`search [title]\`**
            \`skip\`, \`stop\`,  \`pause\`, \`resume\`
            \`nowplaying\`, \`queue\`, \`volume\`
            \`lyrics\`, \`skipto\`, \`remove\`
            `)
            .setFooter("©️ 2020 Saber Bot"),
            new MessageEmbed()
            .setColor("GOLD")
            .setAuthor(bot.user.tag, bot.user.displayAvatarURL())
            .setTitle("Chat Commands")
            .setDescription(`
            \`chat\`
            `)
            .setFooter("©️ 2020 Saber Bot"),
            new MessageEmbed()
            .setColor("GOLD")
            .setAuthor(bot.user.tag, bot.user.displayAvatarURL())
            .setTitle("Invite Commands")
            .setDescription(`
            \`invites\`, \`serverinvites\`
            `)
            .setFooter("©️ 2020 Saber Bot"),
            new MessageEmbed()
            .setColor("GOLD")
            .setAuthor(bot.user.tag, bot.user.displayAvatarURL())
            .setTitle("Moderation Commands")
            .setDescription(`
            \`ban\`, \`kick\`, \`mute\`, \`lock\`
            \`sofban\`, \`warn\`, \`unmute\`, \`role\`
            \`slowmode\`, \`createrole\`
            \`unmute\`, \`purge\`
            \`createtext\`, \`createvoice\`
            \`createcategory\`, \`hackban\`
            \`unban\`
            `)
            .setFooter("©️ 2020 Saber Bot"),
            new MessageEmbed()
            .setColor("GOLD")
            .setAuthor(bot.user.tag, bot.user.displayAvatarURL())
            .setTitle("Ticket Commands")
            .setDescription(`
            \`tnew\`, \`tclose\`, \`trole\`
            \`tcategory\`, \`tadduser\`
            `)
            .setFooter("©️ 2020 Saber Bot"),
            new MessageEmbed()
            .setColor("GOLD")
            .setAuthor(bot.user.tag, bot.user.displayAvatarURL())
            .setTitle("Fun Commands")
            .setDescription(`
            \`meme\`, \`roast\`, \`pokemon\`
            \`8ball\`, \`dadjokes\`, \`coin\`            
            `)
            .setFooter("©️ 2020 Saber Bot"),
            new MessageEmbed()
            .setColor("GOLD")
            .setAuthor(bot.user.tag, bot.user.displayAvatarURL())
            .setTitle("Image Commands")
            .setDescription(`
            \`spongeburn\`, \`imgsay\`, \`cat\`
            \`slap\`, \`clap\`, \`hug\`
            \`duck\`, \`cry\`, \`kiss\`
            \`angry\`, \`mcachiv\`, \`cmy\`
            \`watermeme\`, \`mcdc\`, \`call\`
            \`emojigen\`, \`fact\`, \`captcha\`
            \`chalk\`, \`caution\`, \`genie\`
            \`ifthosekids\`, \`trumptweet\`
            \`shoot\`, \`stonks\`, \`disgusting\`
            \`grave\`, \`smart\`, \`scared\`
            \`buzz\`, \`wasted\`, \`trash\`
            \`blueify\`, \`simpcard\`, \`snow\`
            \`dog\`, \`cutecat\`           
            `)
            .setFooter("©️ 2020 Saber Bot"),
            new MessageEmbed()
            .setColor("GOLD")
            .setAuthor(bot.user.tag, bot.user.displayAvatarURL())
            .setTitle("Utility Commands")
            .setDescription(`
            \`poll\`, \`shorten\`, \`weather\`
            \`hastebin\`          
            `)
            .setFooter("©️ 2020 Saber Bot"),
            new MessageEmbed()
            .setColor("GOLD")
            .setAuthor(bot.user.tag, bot.user.displayAvatarURL())
            .setTitle("Info Commands")
            .setDescription(`
            \`serverinfo\`, \`whois\`, \`avatar\`
            \`stats\`, \`roles\`          
            `)
            .setFooter("©️ 2020 Saber Bot"),
            new MessageEmbed()
            .setColor("GOLD")
            .setAuthor(bot.user.tag, bot.user.displayAvatarURL())
            .setTitle("Misc Commands")
            .setDescription(`
            \`invite\`, \`support\`, \`website\`
            \`setnick\`, \`botnick\`, \`donate\`
            \`syntax\`, \`vote\`, \`ping\`, \`uptime\`
            \`suggest\`, \`review\`         
            `)
            .setFooter("©️ 2020 Saber Bot")
        ],
        collectorOptions: {
                time: 60000
        }
        });
}
}
