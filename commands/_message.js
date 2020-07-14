/*CMD
  command: /message
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

Bot.sendMessage(options.weburl +  "?utm_source=facebook_fb01a&utm_medium=facebook_fb01a_" + User.getProperty("username"))
