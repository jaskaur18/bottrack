/*CMD
  command: /textmessage
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

Api.sendPhoto({
photo: Bot.getProperty("photo"),
chat_id : user.telegramid,

})
Bot.sendMessage(options.textt)
