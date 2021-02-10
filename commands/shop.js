const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js');

module.exports = {
  name: "shop",
  timeout : 5000,
  description: "Shows the economy shop",
  alias: [],
  run: async (bot, message, args, url, searchString, youtube, handleVideo, serverQueue, play) => {
  
  let items = Object.keys(bot.shop);
  let content = "";
  
  for (var i in items) {
    content += `${items[i]} - :dollar: ${client.shop[items[i]].cost}\n`
  }
  let embed = new MessageEmbed()
  .setTitle("Store")
  .setDescription(content)
  .setColor("RANDOM")
  .setFooter("Do :/buy <item> to purchase the item.")
  return message.channel.send(embed);
};
  }
}
