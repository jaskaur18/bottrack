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

var banned = User.getProperty("username"+user.username)
Bot.sendMessage(banned + "   h")
