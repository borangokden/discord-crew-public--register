const Discord = require("discord.js")
const ayarlar = require("../ayarlar.json")

module.exports.run = async (client, message, args) => {
    if(!ayarlar.yetkiliRol.some(bg => message.member.roles.cache.has(bg)) && !message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`${ayarlar.no} **Bu işlemi gerçekleştirmek için gerekli yetkin yok!**`).then(message.react(client.emojis.cache.get(ayarlar.no)))

    const etiketlenenKişi = message.mentions.members.first() || message.guild.members.cache.get(args[0])
if(!etiketlenenKişi) return message.channel.send(`${ayarlar.no} **Tag rolü vermek için bir kişi etiketlemelisin!**`).then(message.react(client.emojis.cache.get(ayarlar.no)))

const BoranGkdnEmbed = new Discord.MessageEmbed()
.setColor("RANDOM")
.setFooter(ayarlar.footer)
.setAuthor(message.member.displayName, message.author.avatarURL({dynamic: true}))
.setTimestamp()

if(etiketlenenKişi.roles.cache.has(ayarlar.tagRol)) return message.channel.send(BoranGkdnEmbed.setDescription(`Kullanıcıdan başarıyla taglı <@&${ayarlar.tagRol}> rolü alındı!`)).then(etiketlenenKişi.roles.remove(ayarlar.tagRol))

etiketlenenKişi.roles.add(ayarlar.tagRol)

message.react(ayarlar.yes)

message.channel.send(BoranGkdnEmbed.setDescription(`Kullanıcıya başarıyla taglı <@&${ayarlar.tagRol}> rolü verildi!`))//Youtube Matthe

}
exports.config = {
    name: "tagges",
    guildOnly: true,
    aliases: ["tagrol", "taglırol", "taglirol"]
}