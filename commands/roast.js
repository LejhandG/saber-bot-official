const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js")
const messages = [
  "I'd offer you some gum but your smiles got plenty of it."  ,
"Repeat after me: semen is not hair gel."  ,
"Your body fat is about as evenly distributed as wealth in the US economy."  ,
"You're like dobby from harry potter  only people won't be sad when you die in the seventh book."  ,
"If I asked you about your cock it wouldn't be a very long conversation."  ,
"You have the kinds of looks that make people talk about your personality."  ,
"You look like the result of pressing random on the character creation menu."  ,
"You look like the after picture of a meth ad."  ,
"Even the shower doesn't want to see you naked."  ,
"I bet you wear a nose ring because no one wants to put one on your finger."  ,
"When the airforce needs extra landing space they should just rent out your forehead."  ,
"If laughter is the best medicine  your face must be curing the world."  ,
"The only way you will ever get laid is if you crawl up a chickens ass and wait."  ,
"It looks like your face caught fire and someone tried to put it out with a hammer."  ,
"Your family tree must be a cactus because everyone on it is a prick."  ,
"Save your breath - youre going to need it to blow up your date."  ,
"Your proof evolution can go in reverse."  ,
"When you were born  the doctor came out to the waiting room and said to your dad  \"I'm very sorry. We did everything we could. But he pulled through.\""  ,
"You've got less meat in your pants than there is in a vegetarian restaurant."  ,
"I wasn't born with enough middle fingers to let you know how I feel about you."  ,
"Your birth certificate is an apology letter from the condom factory."  ,
"You're about as useful as a vibrator with no batteries."  ,
"Fake hair  fake nails  fake smile. Are you sure you weren't made in China?"  ,
"Mirrors can't talk  and lucky for you they can't laugh either."  ,
"I'd say you're funny  but looks aren't everything."  ,
"You must have been born on a highway because thats where most accidents happen."  ,
"When I see your face theres not a thing I would change... Except for the direction im walking in."  ,
"Your so ugly when you popped out the doctor said aww what a treasure and your mom said yeah lets bury it."  ,
"I hear when you were a child your mother wanted to hire somebody to take care of you  but the mafia wanted too much."  ,
"You're so fat the only letters of the alphabet you know are KFC."  ,
"The only positive thing about you is your HIV status."  ,
"You're like STDs  nobody wants you  everyone hates you and it proves your parents should have used protection."  ,
"The only way I'd lay naked with you would be in a mass grave."  ,
"You're the cum your mother should have swallowed."  ,
"I heard your mom got fired from her job at the sperm bank - the boss caught her drinking on the job."  ,
"You should wear a condom on your head because if you're gonna act like a dick you might as well dress like one!"  ,
"Twinkle twinkle little star  I want to hit you with my car  Throw you off a cliff so high  I hope you break your neck and die."  ,
"Some babies were dropped on their heads but you were clearly thrown at a wall."  ,
"Roses are red  shit is brown  shut the fuck up  and sit the fuck down."  ,
"I see you were so impressed with your first chin that you added two more."  ,
"Twinkle twinkle little whore  close your legs  they're not a door."  ,
"I guess those penis enlargement pills are working - you're twice the dick you were yesterday!"  ,
"Twinkle Twinkle little slut  name a guy you haven't fucked  was he skinny  was he tall  Nevermind you did them all."  ,
"I failed a spelling test because they asked me how to spell 'bitch' and I wrote down your name."  ,
"You're like a light switch  even a little kid can turn you on."  ,
"I don't see any dicks in the general vicinity... So I'm wondering why you keep opening your fucking mouth."  ,
"Who lit the fuse on your tampon?"  ,
"Twinkle twinkle little slut  You like dick inside your butt."  ,
"The last time I saw a face like yours I fed it a banana."  ,
 "Roses are red  violets are blue. I have five fingers and the middle one is for you."  ,
"I'd like to kick you in the teeth but why improve your looks?"  ,
"At least there's one good thing about your body. It isn't as ugly as your face."  ,
"Your the reason the gene pool needs a lifeguard."  ,
"Your not yourself today  I noticed the improvement immediately."  ,
"You\'re the reason your dad drinks."  ,
"Is your butt jealous of the amount of shit that just came out of your mouth?"  ,
"You\'d be suicidal if you felt as bad as you look."  ,
"Your lips keep moving but I don\'t speak stupid."  ,
"Calling you an idiot would be an insult to all stupid people."  ,
"Brains aren\'t everything  in fact in your case their nothing."  ,
"I know your not as stupid as you look  Nobody could be!"  ,
"You\'re kind of like Rapunzel except instead of letting down your hair  you let down everyone in your life."  ,
"You have more dick in your personality than you do in your pants."  ,
"I\'m sorry your dad beat you instead of cancer."  ,
"You\'re so fat you need cheat codes to play Wii Fit."  ,
"The only thing that goes erect when I'm near you is my middle finger."  ,
"Stop bullying fat people  they have enough on their plate."  ,
"If I were your mirror I would commit suicide."  ,
"Being a dick to everyone won\'t make yours any bigger."  ,
"Your face could scare the shit out of a toilet."  ,
 "They say people get what they deserve. In your case it\'s a participation trophy."  ,
"Anyone willing to fuck you is just too lazy to masturbate."  ,
"Your so stupid I don\'t have the time or the crayons to explain this to you."  ,
"Your face looks like something I would draw with my non dominant hand."  ,
"If my dog had your face I would shave his ass and teach him to walk backwards."  ,
"If your IQ was multipled by anything it would still be   ."  ,
"At least Hitler killed himself."  ,
"I\'d agree with you but then we\'d both be wrong."  ,
"When you were born your mom threw you out the window and the window threw you back."  ,
"You're about as useful as Anne Frank's drum set."  ,
"If I wanted to kill myself I'd climb your ego and jump to your IQ."  ,
"I would burn you but burning trash is bad for the environment."  ,
"I haven\'t seen you run that fast since Twinkies went on sale!"  ,
"You were so ugly that when you were born the doctor put tinted windows on your incubator."  ,
"Everything that comes out of your mouth is a lie  everything that goes in is a cock."  ,
"I heard you received a brain transplant but it rejected your body."  ,
"The only reason your partner likes your dick is because they were taught to enjoy the little things in life."  ,
"Someone once said your as pretty as a picture... I agree I would love to hang you."  ,
"Your like Mondays  everyone hates you."  ,
"The \'s called  they want their haircut back."  ,
"You must\'ve been born at a pound because you're a son of a bitch."  ,
"It\'s better to let someone think you are an idiot then to open your mouth and prove it."  ,
"I guess you prove that even god makes mistakes sometimes."  ,
"I\'m jealous of people that don\'t know you!"  ,
"You\'re so dumb that you got hit by a parked car."  ,
"I bet your brain feels as good as new  seeing that you never use it."  ,
"What\'s the difference between you and eggs? Eggs get laid and you don\'t."  ,
"If you\'re gonna be a smartass  first you have to be smart. Otherwise you\'re just an ass."  ,
"At least when I do a handstand my stomach doesn\'t hit me in the face."  ,
"I don\'t exactly hate you  but if you were on fire and I had water  I\'d drink it."  ,
"God made you as an example of what not to do."  ,
"You're proof that God has a sense of humor."  ,
"You\'re so fat you could sell shade."  ,
"You\'ll never be the man your mother is."  ,
"Which sexual position produces the ugliest children? Ask your mother."  ,
"I thought of you today. It reminded me to take the garbage out."  ,
"You\'re so ugly when you look in the mirror  your reflection looks away."  ,
"Gay? I\'m straighter than the pole your mom dances on."  ,
"I just stepped in something that was smarter than you and smelled better too."  ,
"I can\'t help imagining how much awesomer the world would be if your dad had just pulled out."  ,
"Good story  but in what chapter do you shut the fuck up?"  ,
"I was pro life. Then I met you."  ,
"I\'d tell you to go fuck yourself  but that would be cruel and unusual punishment."  ,
"You stare at frozen juice cans because they say  \"concentrate\"."  ,
"You have the perfect face for radio."  ,
"You\'re so ugly you make blind kids cry."  ,
"Nice shirt  what brand is it? Clearance?"  ,
"Don\'t you need a license to be that ugly?"  ,
"One more wrinkle and you\'d pass for a prune."  ,
"You\'re so dumb  your dog teaches you tricks."  ,
"You\'re the reason they invented double doors!"  ,
"Hold on  I\'ll go find you a tampon."  ,
"You prefer three left turns to one right turn."  ,
"You conserve toilet paper by using both sides."  ,
"What did you have for breakfast? Bitch Flakes?"  ,
"You're so stupid you tried to wake a sleeping bag."  ,
"You're so stupid  you'd trip over a cordless phone."  ,
"I called your boyfriend gay and he hit me with his purse!"  ,
"You're so stupid  it takes you an hour to cook minute rice."  ,
"Don't feel sad  don't feel blue  Frankenstein was ugly too."  ,
"If I wanted a bitch I'd have bought a dog."  ,
"You shouldn't play hide and seek  no one would look for you."  ,
"You're so ugly  when you threw a boomerang it didn't come back."  ,
"The clothes you wear are so ugly even a scarecrow wouldn't wear them."  ,
"You're so ugly  when you got robbed  the robbers made you wear their masks." 
  ];
  

