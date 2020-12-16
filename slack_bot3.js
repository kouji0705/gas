/**
* スプレッドシートから営業生成を取得して通知する関数
*/
function main() {
    notifySlack(generateSalesDataMessage())
}

/* Slackに特定のメッセージを送信する
* @params message string 送信するメッセージ
*/
function notifySlack(message){
    const postUrl = "https://hooks.slack.com/services/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";
    const userName = '5.6bot';

    let jsonData={
        "username":userName,
        "text":message
    }

    let payload = JSON.stringify(jsonData);

    let options ={
        "method":"post",
        "contentType":"application/json",
        "payload":payload
    };

    UrlFetchApp.fetch(postUrl,options);
}

function generateSalesDataMessage(){
  const url ="";
  
  let sheet = SpreadsheetApp.openByUrl("https://docs.google.com/spreadsheets/d/1oSlfL2e7lG0Ri7ZfUMTOsYw9SxL_4UpsQAKO_hi8iHA/edit#gid=0").getSheetByName("部門別達成率");
  let values = sheet.getRange(2,1,sheet.getLastRow()-1,sheet.getLastColumn()).getValues();
  
  let message = "";
  
  for(value of values){
    let division = value[0];
    let goal = value[1].toLocaleString();
    let revenue = value[2].toLocaleString();
    let goalRate = Math.round(value[3]*100*100)/100;
    message += `${division}は、目標額の${goal}円に対して、売上が${revenue}円で、達成率は${goalRate}%でした。\n`;
   }
      return message;
}