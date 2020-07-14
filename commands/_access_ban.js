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
User.setProperty("username"+User.getproperty("username"),"banned","string")
Bot.sendMessage("@"+params+"user successful banned from bot")

