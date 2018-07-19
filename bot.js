const Discord = require("discord.js");
const client = new Discord.Client();
const config= require("./config.json")

client.on("ready", (message) => {
  console.log("I am ready!");
});

client.on("message",(message)=>{
//Message Handler
    if(!(message.content.startsWith(config.prefix)) || message.author.bot) return;
    
    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    var commandsHelp;
    
      switch(command)
      {
      case "status": 
          message.channel.send("ON!and ready for sucking a lot of dicks!"+":stuck_out_tongue_closed_eyes:"+":eggplant:"); 
          break ;
      case "suck": 
          message.channel.send("I suck ya dick"+" "+message.author); 
          break;
      case "secret_suck": 
          if(config.authorID==message.author.authorID) message.channel.send("Masterrrrrr!Nyaa~!");
          break;
      case "roll":
        message.channel.send(message.author +" rolled a "+Math.floor(Math.random()*101));
        break;
      case "play":
      const channel=message.member.voiceChannel;
      channel.join();
      break;
      }
      
});
client.login(config.token);
