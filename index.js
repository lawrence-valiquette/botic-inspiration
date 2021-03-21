require('dotenv').config();
const { Client, MessageAttachment } = require('discord.js');
const client = new Client();
const TOKEN = process.env.TOKEN;
const inspire = [
    '\"Every little thing gonna be alright!\" - Bob Marley',
    '\"I will survive! Oh as long as I know how to love I know I will stay alive!\" - Gloria Gaynor',
    '\"I won\'t be afraid just as long as you stand, stand by me.\" - Ben E. King ',
    '\"You are Beautiful, no matter what they say.\" - Christina Aguilera',
    '\"It’s a beautiful day. Don’t let it get away.\" - U2',
    '\"Work it, make it, do it, makes us: harder, better, faster, stronger\" - Daft Punk',
    '\"In every life we have some trouble. But when you worry, you make it double.\" - Bobby McFerrin',
    '\"All you need is love, love. Love is all your need.\" - The Beatles',
    '\"Went the distance, now I\'m back on my feet. Just a man and his will to survive.\" - Survivor',
    '\"There\'s vomit on his sweater already, mom\'s spaghetti\" - Eminem',
    '\"All our dreams can come true, if we have the courage to pursue them.\" – Walt Disney',
    '\"\" – ',//12
]

client.on('ready', () => {
    console.log(`${client.user.tag} is tuning their lute!`);
});

client.on('message', message => {
    if (message.content.toLocaleLowerCase() === '!inspiration') {
        var rando = randomIntFromInterval(0,12);
        message.channel.send(inspire[rando]);
    }
});

function randomIntFromInterval(min, max) { 
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

client.login(TOKEN);