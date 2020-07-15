/*CMD
  command: /Publisher
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: Adesso scrivi il tuo track
  keyboard: 
  aliases: 
CMD*/

var banned = Bot.getProperty("banned"+user.username)
if(banned == "banned"){
Bot.sendMessage("You Have Been Banned By Admin")
return
}
else{
User.setProperty("tempusername", message, "string");
Bot.runCommand("/sendadmin")
}





