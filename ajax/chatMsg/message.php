<?php
   $mysql_server_name='localhost'; //数据库地址
   $mysql_username='root'; //数据库用户名 
   $mysql_password='root'; //数据库密码
   $mysql_database='chat'; //连接的数据库名称
  
  
  //连接数据库
   $conn=mysql_connect($mysql_server_name,$mysql_username,$mysql_password) or die("error connecting") ; //连接数据库
   if(!$conn){
	     die('Could not connect:'. mysql_error());
	  }

    mysql_select_db($mysql_database); //打开数据库
    
	
	//查询数据
	$messages = mysql_query("SELECT user,msg,msgtime FROM message",$conn);
	
	//是否有记录
	if(mysql_num_rows($messages) == 0) $status_code = 2; 
	else $status_code = 1;
	
	//返回数据结构
	/*方法一：*/
//	echo "<div class='content'>";
	if($status_code == 1){ //如果有记录
		while($message = mysql_fetch_array($messages)){
//			echo "<p class='time'>$message[msgtime]</p>";
//			echo "<p class='txt'><strong>$message[user]:</strong><span>$message[msg]</span></p>";
//			echo "</div>";
            $arr[] = $message;
            $str = json_encode($arr);
//          echo $str; 
			file_put_contents("chatdata.json",$str);
		}
	}

	mysql_close(); //关闭MySQL连接 
?>
