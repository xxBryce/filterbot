console.log(`Running node.js ${process.version}!`);
//Sush#9999
const { Intents, Client } = require('discord.js');
const Discord = require("discord.js")
const fetch = require('node-fetch');
const { endianness } = require('os');
const querystring = require('querystring');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
var prefix = "-"

const profanity = require('./profanity.json'); // assuming this is an array of words

client.on('messageCreate', async message => {
  if (message.content) {
    const profane = !!profanity.find((word) => {
      const regex = new RegExp(`\\b${word}\\b`, 'i'); // if the phrase is not alphanumerical,
      return regex.test(message.content);             // you may need to escape tokens
    });

    if (profane) {
     message.delete().catch(console.error)
	 const user = message.author;
		const embed = new Discord.MessageEmbed()
		.setTitle(`Profanity is prohibited.`)
		.setDescription(`Hey <@${message.author.id}>, please don't use profanity in this server. `)
		.setTimestamp()
		.setColor(`RANDOM`);
  message.channel.send({ embeds: [embed] })

    }
  }
});

client.on('ready', () => {
  console.log(`Logged in as`, client.user.tag);
})
client.on('ready', () => {
client.user.setActivity('your messages', { type: 'WATCHING' });
  })
client.on('messageCreate', async message => {
if (!message.content.startsWith(prefix) || message.author.bot) return;

const args = message.content.slice(prefix.length).trim().split(' ');
const command = args.shift().toLowerCase();
 
if(command == "ping"){
	message.channel.send('Pinging...').then((msg) => {
		ping = msg.createdTimestamp - message.createdTimestamp;
		const embed = new Discord.MessageEmbed()
		 .setColor(`RANDOM`)
		 .setTitle(`Pong!`)
		 .addField('Bot ping:', ping + "ms", true)
		 .addField('Websocket heartbeat:', `${client.ws.ping}ms`, true)
		message.channel.send({ embeds: [embed] })
		msg.delete();
	   });
	}




 

//login
});

client.login(process.env['token']);
