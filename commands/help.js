const { MessageEmbed } = require("discord.js");
const pagination = require('discord.js-pagination');
const Discord = require('discord.js');

module.exports = {
  name: "help",
  timeout : 4000,
  description: "Show bot commands list",
  alias: ["cmd", "command", "commands", "helps"],
  run: async (bot, message, args, url, searchString, youtube, handleVideo, serverQueue, play) => {

    const impinfo = new Discord.MessageEmbed()
    .setColor("ORANGE")
    .setAuthor(bot.user.tag, bot.user.displayAvatarURL())
    .setDescription(`

    **__Important Info__**

<:S_gbarrow:810158662831177729> 1. Music Commands
<:S_gbarrow:810158662831177729> 2. Chat Commands
<:S_gbarrow:810158662831177729> 3. Invites Commands
<:S_gbarrow:810158662831177729> 4. Moderation Commands
<:S_gbarrow:810158662831177729> 5. Rank Commands
<:S_gbarrow:810158662831177729> 6. Economy Commands
<:S_gbarrow:810158662831177729> 7. Ticket Commands
<:S_gbarrow:810158662831177729> 8. Giveaway Commands
<:S_gbarrow:810158662831177729> 9. Fun Commands
<:S_gbarrow:810158662831177729> 10. Image Commands
<:S_gbarrow:810158662831177729> 11. Utility Commands
<:S_gbarrow:810158662831177729> 12. Info Commands
<:S_gbarrow:810158662831177729> 13. Misc Commands
<:S_gbarrow:810158662831177729> 14. Embed Commands
<:S_gbarrow:810158662831177729> 15. API Commands
<:S_gbarrow:810158662831177729> 16. Suggest Commands

<:S_Online:770582506994532363> Prefix - \`${bot.prefix}\`

<:1235_arrow_right:809423996550381578> [**INVITE OUR BOT**](https://discord.com/oauth2/authorize?client_id=751079643980890225&scope=bot&permissions=2146958847)
<:1235_arrow_right:809423996550381578> [**CHECK OUT OUR WEBSITE**](https://saberofficial.ml/)
<:1235_arrow_right:809423996550381578> [**DONATE US**](https://patreon.com/saberbot)
<:1235_arrow_right:809423996550381578> [**JOIN OUR SUPPORT SERVER**](https://discord.gg/kBPpv47EJp)
<:1235_arrow_right:809423996550381578> [**DOCUMENTATION**](https://docs.saberofficial.ml/)
    `)
    .setFooter("©️ 2021 Saber Bot");

    const music = new Discord.MessageEmbed()
    .setColor("ORANGE")
    .setAuthor(bot.user.tag, bot.user.displayAvatarURL())
    .setDescription(`
    **__Music Commands__**
\`play\` > **\`play [title/url]\`**
\`search\` > **\`search [title]\`**
\`skip\`, \`stop\`,  \`pause\`, \`resume\`
\`nowplaying\`, \`queue\`, \`volume\`
\`lyrics\`, \`skipto\`, \`remove\`
    `)
    .setFooter("©️ 2021 Saber Bot");

    const chat = new Discord.MessageEmbed()
    .setColor("ORANGE")
    .setAuthor(bot.user.tag, bot.user.displayAvatarURL())
    .setDescription(`
    **__Chat Commands__**
\`chat\`
    `)
    .setFooter("©️ 2021 Saber Bot");

    const invites = new Discord.MessageEmbed()
    .setColor("ORANGE")
    .setAuthor(bot.user.tag, bot.user.displayAvatarURL())
    .setDescription(`
    **__Invites Commands__**
\`invites\`, \`serverinvites\`
    `)
    .setFooter("©️ 2021 Saber Bot");

    const moderation = new Discord.MessageEmbed()
    .setColor("ORANGE")
    .setAuthor(bot.user.tag, bot.user.displayAvatarURL())
    .setDescription(`
    **__Moderation Commands__**
\`ban\`, \`kick\`, \`mute\`, \`lock\`
\`warn\`, \`unmute\`, \`role\`
\`slowmode\`, \`createrole\`
\`unmute\`, \`purge\`
\`createtext\`, \`createvoice\`
\`createcategory\`, \`hackban\`
\`unban\`, \`moveall\`, \`nuke\`
    `)
    .setFooter("©️ 2021 Saber Bot");
    
    const rank = new Discord.MessageEmbed()
    .setColor("ORANGE")
    .setAuthor(bot.user.tag, bot.user.displayAvatarURL())
    .setDescription(`
    **__Rank Commands__**
\`rank\`
    `)
    .setFooter("©️ 2021 Saber Bot");
    
    const economy = new Discord.MessageEmbed()
    .setColor("ORANGE")
    .setAuthor(bot.user.tag, bot.user.displayAvatarURL())
    .setDescription(`
    **__Economy Commands__**
\`balance\`, \`beg\`, \`buy\`, \`daily\`
\`deposit\`, \`pay\`, \`profile\`, \`rob\`
\`roulette\`, \`sell\`, \`slots\`, \`store\`
\`storeinfo\`, \`weekly\`, \`withdraw\`
\`work\`, \`hourly\`
    `)
    .setFooter("©️ 2021 Saber Bot");

    const ticket = new Discord.MessageEmbed()
    .setColor("ORANGE")
    .setAuthor(bot.user.tag, bot.user.displayAvatarURL())
    .setDescription(`
    **__Ticket Commands__**
\`tnew\`, \`tclose\`, \`trole\`
\`tcategory\`, \`tadduser\`
    `)
    .setFooter("©️ 2021 Saber Bot");
    
    const giveaway = new Discord.MessageEmbed()
    .setColor("ORANGE")
    .setAuthor(bot.user.tag, bot.user.displayAvatarURL())
    .setDescription(`
    **__Giveaway Commands__**
\`gstart\`, \`gend\`, \`greroll\`
    `)
    .setFooter("©️ 2021 Saber Bot");

    const fun = new Discord.MessageEmbed()
    .setColor("ORANGE")
    .setAuthor(bot.user.tag, bot.user.displayAvatarURL())
    .setDescription(`
    **__Fun Commands__**
\`meme\`, \`roast\`
\`8ball\`, \`dadjokes\`, \`coin\`
\`pokemon\`, \`sudo\`, \`snipe\`
\`tictactoe\`
    `)
    .setFooter("©️ 2021 Saber Bot");

    const image = new Discord.MessageEmbed()
    .setColor("ORANGE")
    .setAuthor(bot.user.tag, bot.user.displayAvatarURL())
    .setDescription(`
    **__Image Commands__**
\`imgsay\`, \`cat\`
\`slap\`, \`clap\`, \`hug\`
\`duck\`, \`mcachiv\`, \`cmy\`
\`watermeme\`, \`mcdc\`, \`trumptweet\`
\`shoot\`, \`stonks\`, \`disgusting\`
\`grave\`, \`smart\`, \`scared\`
\`buzz\`, \`wasted\`, \`trash\`
\`blueify\`, \`simpcard\`, \`snow\`
\`hitler\`, \`gun\`, \`rainbow\`
\`truth\`, \`trigger\`, \`glitch\`
\`communist\`, \`jail\`, \`door\`
\`peepobanner\`, \`photo\`, \`notstonks\`
\`drip\`
    `)
    .setFooter("©️ 2021 Saber Bot");

    const utility = new Discord.MessageEmbed()
    .setColor("ORANGE")
    .setAuthor(bot.user.tag, bot.user.displayAvatarURL())
    .setDescription(`
    **__Utility Commands__**
\`poll\`, \`weather\`, \`setsuggest\`
\`suggestion\`, \`timer\`
    `)
    .setFooter("©️ 2021 Saber Bot");

    const info = new Discord.MessageEmbed()
    .setColor("ORANGE")
    .setAuthor(bot.user.tag, bot.user.displayAvatarURL())
    .setDescription(`
**__Info Commands__**
\`serverinfo\`, \`whois\`, \`avatar\`
\`stats\`, \`roles\`, \`djs\`, \`npm\`
\`wikipedia\`
    `)
    .setFooter("©️ 2021 Saber Bot");

    const misc = new Discord.MessageEmbed()
    .setColor("ORANGE")
    .setAuthor(bot.user.tag, bot.user.displayAvatarURL())
    .setDescription(`
    **__Misc Commands__**
\`invite\`, \`support\`, \`website\`
\`botnick\`, \`donate\`, \`vote\`
\`setprefix\`, \`setlogs\`
    `)
    .setFooter("©️ 2021 Saber Bot");

    const embed = new Discord.MessageEmbed()
    .setColor("ORANGE")
    .setAuthor(bot.user.tag, bot.user.displayAvatarURL())
    .setDescription(`
    **__Embed Commands__**
\`say\`, \`advancedembed\`, \`rules\`
\`announce\`, \`embed\`, \`imageembed\`
\`customembed\`
    `)
    .setFooter("©️ 2021 Saber Bot");

    const api = new Discord.MessageEmbed()
    .setColor("ORANGE")
    .setAuthor(bot.user.tag, bot.user.displayAvatarURL())
    .setDescription(`
    **__API Commands__**
\`ping\`, \`uptime\`
    `)
    .setFooter("©️ 2021 Saber Bot");

    const suggest = new Discord.MessageEmbed()
    .setColor("ORANGE")
    .setAuthor(bot.user.tag, bot.user.displayAvatarURL())
    .setDescription(`
    **__Suggest Commands__**
\`suggestcmd\`, \`review\`
    `)
    .setFooter("©️ 2021 Saber Bot");

    const pages = [
      impinfo,
      music,
      chat,
      invites,
      moderation,
      rank,
      economy,
      ticket,
      giveaway,
      fun,
      image,
      utility,
      info,
      misc,
      embed,
      api,
      suggest,
]

const emojiList = ["⏪", "⏩"];

const timeout = '120000';

pagination(message, pages, emojiList, timeout).catch(err => {
            message.reply("An error occurred");
          });
  }
}
