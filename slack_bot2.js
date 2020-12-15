function slackbot2(){

/** generalチャンネルへの通知 */ 
var postUrl = 'https://hooks.slack.com/services/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';
/** username */
var username = 'botbot';
var icon = ':hatching_chick';
var message = 'test'; //投稿メッセージ

   var jsonData ={
       "username":userName,
       "icon_emoji":icon,
       "text":message
   }
   
   var payload = JSON.stringify(jsonData);
   
   var options ={
       "methods":"post",
       "contentType":"application/json",
       "text":message
   }
   UrlFetchApp.fetch(psotUrl,options);
}