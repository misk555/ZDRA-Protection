const { MessageEmbed, Collection } = require("discord.js");
const db = require("quick.db");
const cooldowns = new Map();

module.exports = async (client, message) => {
  try {
    if (message.author.bot || message.channel.type == "dm") return;
    let settings = db.fetch(`Settings_${message.guild.id}`);
    if (settings == null)
      return db.set(`Settings_${message.guild.id}`, {
        prefix: require("../../config/bot.json").mainPrefix,
        lang: require("../../config/bot.json").mainLang,
        admins: [`${require("../../config/bot.json").mainAdmin}`],
      });
    let prefix = settings.prefix;
    let lang = settings.lang;
    let admins = settings.admins;
    if (!message.content.includes(prefix)) return;
    const argument = message.content.slice(prefix.length).trim().split(/ +/g);
    if (lang == "en") {
      if (!admins.includes(message.author.id))
        return message.reply({
          content: "> :x: **You Are Not From The Allowed Admins**",
        });
    } else if (lang == "ar") {
      if (!admins.includes(message.author.id))
        return message.reply({ content: "> :x: **انت لست من ادمنز البوت**" });
    }
    const cmd = argument.shift().toLowerCase();
    const command =
      client.commands.get(cmd) ||
      client.commands.find((a) => a.aliases && a.aliases.includes(cmd));
    if (!command) return;
    if (!cooldowns.has(command.name)) {
      const coll = new Collection();
      cooldowns.set(command.name, coll);
    }
    const current_time = Date.now();
    const time_stamps = cooldowns.get(command.name);
    const cooldown_amount = 2 * 1000;
    if (time_stamps.has(message.author.id)) {
      const expiration_time =
        time_stamps.get(message.author.id) + cooldown_amount;
      if (current_time < expiration_time) {
        const time_left = (expiration_time - current_time) / 1000;
        return message.reply({
          embeds: [
            new MessageEmbed()
              .setColor("#FC0000")
              .setDescription(
                `**🕘 | You Are In Cooldown Please Wait \`${time_left.toFixed(
                  1
                )}\` To Use \`${prefix}${command.name}\` Again**`
              ),
          ],
        });
      }
    }
    time_stamps.set(message.author.id, current_time);
    setTimeout(() => time_stamps.delete(message.author.id), cooldown_amount);
    const args = message.content.split(" ");
    try {
      message.reply({
        content:
          "the normal command needs some fix, so for now only slash command are working",
      });
      //command.run(client, message, args, prefix, lang, admins, require("quick.db"), MessageEmbed);
    } catch (e) {
      message.reply({ content: ":x: | Something went wrong ```" + e + "```" });
    }
  } catch {
    console.log("");
  }
};
