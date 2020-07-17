/*CMD
  command: /access_accept
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

Bot.editInlineKeyboard([]);
User.setProperty("username"+params,User.getProperty("tempusername"),"string")
Bot.sendMessage("Hai accettato l’utente "+ User.getProperty("tempusername"))
Api.sendMessage({
 chat_id: params , 
text: " L’ admin ha accettato il tuo track. Buon Lavoro!"
})
