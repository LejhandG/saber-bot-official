const { Client, Util, MessageEmbed, Collection } = require("discord.js");
const YouTube = require("simple-youtube-api");
const ytdl = require("ytdl-core");
const fs = require("fs");
const ms = require("ms")
require("dotenv").config();
require("./server.js");
const Discord = require('discord.js');
const client = new Discord.Client();
const bot = new Client({
  disableMentions: "everyone"
});
const { Player } = require('discord-player');
const { GiveawayCreator } = require('discord-giveaway');
const Creator = new GiveawayCreator(bot, 'mongodb+srv://Lejhand:united60@saberofficial.ta9ju.mongodb.net/test');
const db = require('quick.db')
const dbb = require('./reconDB')
const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://Lejhand:united60@saberofficial.ta9ju.mongodb.net/test', { useNewUrlParser: true, useUnifiedTopology: true})
const Levels = require('discord-xp')

Levels.setURL("mongodb+srv://Lejhand:united60@saberofficial.ta9ju.mongodb.net/test")

const Timeout = new Collection();

bot.aliases = new Collection();
bot.commands = new Collection();
bot.timeout = new Collection();
bot.giveaways = Creator;
bot.player = new Player(client);
bot.config = require('./config/bot');
bot.emotes = bot.config.emojis;
bot.filters = bot.config.filters;

const player = fs.readdirSync('./player').filter(file => file.endsWith('.js'));

for (const file of player) {
  const event = require(`./player/${file}`);
  bot.player.on(file.split(".")[0], event.bind(null, bot));
};

bot.on("warn", console.warn);
bot.on("error", console.error);
bot.on("ready", () =>
  console.log(`[READY] ${bot.user.tag} has been successfully booted up!`)
);
bot.on("shardDisconnect", (event, id) =>
  console.log(
    `[SHARD] Shard ${id} disconnected (${event.code}) ${event}, trying to reconnect...`
  )
);
bot.on("shardReconnecting", id =>
  console.log(`[SHARD] Shard ${id} is reconnecting...`)
);

const commandFile = fs.readdirSync("./commands").filter(file => file.endsWith(".js"));
commandFile.forEach(file => {
  const command = require(`./commands/${file}`)
  bot.commands.set(command.name, command);
  if(command.alias) {
  command.alias.forEach(alias => {
  bot.aliases.set(alias, command);
  })
  }
  bot.timeout.set(command.timeout, command)
  console.log(`Loaded command ${command.name} with alias(es) => ${command.alias}`)
  })

const schema = require('./models/custom-commands')
const blacklist = require('./models/blacklist')

