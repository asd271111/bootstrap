<?php
   $mysql_server_name='localhost'; //数据库地址
   $mysql_username='root'; //数据库用户名 
   $mysql_password='root'; //数据库密码
   $mysql_database='chat'; //数据库名
  
   $user=$_POST['user']; //获得传递过来的用户名
   $password=$_POST['password']; //获取传递过来的密码
 
  
  //连接数据库
   $conn=mysql_connect($mysql_server_name,$mysql_username,$mysql_password) or die("error connecting") ; //连接数据库
   if(!$conn){
	     die('Could not connect:' . mysql_error());
	  }
 
   //mysql_select_db($mysql_database);
   
  //写入数据
    mysql_query("set names 'utf8'"); //数据库输出编码
    mysql_select_db($mysql_database); //打开数据库查找
    
    //查找数据
	if ($user && $password){
		 $sql = "SELECT user,password FROM person WHERE user = '$_POST[user]' and password='$_POST[password]'";//对数据库中在语句当前数据在查找，
		 $res = mysql_query($sql);//返回数据库中的匹配的记录，如果出错则$res为false。
		
		 $rows= mysql_num_rows($res);//取得结果集中行的数目
//		  echo"11";
		  if($rows){
		   //header("Location:chat.html");
		   echo "1";//登录成功返回1
		   exit;
		 }
		 echo "2";//用户名或者密码错误，返回2
	}else {
		 echo "0";//用户名和密码为空，返回0
	}

	mysql_close(); //关闭MySQL连接
	 
?>