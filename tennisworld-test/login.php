<?php
$link = mysqli_connect('cdb-7c1trg88.bj.tencentcdb.com:10203', 'root', 'tennisworld123') or die('连接失败 : ' . mysqli_error());

mysqli_select_db($link, 'tennisworld');
mysqli_set_charset($link, 'utf8');

$username = $_POST['username'];
$password = $_POST['password'];

$sql = "select * from reg_info where username='$username' AND password='$password'";

$result = mysqli_query($link, $sql);

if ($result -> num_rows != 0) {
	echo '<html>
			<head>
				<Script Language="JavaScript">
					location.href="main.html";
				</Script>
			</head>
		</html>';

} else {
	echo '<html>
			<head>
				<Script Language="JavaScript">
					location.href="login.html";
				</Script>
			</head>
		</html>';
}

mysqli_close($link);
?>