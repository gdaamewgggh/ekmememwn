const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setActivity('ابتسم فلا احد يهمه حزنك', { type: 'playing' })
});









client.login(process.env.TOKEN);