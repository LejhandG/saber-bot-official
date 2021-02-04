const { MessageEmbed } = require('discord.js')

module.exports = {
    name: "purge",
description: "Clears channels",
alias: ["clear"],
run: async (bot, message, url, searchString, youtube, handleVideo, serverQueue, play) => {
    
  let wrong = new MessageEmbed()
        .setTitle(`Command: /purge`)
        .setDescription(`
**Description:** 
Deletes the message in the channel
**Usage:**
/purge [number] | /purge bots | /purge @user 100 | /purge images | /purge all
**Example:**
/purge 100 | /purge @Vortex 10

**NUMBER SHOULD BE LESS THAN 100**
`)
        .setFooter(message.author.tag, message.author.avatarURL())
        .setColor(`RANDOM`);
    
  const args = message.content.split(" ");
  
  if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send('You do not have the required permission to use this command.').then(m => {
    setTimeout(() => {
        m.delete()
    }, 3000);
})
if (message.mentions.users.size > 0) {
    let amountToDelete = args[2]

    if (!args[1]) amountToDelete = 50;

    console.log(amountToDelete)
    if (parseInt(amountToDelete) > 100) return message.reply("The integer should be less than 100")
    let userMessages = await message.channel.messages.fetch({limit: parseInt(amountToDelete)})
    let userFilter = userMessages.filter(obj => obj.author.id === message.mentions.users.first().id)

    message.channel.bulkDelete(userFilter)
    message.reply('Done.').then(m => m.delete({timeout: 3000}))
    return;
}

    if (args[1] === "bots") {
    let awaitBotMessages = await message.channel.messages.fetch({limit: 100})
    let botFilter = awaitBotMessages.filter(obj => obj.author.bot)

    message.channel.bulkDelete(botFilter)
    message.reply('Done.').then(m => m.delete({timeout: 5000}))

    return;
}

    if (args[1] === "images") {
    let awaitImageMessages = await message.channel.messages.fetch({limit: 100})
    let imageFilter = awaitImageMessages.filter(obj => obj.attachments.size > 0)
    
    message.channel.bulkDelete(imageFilter)

    message.reply('Done.').then(m => m.delete({timeout: 5000}))
    return;
}
    
    if (args[1] === "help") {
    message.channel.send(wrong)
    return;
}



if (args[1] === "all") {
   let messages = 0;
   let i = true;
   while(i) {
   let deleteAble = await message.channel.messages.fetch({limit: 100})
   if(deleteAble.size < 100) {
     await message.channel.bulkDelete(deleteAble)
      messages += deleteAble.size;
      i = false;
      message.reply('Deleted ' + messages + ' messages.')
      messages = 0;
      return;
   }
   await message.channel.bulkDelete(deleteAble)
   messages += deleteAble.size
   }
} else if(typeof(parseInt(args[1])) == "number") {
    if (parseInt(args[1]) > 100) return message.reply(`must be a valid integer below or exact 100, otherwise use /purge all.`)
    let messages = await message.channel.messages.fetch({ limit: parseInt(args[1]) })
    message.channel.bulkDelete(messages)
}

}
}
