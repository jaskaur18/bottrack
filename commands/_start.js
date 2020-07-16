/*CMD
  command: /start
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER
  keyboard: 
  aliases: 
CMD*/



 var banned = Bot.getProperty("banned"+user.username)
if(banned == "banned"){
Bot.sendMessage("You Have Been Banned By Admin")
return
}
else{
var imageurl= "https://iili.io/dK5Byv.jpg"
Bot.sendMessage("Benvenuto! Clicca su /Publisher per impostare il tuo codice track")
}



