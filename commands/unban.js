const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "unban",
    timeout : 8000,
description: "Unban Command",
alias: [],
run: async (bot, message, args, url, searchString, youtube, handleVideo, serverQueue, play) => {
    
    let wrong = new MessageEmbed()
        .setTitle(`Command: ${bot.prefix}unban`)
        .setDescription(`
**Description:** 
Unbans a member already banned in the guild
**Usage:**
${bot.prefix}unban [id]
**Example:**
${bot.prefix}unban 791040912740294
`)
        .setFooter(message.author.tag, message.author.avatarURL())
        .setColor(`RANDOM`);
    
    if (!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send('You are missing **BAN_MEMBERS** permission!').then(m => m.delete({ timeout: 5000 }));

    if (!args[1]) return message.channel.send(wrong).then(m => m.delete({ timeout: 5000 }));

    let member;

    try {
        member = await bot.users.fetch(args[1])
    } catch (e) {
        return message.channel.send('Not a valid user!').then(m => m.delete({ timeout: 5000 }));
    }

    const reason = args[2] ? args.slice(2).join(' ') : 'No reason';

    const embed = new MessageEmbed()
        .setFooter(`${message.author.tag} | ${message.author.id}`, message.author.displayAvatarURL({ dynamic: true }));

    message.guild.fetchBans().then( bans => {

        const user = bans.find(ban => ban.user.id === member.id );

        if (user) {
            embed.setTitle(`Successfully Unbanned ${user.user.tag}`)
                .setColor('RANDOM')
                .addField('User ID', user.user.id, true)
                .addField('User Tag', user.user.tag, true)
                .addField('Banned Reason', user.reason != null ? user.reason : 'No reason')
                .addField('Unbanned Reason', reason)
            message.guild.members.unban(user.user.id, reason).then(() => message.channel.send(embed))
        } else {
            embed.setTitle(`User ${member.tag} isn't banned!`)
                .setColor('#ff0000')
            message.channel.send(embed)
        }

    }).catch(e => {
        message.channel.send('An error has occurred!')
    });

}
}
