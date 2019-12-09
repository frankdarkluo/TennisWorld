<?php
$link = mysqli_connect('cdb-7c1trg88.bj.tencentcdb.com:10203', 'root', 'tennisworld123') or die('连接失败 : ' . mysqli_error());
mysqli_select_db($link, 'tennisworld');
mysqli_set_charset($link, 'utf8');

$username = $_POST['username'];
$password = $_POST['password'];

$sql = "insert into reg_info values('$username','$password')";

$result = mysqli_query($link, $sql);
if ($result) {
	echo '<script src="js/sweetalert.min.js"></script>';
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
					location.href="reg.html";
					alert("注册失败!");
				</Script>
			</head>
		</html>';
}

mysqli_close($link);
?>