const { MessageEmbed } = require('discord.js')

module.exports = {
    name: "softban",
description: "Sofbans user",
alias: [],
run: async (bot, message, args, url, searchString, youtube, handleVideo, serverQueue, play) => {
    
    let wrong = new MessageEmbed()
        .setTitle(`Command: /softban`)
        .setDescription(`
**Description:** 
Bans the member and instantly unbans me
**Usage:**
/softban [user] [reason]
**Example:**
/softban @Vortex They were bad
`)
        .setFooter(message.author.tag, message.author.avatarURL())
        .setColor(`RANDOM`);
    
    const member = message.mentions.members.first() || message.guild.members.cache.get(args[1])
        let reason = args[2]
        if(!reason) reason = 'No provided'

        if(!member) return message.channel.send(wrong)
        if(member.user.id === message.author.id) return message.channel.send(`You can\`t ban yourself!`)
        if(!member.bannable) return message.channel.send(`I can\`t ban that user!`)

        message.channel.send( { embed: { description: `\`[⏲20s]\` Are you sure you want ban ${member}? \`[yes/no]\``, color: 'YELLOW' } } )

        const collector = createMessageCollector(message.channel, message => message.author.id === message.author.id, {
            time: 20000
        })

        collector.on('collect', message => {
            switch(message.content) {
                case "yes":
                    message.delete()
                    member.ban(`Banned by ${message.member.user.tag}, reason: ${reason}`)
                    .then(() => {
                        collector.stop('success');
                        return message.channel.send({embed:{description: `**Banned \`${member.user.tag} (${member.user.id})\`**`, color: 'GREEN', thumbnail: `${member.user.displayAvatarURL({dynamic:true})}`}})
                    }).catch(err => {
                        collector.stop('success');
                        if (err) return message.channel.send(`Error: \`${err}\``)
                    })
                break
                case "no":
                    message.delete()
                    message.channel.send(`Cancelled`)
                    collector.stop('success')
                break
                case "y":
                    message.delete()
                    member.ban(`Banned by ${message.member.user.tag}, reason: ${reason}`)
                    .then(() => {
                        collector.stop('success');
                        return message.channel.send({embed:{description: `**Banned \`${member.user.tag} (${member.user.id})\`**`, color: 'GREEN', thumbnail: `${member.user.displayAvatarURL({dynamic:true})}`}})
                    }).catch(err => {
                        collector.stop('success');
                        if (err) return message.channel.send(`Error: \`${err}\``)
                    })
                break
                case "n":
                    message.delete()
                    message.channel.send(`Cancelled`)
                    collector.stop('success')
                break
                default:
                    message.delete()
                    message.channel.send(`Cancelled`)
                    collector.stop('success')
            }
            collector.stop('success')
        })
        collector.on('end', (ignore, error) => {
            if (error && error !== "success") {
                return message.channel.send('**Timed out**')
            };
            collector.stop('success')
        });
}
}
