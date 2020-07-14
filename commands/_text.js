/*CMD
  command: /text
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: Enter Your Username
  keyboard: 
  aliases: 
CMD*/

User.setProperty("tempusername", message, "string");
Bot.run({command:"/hehe"})