bot.on("message", async message => {
  const PREFIX = db.get(`guild_${message.guild.id}_prefix`) || "/"
  bot.prefix = PREFIX;
  // eslint-disable-line
  if (message.author.bot) return;
  
  if (message.content === `<@!${bot.user.id}>`) {
    return message.channel.send(
      new Discord.MessageEmbed()
        .setTitle("Settings for this server")
        .setDescription(
          `Prefix of this server: \`${bot.prefix}\`
          Server Region: \`${message.guild.region}\`
          Server ID: \`${message.guild.id}\`

          Type \`${bot.prefix}help\` for the command list.
          [Support](https://saberofficial.ml/support.html) | [Invite](https://saberofficial.ml/invite.html)`
        )
        .setColor("ORANGE")
    );
  }
  
  if(await dbb.has(`afk-${message.author.id}+${message.guild.id}`)) {
    const info = dbb.get(`afk-${message.author.id}+${message.guild.id}`)
    await dbb.delete(`afk-${message.author.id}+${message.guild.id}`)
    message.reply(`Your afk status have been removed`)
}
//checking for mentions
if(message.mentions.members.first()) {
    if(await dbb.has(`afk-${message.mentions.members.first().id}+${message.guild.id}`)) {
        message.channel.send(message.mentions.members.first().user.tag + " is AFK. Reason : " + await dbb.get(`afk-${message.mentions.members.first().id}+${message.guild.id}`))
    }else;
}else;
  
  if(db.has(`ranktoggle-${message.guild.id}`)=== true) {
  const randomXp = Math.floor(Math.random() *9) + 1;
  const hasLeveledUp = await Levels.appendXp(message.author.id, message.guild.id, randomXp);
  if (hasLeveledUp) {
    const user = await Levels.fetch(message.author.id, message.guild.id)
    message.channel.send(`You leveled up to ${user.level}! Keep it going!`)
  }
  }else;
  
  if (!message.content.startsWith(PREFIX)) return;

  const args = message.content.split(" ");
  const searchString = args.slice(1).join(" ");

  let command = message.content.toLowerCase().split(" ")[0];
  command = command.slice(PREFIX.length);
  
  const data = await schema.findOne({ Guild: message.guild.id, Command: command});
  if(data) message.channel.send(data.Response)
  
  blacklist.findOne({ id : message.author.id }, async(err, data) => {
    if(err) throw err;
    if(!data) {
      try {
        const file = bot.commands.get(command) || bot.aliases.get(command)
        if(!file) return;
        if (file) {
          if(file.timeout) {
            if(Timeout.has(`${file.name}${message.author.id}`)) return message.reply(`, a little too quick there.`)
            file.run(bot, message, args)
            Timeout.set(`${file.name}${message.author.id}`, Date.now() + file.timeout)
            setTimeout(() => {
              Timeout.delete(`${file.name}${message.author.id}`)
            }, file.timeout)
          }
        }
      } catch (err) {
        console.error(err)
      } finally {
        console.log(`${message.author.tag} used ${command} command`)
        const hook = new Discord.WebhookClient('780686530556985384', 'BOv_LNi-U_Nte1yzRc5AGaxl_e8Wd5kF_lJ3ILCEggapLSWeIodWNKV_vzbSyfN_cOVy');
        hook.send(`${message.author.tag} with id ${message.author.id} used ${command} command`)
      }
    } else {
      message.channel.send("You are blacklisted. To get whitelisted back join the support server.")
    }
  })
})
bot.snipes = new Map()
bot.on('messageDelete', async function(message, channel){
  
  bot.snipes.set(message.channel.id, {
    content:message.content,
    author:message.author.tag,
    image:message.attachments.first() ? message.attachments.first().proxyURL : null
  })
  if (message.partial) await message.fetch();

  let modlogid = db.get(`moderation.${message.guild.id}.modlog.id`)
  let modlogtoken = db.get(`moderation.${message.guild.id}.modlog.token`)
  const hook = new Discord.WebhookClient(modlogid, modlogtoken);
  if (!hook) return;

  let toggle = db.get(`moderation.${message.guild.id}.modlog.toggle`);
  if (!toggle || toggle == null || toggle == false) return;

  const embed = new MessageEmbed()
  .setTitle("Message Deleted")
  .setDescription(`**Channel** : <#${message.channel.id}> \n **By** : ${message.author.tag} \n **Message** : ${message.content}`)
  .setTimestamp()
  .setColor("ORANGE")

  return hook.send(embed)
})

bot.on('guildCreate', (guild) => {
  let channelToSend;

  guild.channels.cache.forEach((channel) => {
    if (
    channel.type === "text" && 
    !channelToSend && 
    channel.permissionsFor(guild.me).has("SEND_MESSAGES")
     ) channelToSend = channel;
  });

  if(!channelToSend) return;

  channelToSend.send(
    new MessageEmbed()
    .setTitle("Thanks for adding me to your server! 😊")
    .setDescription(`
To get started, go to a text channel and do \`/help\`

If you have any questions or need help with Saber, [click here](https://discord.gg/kBPpv47EJp) to talk to our support team!

For exclusive features like **chat** vote our bot on [**Top.gg**](https://top.gg/bot/751079643980890225/vote)
    `)
    .setColor("ORANGE")
  )
});

bot.login(process.env.BOT_TOKEN);
