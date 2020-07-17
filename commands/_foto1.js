/*CMD
  command: /foto1
  help: 
  need_reply: false
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
