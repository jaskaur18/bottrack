/*CMD
  command: /Username
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: Enter Your Username
  keyboard: 
  aliases: 
CMD*/

User.setProperty("username", message, "string");

Bot.sendMessage("Username Has Been Saved✅")
