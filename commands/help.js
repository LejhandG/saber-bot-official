const { MessageEmbed } = require("discord.js");
const pagination = require('discord.js-pagination');
const Discord = require('discord.js');

module.exports = {
  name: "help",
  description: "Show bot commands list",
  alias: ["cmd", "command", "commands", "helps"],
  run: async (bot, message, args, url, searchString, youtube, handleVideo, serverQueue, play) => {

    const impinfo = new Discord.MessageEmbed()
    .setColor("ORANGE")
    .setAuthor(bot.user.tag, bot.user.displayAvatarURL())
    .setDescription(`

    **__Important Info__**

🔸 1. Music Commands
🔸 2. Chat Commands
🔸 3. Invites Commands
🔸 4. Moderation Commands
🔸 5. Ticket Commands
🔸 6. Fun Commands
🔸 7. Image Commands
🔸 8. Utility Commands
🔸 9. Info Commands
🔸 10. Misc Commands
🔸 11. Embed Commands
🔸 12. API Commands
🔸 13. Suggest Commands

[**INVITE OUR BOT**](https://discord.com/oauth2/authorize?client_id=751079643980890225&scope=bot&permissions=2146958847)
[**CHECK OUT OUR WEBSITE**](https://saberofficial.ml/)
[**DONATE US**](https://patreon.com/saberbot)
[**JOIN OUR SUPPORT SERVER**](https://discord.gg/kBPpv47EJp)
[**DOCUMENTATION**](https://docs.saberofficial.ml/)
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

    const ticket = new Discord.MessageEmbed()
    .setColor("ORANGE")
    .setAuthor(bot.user.tag, bot.user.displayAvatarURL())
    .setDescription(`
    **__Ticket Commands__**
\`tnew\`, \`tclose\`, \`trole\`
\`tcategory\`, \`tadduser\`
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
    `)
    .setFooter("©️ 2021 Saber Bot");

    const utility = new Discord.MessageEmbed()
    .setColor("ORANGE")
    .setAuthor(bot.user.tag, bot.user.displayAvatarURL())
    .setDescription(`
    **__Utility Commands__**
\`poll\`, \`weather\`
    `)
    .setFooter("©️ 2021 Saber Bot");

    const info = new Discord.MessageEmbed()
    .setColor("ORANGE")
    .setAuthor(bot.user.tag, bot.user.displayAvatarURL())
    .setDescription(`
**__Info Commands__**
\`serverinfo\`, \`whois\`, \`avatar\`
\`stats\`, \`roles\`, \`djs\`
    `)
    .setFooter("©️ 2021 Saber Bot");

    const misc = new Discord.MessageEmbed()
    .setColor("ORANGE")
    .setAuthor(bot.user.tag, bot.user.displayAvatarURL())
    .setDescription(`
    **__Misc Commands__**
\`invite\`, \`support\`, \`website\`
\`botnick\`, \`donate\`, \`vote\`
    `)
    .setFooter("©️ 2021 Saber Bot");

    const embed = new Discord.MessageEmbed()
    .setColor("ORANGE")
    .setAuthor(bot.user.tag, bot.user.displayAvatarURL())
    .setDescription(`
    **__Embed Commands__**
\`say\`, \`advancedembed\`, \`rules\`
\`announce\`, \`embed\`, \`imageembed\`    
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
\`suggest\`, \`review\`
    `)
    .setFooter("©️ 2021 Saber Bot");

    const pages = [
      impinfo,
      music,
      chat,
      invites,
      moderation,
      ticket,
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
