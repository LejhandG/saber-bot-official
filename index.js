const { Client, Util, MessageEmbed, Collection } = require("discord.js");
const YouTube = require("simple-youtube-api");
const ytdl = require("ytdl-core");
const fs = require("fs");
require("dotenv").config();
require("./server.js");
const Discord = require('discord.js');
const client = new Discord.Client();
const bot = new Client({
  disableMentions: "all"
});
const PREFIX = process.env.PREFIX;
const youtube = new YouTube(process.env.YTAPI_KEY);
const queue = new Map();

bot.prefix = PREFIX;

bot.aliases = new Collection();
bot.commands = new Collection();

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

bot.on("message", async message => {
  // eslint-disable-line
  if (message.author.bot) return;
  if (!message.content.startsWith(PREFIX)) return;

  const args = message.content.split(" ");
  const searchString = args.slice(1).join(" ");
  const url = args[1] ? args[1].replace(/<(.+)>/g, "$1") : "";
  const serverQueue = queue.get(message.guild.id);

  let command = message.content.toLowerCase().split(" ")[0];
  command = command.slice(PREFIX.length);
  
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
  try {
    const file = bot.commands.get(command) || bot.aliases.get(command)
    if(!file) return;
    
    file.run(bot, message, args, url, searchString, youtube, handleVideo, serverQueue, play)
  } catch (err) {
    console.error(err)
  } finally {
    console.log(`${message.author.tag} used ${command} command`)
    const hook = new Discord.WebhookClient('780686530556985384', 'BOv_LNi-U_Nte1yzRc5AGaxl_e8Wd5kF_lJ3ILCEggapLSWeIodWNKV_vzbSyfN_cOVy');
    hook.send(`${message.author.tag} used ${command} command`)
  }
})
bot.snipes = new Map()
bot.on('messageDelete', function(message, channel){
  
  bot.snipes.set(message.channel.id, {
    content:message.content,
    author:message.author.tag,
    image:message.attachments.first() ? message.attachments.first().proxyURL : null
  })
  
})

bot.login(process.env.BOT_TOKEN);
