<?php

$link = mysqli_connect('cdb-7c1trg88.bj.tencentcdb.com:10203', 'root', 'tennisworld123') 
		or die ('连接失败 : ' . mysqli_error());
mysqli_select_db($link,'tennisworld');
mysqli_set_charset($link,'utf8');

$username=$_POST['username'];
$password=$_POST['password'];
 
$sql="insert into reg_info values('$username','$password')";

$result=mysqli_query($link,$sql);
if($result){
	echo '<html><head><Script Language="JavaScript">alert("注册成功！");</Script></head></html>' . "<meta http-equiv=\"refresh\" content=\"0;url=main.html\">";
}else{
	echo '<html><head><Script Language="JavaScript">alert("用户已存在！");</Script></head></html>' . "<meta http-equiv=\"refresh\" content=\"0;url=reg.html\">";
}

mysqli_close($link);
?>