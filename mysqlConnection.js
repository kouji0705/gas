function mySQLConnection() {
    var con_str = PropertiesService.getScriptProperties().getProperty('dbConnection');
    var user_id = PropertiesService.getScriptProperties().getProperty('userId');
    var user_pass = PropertiesService.getScriptProperties().getProperty('userPass');
    
    // DBに接続
    var conn = Jdbc.getConnection(con_str, user_id, user_pass);
    var stmt = conn.createStatement();
    stmt.setMaxRows(100);
    
    //クエリを記載
    var str_query = 'select * from m_users;';
    // クエリを実行
    var rs = stmt.executeQuery(str_query);
    
    while(rs.next()) {
      //getStringで列名を指定して取得
      console.log(rs.getString("user_name"));
    }
  
    rs.close();
    stmt.close();
    conn.close();
  }
  