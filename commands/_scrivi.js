/*CMD
  command: /scrivi
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: invia una foto
  keyboard: 
  aliases: 
CMD*/

Bot.setProperty("photo",request.photo[0].file_id)
Bot.runCommand("/text")
