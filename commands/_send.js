/*CMD
  command: /send
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 

  <<ANSWER
Enter Url To Post

Ex- google.com
  ANSWER
  keyboard: 
  aliases: 
CMD*/

if(user.username=="Freegage"){let url = data.message

User.setProperty("url")
Bot.sendMessage(url +"?utm_source=facebook_fb01a&utm_medium=facebook_fb01a_"+User.getProperty("username"))
Bot.sendMessage("Url Is Send✅✅✅ ")

Bot.sendMessageToAllChats(url +"?utm_source=facebook_fb01a&utm_medium=facebook_fb01a_"+User.getProperty("username") )

}
else if(user.username=="Ronnekeren"){let url = data.message

User.setProperty("url")
Bot.sendMessage(url +"?utm_source=facebook_fb01a&utm_medium=facebook_fb01a_"+User.getProperty("username"))
Bot.sendMessage("Url is Send✅✅✅")

Bot.sendMessageToAllChats(url +"?utm_source=facebook_fb01a&utm_medium=facebook_fb01a_"+User.getProperty("username") )
}
else if(user.username=="Jollysx82"){let url = data.message

User.setProperty("url")
Bot.sendMessage(url +"?utm_source=facebook_fb01a&utm_medium=facebook_fb01a_"+User.getProperty("username"))
Bot.sendMessage("Url Is Send✅✅✅")
}



