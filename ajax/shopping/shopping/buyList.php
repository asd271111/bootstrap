<?php
	$msg=$_POST['jsonData'];
	$str=json_encode($msg);
	file_put_contents('buyList.json',$str);
	echo $str;
?>