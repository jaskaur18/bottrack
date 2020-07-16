/*CMD
  command: /text
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: Inserisci il Testo.
  keyboard: 
  aliases: 
CMD*/

let textt = message



Bot.runAll({
command: "/textmessage",
options: {textt: message}
})
Bot.sendMessage("Il messaggio e’ stato inviato." )
