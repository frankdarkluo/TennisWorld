<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
    <meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no" />
    <title></title>
    <script src="js/mui.min.js"></script>
    <link rel="stylesheet" type="text/css" href="css/tennis.css"/>
    <link rel="stylesheet" type="text/css" href="css/iconfont.css"/>
    <link href="css/mui.min.css" rel="stylesheet"/>
    <script type="text/javascript" src="head5.js"></script>
    <script type="text/javascript" charset="utf-8">
      	mui.init();
      	onload=function(){
    		var sels = document.getElementsByTagName("select");
    		for(var i = 0; i < sels.length; i++){
       			sels[i].onchange = function(){
            		this.form.submit();
        		}
    		}
		}
    </script>
    <style type="text/css">
		.head_table {
			margin-top: 85px; 
			width: 100%; 
			height: 50px;
			background-color: transparent;
		}
    </style>
</head>

<body>
	<div class="background">
		<table class="head_table" border="0" cellspacing="0" cellpadding="0">
			<tr>
				<td align="center">
					<label onclick="window.location.href='#'" style="color: #30333F;">世界排名</label>
				</td>
				<td align="center">
					<label onclick="window.location.href='#'" style="color: #30333F;">名人堂</label>
				</td>
				<td align="center">
					<label onclick="window.location.href='#'" style="color: #30333F;">国内选手</label>
				</td>
				<td align="center">
					<label onclick="window.location.href='#'" style="color: #30333F;">热门选手</label>
				</td>
			</tr>
		</table>
		<div class="form">
			<form  action="rank.php" method="post" id="myform">
				<div class="f1">
				<?php
					error_reporting(E_ALL || ~E_NOTICE);
					$select_value1 = isset($_POST['tableName']) ? $_POST['tableName'] : ''; 
					$select_value2 = isset($_POST['country']) ? $_POST['country'] : '全部';
					$select_value3 = isset($_POST['rank']) ? $_POST['rank'] : '全部';
				?>
					<select name="tableName" class="xuanze" onchange="submitForm();">
						<option value="ATP" <?php echo $select_value1=='ATP'?'selected':''?> >ATP</option>
						<option value="WTA" <?php echo $select_value1=='WTA'?'selected':''?> >WTA</option>
					</select>
				</div>
				<div class="f2">	
					<select name="country" class="xuanze" onchange="submitForm();">
						<option value="全部" <?php echo $select_value2=='全部'?'selected':''?> >全部</option>
						<?php
							error_reporting(E_ALL || ~E_NOTICE);
							$con = mysqli_connect('cdb-7c1trg88.bj.tencentcdb.com:10203', 'root', 'tennisworld123');
							mysqli_query($con, "SET NAMES 'utf8'");
							mysqli_query($con, "SET CHARACTER SET utf8");
							if (!$con){
								die(mysql_error());
							}
							mysqli_select_db($con, "tennisworld");
							$tableName=$_POST["tableName"] ? $_POST["tableName"] : "ATP";
							$sql = mysqli_query($con, "select distinct 国籍  from $tableName");
							$datarow = mysqli_num_rows($sql);
							while($sql_arr = mysqli_fetch_assoc($sql)){
								$country=$sql_arr['国籍'];
								echo "<option value=$country "; 
								echo $select_value2==$country?'selected':'';
								echo ">$country</option>";
							}
						?>
					</select>
				</div>
				<div class="f3">
					<select name="rank" class="xuanze" onchange="submitForm();">
						<option value="全部" <?php echo $select_value3=='1'?'selected':''?> >全部</option>
						<option value="1"  <?php echo $select_value3=='1'?'selected':''?> >1-20</option>
						<option value="21" <?php echo $select_value3=='21'?'selected':''?> >21-40</option>
						<option value="41" <?php echo $select_value3=='41'?'selected':''?> >41-60</option>
						<option value="61" <?php echo $select_value3=='61'?'selected':''?> >61-80</option>
						<option value="81" <?php echo $select_value3=='81'?'selected':''?> >81-100</option>
					</select>
				</div>
			</form>
		</div>

		<div class="content">
			<table>
			<tr style="line-height: 40px;">
				<th class="rank" style="text-align: center;">排名</th>
				<th class="player" style="text-align: center;">球员名</th>
				<th class="country" style="text-align: center;">国籍</th>
				<th class="score" style="text-align: center;">积分</th>
				<th class="" style="text-align: center;">变化</th>
			</tr>
			<?php
				error_reporting(E_ALL || ~E_NOTICE);
				$con = mysqli_connect('cdb-7c1trg88.bj.tencentcdb.com:10203', 'root', 'tennisworld123');
				mysqli_query($con, "SET NAMES 'utf8'");
				mysqli_query($con, "SET CHARACTER SET utf8");
				if (!$con){
					die(mysql_error());
				}
				mysqli_select_db($con, "tennisworld");
				$tableName=$_POST["tableName"] ? $_POST["tableName"] : "ATP";
				$country=$_POST["country"] ? $_POST["country"] : "全部";
				$rank_min=$_POST["rank"] ? $_POST["rank"] : "全部";
				if ($country=="全部" && $rank_min=="全部"){
					$sql = mysqli_query($con, "select * from $tableName order by 官方排名");
				} elseif($country=="全部" && $rank_min!="全部"){
					$rank_max = $rank_min + 19;
					$sql = mysqli_query($con, "select * from $tableName where 官方排名 between $rank_min and $rank_max order by 官方排名");	
				} elseif($country!="全部" && $rank_min=="全部"){
					$sql = mysqli_query($con, "select * from $tableName where 国籍='$country'  order by 官方排名");		
				} else{
					$rank_max = $rank_min + 19;
					$sql = mysqli_query($con, "select * from $tableName where 国籍='$country' and 官方排名 between $rank_min and $rank_max order by 官方排名");	
				}
				$datarow = mysqli_num_rows($sql);
//				print($datarow);
				while($sql_arr = mysqli_fetch_assoc($sql)){
					$no=$sql_arr['官方排名'];
					$name=$sql_arr['姓名'];
					$country_name=$sql_arr['国籍'];
					$score=$sql_arr['积分'];
					echo "<tr><td class='rank' style='text-align:center;'>$no</td>";
					echo "<td class='player' style='color:mediumblue;'><a href='play.php?id=$name'>$name</a></td>";
					echo "<td class='country'>$country_name</td>";
					echo "<td class='score'>$score</td>";
					echo "<td></td></tr>";
				}
				echo "<tr style='height: 60px;'><td></td><td></td><td></td><td></td><td></td></tr>";
			?>
		</table>
		</div>		
	</div>
</body>
</html>

