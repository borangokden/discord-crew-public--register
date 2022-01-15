const Discord = require("discord.js")
const ayarlar = require("../ayarlar.json")

module.exports.run = async (client, message, args) => {
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`${ayarlar.no} **Bu işlemi gerçekleştirmek için gerekli yetkin yok!**`).then(message.react(client.emojis.cache.get(ayarlar.no)))

    const etiketlenenKişi = message.mentions.members.first() || message.guild.members.cache.get(args[0])
if(!etiketlenenKişi) return message.channel.send(`${ayarlar.no} **Vip vermek için bir kişi etiketlemelisin!**`).then(message.react(client.emojis.cache.get(ayarlar.no)))

const borangkdnnn = new Discord.MessageEmbed()
.setColor("RANDOM")
.setFooter(ayarlar.footer)
.setAuthor(message.member.displayName, message.author.avatarURL({dynamic: true}))
.setTimestamp()

if(etiketlenenKişi.roles.cache.has(ayarlar.vipRol)) return message.channel.send(borangkdnnn.setDescription(`Kullanıcıdan başarıyla vip <@&${ayarlar.vipRol}> rolü alındı!`)).then(etiketlenenKişi.roles.remove(ayarlar.vipRol))

etiketlenenKişi.roles.add(ayarlar.vipRol)

message.react(ayarlar.yes)

message.channel.send(borangkdnnn.setDescription(`Kullanıcıya başarıyla <@&${ayarlar.vipRol}> rolü verildi!`))//Youtube Matthe

}
exports.config = {
    name: "vip",
    guildOnly: true,
    aliases: ["valuable", "very-important-person", "veryimportantperson"]
}