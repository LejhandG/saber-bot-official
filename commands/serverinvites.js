const Discord = require("discord.js");

module.exports = {
    name: "serverinvites",
description: "command description",
alias: [],
run: async (bot, message, args, url, searchString, youtube, handleVideo, serverQueue, play) => {

    if(!message.member.hasPermission("MANAGE_INVITES")) return message.reply("You don't have premission to do that!");

    let invites = await message.guild.fetchInvites().catch(error => {
        return message.channel.send('Sorry, I don\'t have the proper permissions to view invites!');
    });
    
    invites = invites.array();
    
    let possibleinvites = [];
    invites.forEach(function(invites) {
        possibleinvites.push(`${invites.inviter.username} ||  ${invites.uses}`)
    })
    
    const embed = new Discord.MessageEmbed()
        .setTitle(`**INVITE LEADERBOARD**`)
        .setColor(0xCB5A5E)
        .addField('Invites', `\`\`\`${possibleinvites.join('\n')}\`\`\``)
        .setTimestamp();
    message.channel.send(embed);
    }
}
