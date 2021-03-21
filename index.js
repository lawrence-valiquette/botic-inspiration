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
    '\"Only the paranoid survive.\" – Andy Grove ',
    '\"It’s hard to beat a person who never gives up.\" – Babe Ruth',
    '\"It always seems impossible until it\'s done.\" - Nelson Mandela',
    '\"Problems are not stop signs, they are guidelines.\" - Robert H. Schuller',
    '\"It\'s Not Whether You Get Knocked Down, It\'s Whether You Get Up.\" - Vince Lombardi',
    '\"We may encounter many defeats, but we must not be defeated.\" - Maya Angelou',
];

const mock = [
    '\"What smells worse than a goblin? Oh yeah, you!\"',
    '\"Your mother takes up more tiles than a gelatinous cube!\"',
    '\"You\'re going to make an excellent belt!\"',
    '\"I\'m glad you\'re tall...It means there\'s more of you I can despise!\"',
    '\"I don\'t know whether to use charm person or hold monster!\"',
    '\"You\'re the reason baby gnomes cry!\"',
    '\"Ugh. What the hell is that all over your face? Oh...its just your face!\"',
    '\"I\'ve seen more threatening geckos!\"',
    '\"I swear, if you were any worse at this, you\'d be doing our job for us!\"',
    '\"On a scale of 1 - 10, you\'re proper screwed!\"',
    '\"Your mother was a kobold and your father smelled of elderberry!\"',
    '\"You would bore the legs off a village idiot!\"',
    '\"It gives me a headache just trying to think down to your level!\"',
    '\"You\'re not a complete idiot...Some parts are obviously missing!\"',
    '\"You\'re like a trained ape, only, without the training!\"',
    '\"Well, my time of not taking you seriously is coming to a middle!\"',
    '\"Your mother\'s so ugly, folk turn to stone just incase they might happen to catch a glimpse of her face!\"',
    '\"Some day you\'ll meet a doppelganger of yourself and be disappointed!\"',
    '\"Are you always stupid, or are you making a special effort today!\"',
    '\"Some day you\'ll go far and I hope you stay there!\"',
    '\"You\'re lucky to be born beautiful, unlike me, who was born to be a big liar!\"',
    '\"I\'d like to leave you with one thought...but I\'m not sure you have anywhere to put it!\"',
    '\"Your momma\'s so ugly, clerics try to turn her!\"',
    '\"Your magic is as bad as your breath!\"',
    '\"Oh look, both your weapons are tiny!\"',
    '\"A wet cat is tougher than you!\"',
    '\"If ignorance is bliss, you must be the happiest person alive!\"',
    '\"I could say you\'re as ugly as an ogre, but that would be an insult to ogres!\"',
    '\"I would contact your mother about your death, but I don\'t speak goblin!\"',
    '\"Your very existence is an insult to all!\"',
    '\"You look like the armpit of an unshaven bog hag!\"',
    '\"You are maggot pie served from a dwarf\'s codpiece!\"',
    '\"A goblin with one hand nailed to a tree would be more of a threat than you!\"',
    '\"You look like a scab on a troll\'s wart!\"',
    '\"No loot is worth having to look at you!\"',
    '\"OMG. Why don\'t you give me your weapon so I can hit myself with it, because that\'d be more effective than you trying it!\"',
    '\"I\'d insult your parents, but you probably don\'t know who they are!\"',
    '\"Well...I have met sharper loaves of bread!\"',
    '\"Would you like me to remove that curse? Oh my mistake, you were just born that way!\"',
    '\"There is no beholder\'s eye in which you are beautiful!\"',
    '\"Animal friendship was the only way your parents could get puppies to play with you!\"',
    '\"Your ugly face makes a good argument against raising the dead!\"',
    '\"If your brain exploded, it wouldn\'t even mess up your hair!\"',
    '\"Somewhere, Your depriving a village of it\'s idiot!\"',
    '\"I\'d like to see things from your point of view, but I can\'t get my head that far up my arse!\"',
    '\"I heard what happened to your mother, it\'s not everyday your reflection kills you!\"',
    '\"You look like your mother, and, your mother looks like your father!\"',
    '\"You\'re so stupid, if an illithid tried to eat your brain, it would starve to death!\"',
    '\"No wonder you\'re hiding behind cover, I\'d hide too with a face like that!\"',
    '\"If I were you, I\'d go and get my money back for that remove curse spell!\"',
    '\"OMG. And I thought troglodytes smelt bad!\"',
    '\"We\'re you once hit by a melf\'s acid arrow or have you always looked like a half eaten marrow!\"',
    '\"Phew! Have you just cast stinking cloud or do you always smell like that!\"',
    '\"Very impressive, I think I\'ll hire you out for children\'s parties!\"',
    '\"Hey, you pox ridden dung heap, I bet not even a starving vampire would go near you!\"',
    '\"By looking at you, now I know what you get when you scrape out the bottom of the barrel!\"',
    '\"I was going to cast detect thoughts, but I don\'t think I\'m going to find anything up there!\"',
    '\"I wish I still had that blindness spell, then I wouldn\'t have to endure that face anymore!\"',
    '\"I was thinking of casting feeblemind, but I doubt it would work on you!\"',
    '\"Tell me, did you run away from your parents, or did they run away from you!\"',
    '\"What\'s the difference between a troll and your mother? One\'s a stinking ugly monster, and the other is a troll!\"',
    '\"I was wondering what you are, you\'re fat enough to be an ogre, but I\'ve never seen an ogre THAT ugly before!\"',
    '\"Your mother was so stupid, zombies made her a dunce hat!\"',
    '\"You\'re like a gnome on stilts, real cute, but it\'s not working!\"',
    '\"I\'d say you were a worthy opponent, but I once fought a flumph wielding a dandelion!\"',
    '\"If this fight gets any harder, I\'ll have to switch it up to folk music!\"',
    '\"Do you know what happens to a [insert] when it fails it\'s save? Neither do I, but based on what happened to your comrade, my money\'s on \'dies horribly\'!\"',
    '\"How does it feel that you\'re not worthy of anyone casting a decent spell on you!\"',
    '\"One day I\'m going to make a ballad of this fight. Tell me your name, I hope it rhymes with horribly slaughtered!\"',
    '\"Your mother is so fat that making a joke here would detract from the seriousness of her condition!\"',
    '\"Stop me if you\'ve heard this one. The sole purpose of your existence is to serve as a speedbump on others path to greatness - okay you definitely should of stopped me by now!\"',
    '\"Wait, wait, I just need to ask, what do you need us to put on your headstone!\"',
    '\"Beauty is in the eye of the Beholder...which is what you look like. A Beholder.\"',
];
client.on('ready', () => {
    console.log(`${client.user.tag} is tuning their lute!`);
});

client.on('message', message => {
    if (message.content.toLocaleLowerCase() === '!inspiration') {
        var rando = Math.floor(Math.random() * (inspire.length));
        message.channel.send(inspire[rando]);
    }

    if (message.content.toLocaleLowerCase() === '!mock') {
        var rando = Math.floor(Math.random() * (mock.length));
        message.channel.send(mock[rando]);
    }
});


client.login(TOKEN);