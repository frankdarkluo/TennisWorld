<!doctype html>
<html>
<head>
	<meta charset="UTF-8">
	<title></title>
	<meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no" />
	<link href="css/mui.min.css" rel="stylesheet" />
	<link rel="stylesheet" type="text/css" href="css/iconfont.css"/>
	<script src="js/mui.min.js"></script>
	<script type="text/javascript">
		mui.init()
	</script>
	
	<style type="text/css">
		.a{
			text-align:center;
			max-height: 150px;
		}
		#left {
		display:inline-block;
		float:left;
		margin-left: 25%;
		}
		.b{
			margin-top: 40px;
			text-align: center;
		}
		.a img{height: 150px;}
		.c{
			float:left;
		}
	</style>
</head>

<body <!--background="img/back-1.jpg" style="background-size: cover;"-->>
	<header class="mui-bar mui-bar-nav" style="background-color: #FFFFFF;">
		<a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left" style="color: #30333F;"></a>
		<h1 class="mui-title mui-action-back" style="position:fixed">
			<font size="5">
				<b><i>TennisWorld</i></b>  
			</font>
		</h1>
	</header>
    <!--<div class="main">
		<div class="mui-content">
		<h3>球员信息 <style type="text/css">
	    	h3{color: #000000;margin-top: 60px;margin-left: 10px;text-align:center;}
	    </style>
		</h3>
	</div>-->
	<div class="b">
		<p style="font-family: SimHei;color: #000000;font-size:120%;">球员信息</p>
	</div>
	<?php
	error_reporting(E_ALL || ~E_NOTICE);
	$con = mysqli_connect('cdb-7c1trg88.bj.tencentcdb.com:10203', 'root', 'tennisworld123');
	mysqli_query($con, "SET NAMES 'utf8'");
	mysqli_query($con, "SET CHARACTER SET utf8");
	if (!$con){
	die(mysql_error());
	}
	mysqli_select_db($con, "tennisworld");
	$id = $_GET['id'];
	$sql = mysqli_query($con, "select * from WTA where 姓名 = '$id' ");
	$sqld  = mysqli_query($con, "select * from WTA_athlete where 姓名 = '$id' ");
	while($sql_arr = mysqli_fetch_assoc($sql)){
		$img=$sql_arr['相片'];
		$name=$sql_arr['姓名'];
		$english=$sql_arr['英文名'];
		$country_name=$sql_arr['国籍'];
		echo "<div class='a'><img src = $img></div>";
        echo "<span id='left'>姓名：$name</span><br>
        	  <span id='left'>英文名：$english</span><br>
              <span id='left'>国籍：$country_name</span><br>";
        }
    while($sqld_arr = mysqli_fetch_assoc($sqld)){
    	$chusheng=$sqld_arr['出生地'];
    	$juzhu=$sqld_arr['居住地'];
    	$shengao=$sqld_arr['身高厘米'];
    	$chushengriqi=$sqld_arr['生日'];
    	$chipai=$sqld_arr['持拍'];
        $shenyazuigao=$sqld_arr['单打最佳排名'];
        $shenyazuigaoshijian=$sqld_arr['首次单打最佳排名时间'];
        $shengyajiangjin=$sqld_arr['生涯奖金'];
        $saijijiangjin=$sqld_arr['赛季奖金'];
        $shengyadanda=$sqld_arr['生涯单打冠军数'];
        $saijidanda=$sqld_arr['赛季单打冠军数'];
        echo "<span id='left'>出生地：$chusheng</span><br>";
        echo "<span id='left'>居住地：$juzhu</span><br>";
        echo "<span id='left'>身高：$shengao cm</span><br>";
        echo "<span id='left'>生日：$chushengriqi</span><br>";
        echo "<span id='left'>持拍（1为左手，2为右手）：$chipai</span><br>";
        echo "<span id='left'>单打最佳排名：$shenyazuigao</span><br>";
        echo "<span id='left'>首次单打最佳排名时间：$shenyazuigaoshijian</span><br>";	
        echo "<span id='left'>生涯奖金($)：$shengyajiangjin</span><br>";
        echo "<span id='left'>赛季奖金($)：$saijijiangjin</span><br>";
        echo "<span id='left'>生涯单打冠军数：$shengyadanda</span><br>";
        echo "<span id='left'>赛季单打冠军数：$saijidanda</span><br>";
        	
    }
	?>
	<div style="height: 60px; ">
		
	</div>

</body>

</html>