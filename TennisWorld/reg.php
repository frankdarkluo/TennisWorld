<?php
	
if(trim($_POST['password'])!=trim($_POST['rpwd']))
{
	exit('两次密码不一致,请返回上一页');
}

$link = mysqli_connect('cdb-7c1trg88.bj.tencentcdb.com:10203', 'root', 'tennisworld123') 
		or die ('连接失败 : ' . mysqli_error());
mysqli_select_db($link,'tennisword');
mysqli_set_charset($link,'utf8');

$username=$_POST['username'];
$password=$_POST['password'];
 
$sql="insert into reg_info values('$username','$password')";

$result=mysqli_query($link,$sql);
if($result){
	echo'注册成功！';
}else{
	echo'注册失败！';
}

mysqli_close($link);
?>