module.exports = {
    name: "roast",
  timeout : 3000,
description: "Roast Command",
alias: [],
run: async (bot, message, args, url, searchString, youtube, handleVideo, serverQueue, play) => {
  
  let wrong = new MessageEmbed()
        .setTitle(`Command: /roast`)
        .setDescription(`
**Description:** 
Roasts the mentioned user
**Usage:**
/roast @user
**Example:**
/roast @Vortex
`)
        .setFooter(message.author.tag, message.author.avatarURL())
        .setColor(`RANDOM`);
  
  let name = args.slice(1).join(' ');
  if (name.length < 1) return message.reply(wrong);
  
  if (message.channel.nsfw) {
   let user = message.mentions.users.first()
   const randomMessage = messages[Math.floor(Math.random() * messages.length)];
  
   const helpembed = new MessageEmbed()
   .setColor("ORANGE")
   .setThumbnail("https://cdn.discordapp.com/attachments/587597405940350999/774247521140473897/oof-size-large-23-memes-85.jpg")
   .setDescription(randomMessage)
   .setFooter(message.author.tag, message.author.avatarURL())
   
   message.channel.send(user.tag)
   message.channel.send(helpembed)
  }
  else
    {
      message.channel.send('This is a SFW channel. This command is NSFW')
    }
}
}
