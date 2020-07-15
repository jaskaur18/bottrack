/*CMD
  command: /access_ban
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

Bot.editInlineKeyboard([]);
Bot.setProperty("banned"+params,"banned","string")
Bot.sendMessage("@"+params+" Is Successful Ban From The Bot")
