const { MessageEmbed } = require('discord.js')
const ms = require("ms")

module.exports = {
    name: "mute",
description: "Mutes the user",
alias: [],
run: async (bot, message, args, url, searchString, youtube, handleVideo, serverQueue, play) => {
  if (!message.member.hasPermission("MUTE_MEMBERS")) {
  	return message.reply('you do not have the required permissions to use this cmd.')
  }

 if (!message.guild.roles.cache.find(r => r.name === "Muted")) {
 	let mutedRole = await message.guild.roles.create({
 		data: {
 			name:"Muted",
 			color:0x808080
 		}
 	})
     
    message.guild.channels.filter(c => c.type === "text").forEach(c => {
    	c.overwritePermissions({
             permissionOverwrites: [
             {
                id: mutedRole.id,
                deny: ["SEND_MESSAGES"]
             }
             ]
    	})
    })

 }




    let member = message.guild.members.cache.find(r => r.name === args[0]) || message.guild.members.cache.get(args[0]) || message.mentions.members.first()
    if (!member) return message.reply('Invalid arguments, you forgot a member.')
    if (!args[2]) return message.reply('you forgot to supply a valid time.')
    let time = args[2]
    let roletoremove = message.guild.roles.cache.find(r => r.name === "Muted")

    if (ms(time) === undefined) {
    	return message.reply('That was not a valid time, please respond with a valid time.')
    }



    if (member.roles.cache.has(roletoremove.id)) {
    	message.reply('This user is already muted, please unmute them before.')
    }
   


    member.roles.add(roletoremove.id)

    message.reply(`I muted ***${member.user.tag}*** for ${time}`)

    setTimeout(() => {
    	if (!member.roles.cache.has(roletoremove.id)) {
    		return;
    	}
        member.roles.remove(roletoremove.id)
        member.user.send(`Your mute was lifted in ` + message.guild.name + '.')
    }, ms(time))

}
}