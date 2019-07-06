const Discord = require('discord.js');
const client = new Discord.Client();
const auth = require('./auth.json');

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
    if (msg.content === 'Frey will show you around') {
      msg.reply('Ho there weary traveler! Welcome to Luskan, home of The Role-Player’s Guild I’m Frey, the Port Master. I have the pleasure of meeting all of the new arrivals seeking adventure and fame here in the guild. You can find other adventurers socializing in the Tavern. There, you can talk with other travelers and check any announcements or updates from guild leaders. Be sure to stop by the Guild Hall! There, you can learn the Rules of the guild as well as find helpful Resources for new recruits. More than that, though, please take this ale and enjoy your time here! :beer: Everyone is here because we are passionate about the same thing, I’m sure you’ll fit right in. So gather your gear and begin your quest!');
    }
  });

  client.on('message', msg => {
    if (msg.content === 'How fares the weather Port Master?') {
      msg.reply('There’s a warm breeze coming in from the coast. A fine day for adventuring!');
    }
  });

  client.on('message', msg => {
    if (msg.content === 'I need healing') {
      msg.reply('You’re in pretty rough shape. Here, take this! :orangepotion: ');
    }
  });

  client.on('message', msg => {
    if (msg.content === 'Tell me about Luskan') {
      msg.reply('Luskan, also known as the City of Sails, is a port city on the Northern Sword Coast . Built on the ruins of the ancient and magical orcish city of Illusk, Luskan was a port town frequented by pirates, thieves and other disreputable folk interested in money. Although life within its walls was dangerous, Luskan was a very lucrative city. Pirates brought in their goods to be sold to the black market and traders frequented the place as a rest stop during the warmer months. Nowadays, Luskan is a thriving hub for would be adventurers, Having one of the largest number of guilds and mercenary companies of any city on the sword coast. It is also home to the famous Seven Sails Inn. Feel free to stop by there if you need to rest.');
    }
  });

  client.on('message', msg => {
    if (msg.content === 'What’s your story Frey?') {
      msg.reply('Me? Well there isn’t much to tell. My mother was a Soldier who died during the Battle of Icewind Dale and my father was a blade maker who moved us to Daggerford to avoid the conflict. Like Luskan, Daggerford has many guilds and being the adventurer that I am, I joined the fighters guild at 16 despite the protests from my father making me the youngest recruit to be accepted. While there, I was hired by a group of traveling Tieflings to slay a manticore. After killing the beast, I was made a full member of the guild and continued to travel with the three Tieflings for a time until eventually we parted ways. I wonder what became of them? After that, I traveled North along the Sword Coast for a while, selling my sword as a mercenary for hire until eventually making my way to Luskan. I arrived just as the port was being raided by bandits. I helped the city fend off the raiders and as a reward for my bravery, I was offered the title of Port Master. I’ve been here ever since, defending the city as well as recruiting new adventurers for the local guilds.');
    }
  });

  client.on('message', msg => {
    if (msg.content === 'Hello Frey') {
      msg.reply('Greetings Adventurer!');
    }
  });

  client.on('message', msg => {
    if (msg.content === 'Goodbye Frey') {
      msg.reply('Farewell Adventurer!');
    }
  });

  client.on('message', msg => {
    if (msg.content === 'Frey, I think you’ve had too much to drink') {
      msg.reply('YOU SHUT YOUR WHORE MOUTH! *Stumbles Forward*');
    }
  });

  client.on('message', msg => {
    if (msg.content === 'What do we want?') {
      msg.reply('MORE ALE! :beer:');
    }
  });

  client.on('message', msg => {
    if (msg.content === 'When do we want it?') {
      msg.reply('NOW!');
    }
  });


client.login(auth.token);
