/*CMD
  command: /foto
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: invia una foto
  keyboard: 
  aliases: 
CMD*/

Bot.setProperty("photo",request.photo[0].file_id)
Bot.runAll({
command: "/foto1"

})
Bot.sendMessage("Il messaggio e’ stato inviato." )
