function test() {
  
    var url = 'http://weather.livedoor.com/forecast/webservice/json/v1?city=130010'; //URL+cityID
    var res = UrlFetchApp.fetch(url);
    var object = JSON.parse(res.getContentText()); 
    
    Logger.log(object.forecasts[0].telop);
    Logger.log(object.forecasts[1].telop);
  }