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


var id = message
Bot.setProperty("banned"+id,"banned","string")
Bot.sendMessage("@"
+user.username+"  successful banned from bot")



