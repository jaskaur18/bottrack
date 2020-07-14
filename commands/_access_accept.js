/*CMD
  command: /access_accept
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER
  keyboard: 
  aliases: 
CMD*/


Bot.editInlineKeyboard([]);
User.setProperty("username"+params,User.getProperty("tempusername"),"string")
Bot.sendMessage("User Username Is Accepted")
