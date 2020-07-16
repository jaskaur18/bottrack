/*CMD
  command: /invia
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 

  <<ANSWER
Inserisci il tuo post 

Ex- google.com
  ANSWER
  keyboard: 
  aliases: 
CMD*/

if(user.username=="sartorellino"){


Bot.sendMessage("Link inviato ✅✅✅")


Bot.runAll({
command: "/message",
options:{weburl:message}


})
}
else if(user.username=="pippocl"){let url = data.message



Bot.sendMessage("Link inviato ✅✅✅")

Bot.runAll({
command: "/message",
options:{weburl:message}


})

}
else if(user.username=="Jollysx82"){let url = data.message



Bot.sendMessage("Link inviato ✅✅✅")
Bot.runAll({
command: "/message",
options:{weburl:message}


})
}

else{
Bot.sendMessage("Only Admins Are Allowed To Post Links")}
