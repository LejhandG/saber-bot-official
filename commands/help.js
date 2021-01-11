const { MessageEmbed } = require("discord.js")

module.exports = {
  name: "help",
  description: "Show bot commands list",
  alias: ["cmd", "command", "commands", "helps"],
  run: async (bot, message, args, url, searchString, youtube, handleVideo, serverQueue, play) => {
    const helpembed = new MessageEmbed()
      .setColor("GOLD")
      .setAuthor(bot.user.tag, bot.user.displayAvatarURL())
      .setDescription(
        `
__**Command list**__

__Getting Started__
\`setup\` , \`setupembed\`
        
__Music Commands__
\`play\` > **\`play [title/url]\`**
\`search\` > **\`search [title]\`**
\`skip\`, \`stop\`,  \`pause\`, \`resume\`
\`nowplaying\`, \`queue\`, \`volume\`
\`lyrics\`, \`skipto\`, \`remove\`

__Chat Commands__
\`chat\`

__Invites Commands__
\`invites\`, \`serverinvites\`

__Moderation Commands__
\`ban\`, \`kick\`, \`mute\`, \`lock\`
\`sofban\`, \`warn\`, \`unmute\`, \`role\`
\`slowmode\`, \`createrole\`
\`unmute\`, \`purge\`
\`createtext\`, \`createvoice\`
\`createcategory\`, \`hackban\`
\`unban\`

__Ticket Commands__
\`tnew\`, \`tclose\`, \`trole\`
\`tcategory\`, \`tadduser\`

__Fun Commands__
\`meme\`, \`roast\`
\`8ball\`, \`dadjokes\`, \`coin\`

__Image Commands__
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

__Search Commands__
\`pokemon\`

__Utility Commands__
\`poll\`, \`shorten\`, \`weather\`
\`hastebin\`

__Info Commands__
\`serverinfo\`, \`whois\`, \`avatar\`
\`stats\`, \`roles\`

__Misc Commands__
\`invite\`, \`support\`, \`website\`
\`setnick\`, \`botnick\`, \`donate\`
\`syntax\`, \`vote\`

__Embed Commands__
\`say\`, \`advancedembed\`, \`rules\`
\`announce\`, \`embed\`, \`imageembed\`

__API Commands__
\`ping\`, \`uptime\`

__Suggest Commands__
\`suggest\`, \`review\`

__Bot Owner Only__
\`servers\`, \`dm\`

[**HOW TO USE OUR COMMANDS?**](https://pastebin.com/FQ2PzKjZ)
[**INVITE OUR BOT**](https://discord.com/oauth2/authorize?client_id=751079643980890225&scope=bot&permissions=2146958847)
[**CHECK OUT OUR WEBSITE**](https://saberofficial.ml/)
[**DONATE US**](https://patreon.com/saberbot)
[**JOIN OUR SUPPORT SERVER**](https://discord.gg/kBPpv47EJp)`
      )
      .setImage("https://i.imgur.com/CjNPEda.gif")
      .setFooter("©️ 2020 Saber Bot");
    message.channel.send(helpembed);
  }
}
