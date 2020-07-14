/*CMD
  command: /publisher
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: Adesso scrivi il tuo track
  keyboard: 
  aliases: 
CMD*/

var banned = Bot.getProperty("banned"+user.telegramid)
if(banned == "banned"){
Bot.sendMessage("You Are Banned By Admin")
return
}
else{

User.setProperty("username", message, "string");

Bot.sendMessage("il track e’ stato salvato correttamente.")
Bot.sendMessageToChatWithId("137957414", "A New User Joined Telegram Username - @"+user.username +"  His Username - "+User.getProperty("username"))
//-------------------------------
Bot.sendMessageToChatWithId("743644892", "A New User Joined Telegram Username - @"+user.username +"  His Username - "+User.getProperty("username"))
//------------------------------------
Bot.sendMessageToChatWithId("1335248033", "A New User Joined Telegram Username - @"+user.username +"  His Username - "+User.getProperty("username"))
 

}
