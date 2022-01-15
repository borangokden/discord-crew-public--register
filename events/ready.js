const Discord = require("discord.js");
const moment = require("moment");
const ayarlar = require("../ayarlar.json")

module.exports = client => {
  client.user.setActivity(ayarlar.botdurum);
};
