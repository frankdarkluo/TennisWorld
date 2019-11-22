<?php
$link = mysqli_connect('cdb-7c1trg88.bj.tencentcdb.com:10203', 'root', 'tennisworld123') 
		or die ('连接失败 : ' . mysqli_error());

mysqli_select_db($link,'tennisword');
mysqli_set_charset($link,'utf8');

$username=$_POST['username'];
$password=$_POST['password'];
 
$sql="select * from reg_info where username='$username' AND password='$password'";

$result=mysqli_query($link,$sql);
if($result->num_rows!=0){
	echo '登录成功！';
}else{
	echo '账号或密码错误！';
}
mysqli_close($link);
?>