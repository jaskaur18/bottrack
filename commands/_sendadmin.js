/*CMD
  command: /sendadmin
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

if(params=="request"){
Bot.editInlineKeyboard([]);

Api.sendMessage({
 chat_id: 1335248033 , 
text: "@"+user.username+" si e’ registrato con il track  "+User.getProperty("tempusername"),

  reply_markup: { inline_keyboard: [
   
 [  {text: "Accetta ✅", callback_data:"/access_accept "+User.getProperty("userid")},
     ],[ { text: "Rifiuta ❌", callback_data:"/access_decline"},],
[
{ text: "Ban ❌", callback_data:"/access_ban "+User.getProperty("username1")}
    ]
   
  ]}
});
Api.sendMessage({
 chat_id: 137957414 , 
text: "@"+user.username+" si e’ registrato con il track   "+User.getProperty("tempusername"),

  reply_markup: { inline_keyboard: [
   
 [  {text: "Accetta ✅", callback_data:"/access_accept "+User.getProperty("userid")},
     ],[ { text: "Rifiuta ❌", callback_data:"/access_decline"},],
[
{ text: "Ban ❌", callback_data:"/access_ban "+User.getProperty("username1")}
    ]
   
  ]}
});


Api.sendMessage({
 chat_id: 743644892 , 
text: "@"+user.username+" si e’ registrato con il track   "+User.getProperty("tempusername"),

  reply_markup: { inline_keyboard: [
   
 [  {text: "Accetta ✅", callback_data:"/access_accept "+User.getProperty("userid")},
     ],[ { text: "Rifiuta ❌", callback_data:"/access_decline"},],
[
{ text: "Ban ❌", callback_data:"/access_ban "+User.getProperty("username1")}
    ]
   
  ]}
});
return
}




User.setProperty("userid",user.telegramid,"string")
User.setProperty("username1",user.username,"string")
Bot.sendMessage("Fatto ✅")
//Command /start
Bot.runCommand("/sendadmin request")
