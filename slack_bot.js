/** generalチャンネルへの通知 */ 
var postUrl = 'https://hooks.slack.com/services/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';
/** username */
var username = 'botbot';
var icon = ':hatching_chick';
var message = 'test'; //投稿メッセージ

function myFunction(){
    var jsonData =
    {
        "username":username,
        "icon_emoji":icon,
        "text":message
    };
    var payload = JSON.stringify(jsonData);

    var options ={
        "method":"post",
        "contentType":"application/json",
        "payload":payload
    }
    UrlFetchApp.fetch(postUrl,options);
}