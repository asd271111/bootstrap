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

  //写入数据
    mysql_query("set names 'utf8'"); //数据库输出编码
    mysql_select_db($mysql_database); //打开数据库
    
   //写入数据操作
	
		$sql="INSERT INTO message (user,msg,msgtime) VALUES ('$_POST[user]','$_POST[msg]','$_POST[msgtime]')";
	
	if (!mysql_query($sql,$conn)){//判断是否写入成功
	  die('Error: ' . mysql_error());
	  }
	echo "添加成功!";

	mysql_close(); //关闭MySQL连接 
   
?>