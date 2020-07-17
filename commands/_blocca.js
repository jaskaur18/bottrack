/*CMD
  command: /blocca
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 

  <<ANSWER
Enter Telegram User Username

Without @
  ANSWER
  keyboard: 
  aliases: 
CMD*/

if(user.username=="sartorellino"){
var id = message
Bot.setProperty("banned"+id,"banned","string")

Bot.sendMessage("@"
+user.username+"  successful banned from bot")}

else if(user.username=="Jollysx82"){
var id = message
Bot.setProperty("banned"+id,"banned","string")
Bot.sendMessage("@"
+user.username+"  successful banned from bot")}

else if(user.username=="Jollysx82"){
var id = message
Bot.setProperty("banned"+id,"banned","string")
Bot.sendMessage("@"
+user.username+"  successful banned from bot")}

else{Bot.sendMessage("You Are Not Admin")}
