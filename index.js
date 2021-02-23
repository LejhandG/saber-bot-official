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
const { GiveawayCreator } = require('discord-giveaway');
const Creator = new GiveawayCreator(bot, 'mongodb+srv://Lejhand:united60@saberofficial.ta9ju.mongodb.net/test');
const db = require('quick.db')
const dbb = require('./reconDB')
const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://Lejhand:united60@saberofficial.ta9ju.mongodb.net/test', { useNewUrlParser: true, useUnifiedTopology: true})
const Levels = require('discord-xp')

Levels.setURL("mongodb+srv://Lejhand:united60@saberofficial.ta9ju.mongodb.net/test")

const Timeout = new Collection();
const youtube = new YouTube(process.env.YTAPI_KEY);
const queue = new Map();

bot.aliases = new Collection();
bot.commands = new Collection();
bot.giveaways = Creator;

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
    }else return;
}else;
  if (!message.content.startsWith(PREFIX)) return;

  const args = message.content.split(" ");
  const searchString = args.slice(1).join(" ");
  const url = args[1] ? args[1].replace(/<(.+)>/g, "$1") : "";
  const serverQueue = queue.get(message.guild.id);

  let command = message.content.toLowerCase().split(" ")[0];
  command = command.slice(PREFIX.length);
  
  const data = await schema.findOne({ Guild: message.guild.id, Command: command});
  if(data) message.channel.send(data.Response)
  
  const randomXp = Math.floor(Math.random() *9) + 1;
  const hasLeveledUp = await Levels.appendXp(message.author.id, message.guild.id, randomXp);
  if (hasLeveledUp) {
    const user = await Levels.fetch(message.author.id, message.guild.id)
    message.channel.send(`You leveled up to ${user.level}! Keep it going!`)
  }
  
  async function handleVideo(video, message, voiceChannel, playlist = false) {
    const serverQueue = queue.get(message.guild.id);
    const song = {
      id: video.id,
      title: Util.escapeMarkdown(video.title),
      url: `https://www.youtube.com/watch?v=${video.id}`
    };
    if (!serverQueue) {
      const queueConstruct = {
        textChannel: message.channel,
        voiceChannel: voiceChannel,
        connection: null,
        songs: [],
        volume: 100,
        playing: true,
        loop: false
      };
      queue.set(message.guild.id, queueConstruct);
      queueConstruct.songs.push(song);

      try {
        var connection = await voiceChannel.join();
        queueConstruct.connection = connection;
        play(message.guild, queueConstruct.songs[0]);
      } catch (error) {
        console.error(
          `[ERROR] I could not join the voice channel, because: ${error}`
        );
        queue.delete(message.guild.id);
        return message.channel.send({
          embed: {
            color: "GOLD",
            description: `❌ I could not join the voice channel, because: **\`${error}\`**`
          }
        });
      }
    } else {
      serverQueue.songs.push(song);
      if (playlist) return;
      else
        return message.channel.send({
          embed: {
            color: "GOLD",
            description: `✅ **|**  **\`${song.title}\`** has been added to the queue`
          }
        });
    }
    return;
  }

  function play(guild, song) {
    const serverQueue = queue.get(guild.id);

    if (!song) {
      serverQueue.voiceChannel.leave();
      return queue.delete(guild.id);
    }

    const dispatcher = serverQueue.connection
      .play(ytdl(song.url))
      .on("finish", () => {
        const shiffed = serverQueue.songs.shift();
        if (serverQueue.loop === true) {
          serverQueue.songs.push(shiffed);
        }
        play(guild, serverQueue.songs[0]);
      })
      .on("error", error => console.error(error));
    dispatcher.setVolume(serverQueue.volume / 100);

    serverQueue.textChannel.send({
      embed: {
        color: "GOLD",
        description: `✅ **|**  Start Playing: **\`${song.title}\`**`
      }
    });
  }
  blacklist.findOne({ id : message.author.id }, async(err, data) => {
    if(err) throw err;
    if(!data) {
      try {
        const file = bot.commands.get(command) || bot.aliases.get(command)
        if(!file) return message.channel.send("You are using wrong command")
        if (file) {
          if(file.timeout) {
            if(Timeout.has(`${file.name}${message.author.id}`)) return message.reply(`, a little too quick there.`)
            file.run(bot, message, args, url, searchString, youtube, handleVideo, serverQueue, play)
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

  let modlog = db.get(`moderation.${message.guild.id}.modlog`);
  if (!modlog) return;

  if (message.channel.id === modlog.channel) return;

  let toggle = modlog.toggle;
  if (!toggle || toggle == null || toggle == false) return;

  const embed = new MessageEmbed()
  .setTitle("Message Deleted")
  .setDescription(`**Channel** : <#${message.channel.id}> \n **By** : ${message.author.tag} \n **Message** : ${message.content}`)
  .setTimestamp()
  .setColor("ORANGE")

  return message.guild.channels.cache.get(modlog.channel).send(embed);
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
