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

User.setProperty("userid",user.telegramid,"string")
User.setProperty("username1",user.username,"string")
//command /start
if(params=="request"){
Bot.editInlineKeyboard([]);

Api.sendMessage({
 chat_id: 739155522 , 
text: "@"+user.username+" His Username Is "+User.getProperty("tempusername"),

  reply_markup: { inline_keyboard: [
   
 [  {text: "Accept ✅", callback_data:"/access_accept "+User.getProperty("userid")},
     ],[ { text: "Decline ❌", callback_data:"/access_decline"},],
[
{ text: "Ban ❌", callback_data:"/access_ban "+User.getProperty("username1")}
    ]
   
  ]}
});
return
}



//Command /start
Bot.sendInlineKeyboard([
[{title:"title", command:"/sendadmin request"}]
],"Your Username is - "+User.getProperty("tempusername"));


