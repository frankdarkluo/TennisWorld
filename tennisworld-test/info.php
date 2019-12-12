<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no" />
    <title></title>
    <link rel="stylesheet" type="text/css" href="css/iconfont.css"/>
    <script src="js/mui.min.js"></script>
    <script src="js/jquery-3.4.1.js"></script>
    <link href="css/mui.min.css" rel="stylesheet"/>
    <script type="text/javascript" charset="utf-8">
      	mui.init();  	
		(function ($) {
		  $.getUrlParam = function (keyword) {
		   var reg = new RegExp("(^|&)" + keyword + "=([^&]*)(&|$)");
		   var r = window.location.search.substr(1).match(reg);
		   if (r != null) return unescape(r[2]); return null;
		  }
		 })(jQuery);
		 
		var kw = $.getUrlParam('keyword');
 
		window.onload = function(){
			$("#addname").val(kw);
		}
		
		function like(){		
			var like = document.getElementById("like")
			var icon = document.getElementById("iconlike")
			if (String(like.innerText) == "点赞") {
			    like.innerText = "已点赞";
			    like.style.color = "#007AFF";
			    icon.style.color = "#007AFF";
			}
			else{
				like.innerText = "点赞";
				like.style.color = "#929292";
				icon.style.color = "#929292";
			}	
		}
		function collection(){		
			var collect = document.getElementById("collection")
			var icon = document.getElementById("iconcollect")
			if (String(collect.innerText) == "收藏") {
			    collect.innerText = "已收藏";
			    collect.style.color = "#007AFF";
			    icon.style.color = "#007AFF";
			}
			else{
				collect.innerText = "收藏";
				collect.style.color = "#929292";
				icon.style.color = "#929292";
			}	
		}
    </script>
    <style type="text/css">
    	.mui-content{
    		margin-left: 2%;
    		margin-right: 2%;
    	}
    	.article-content{
    		color: black;
    		margin-bottom: 5%;
    		line-height: 28px;
    	}
    	.article-tail{
    		text-align:left; 
    		float: right;
    		margin-bottom: 25%;
 			line-height: 10px;
    	}
    	.article-type{ 
    		color: white; 
    		background-color: #007AFF;
    	}
    	.article-title{ 
    		text-align: justify; 
			text-align-last: justify; 
			text-justify: inter-ideograph;
    	}
    	.headline{
    		text-align: left;
    		font-size: 25px;
    		font-family: "黑体";
    		font-weight: normal;
    		line-height: 35px;
    	}
    </style>
    
</head>
<body>
	<header class="mui-bar mui-bar-nav" style="background-color: #FFFFFF;">
		<a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left" style="color: #30333F;"></a>
		<h1 class="mui-title mui-action-back" style="position:fixed">
			<font size="5">
				<b><i>TennisWorld</i></b>  
			</font>
		</h1>
    </header>
    <div class="mui-content">
    	<?php
    		$link = mysqli_connect('cdb-7c1trg88.bj.tencentcdb.com:10203', 'root', 'tennisworld123') or die('连接失败 : ' . mysqli_error());
    		if (!$link){
				die(mysql_error());
			}
			mysqli_select_db($link, 'tennisworld');
			mysqli_set_charset($link, 'utf8');
    		mysqli_query($link, "SET NAMES 'utf8'");
			mysqli_query($link, "SET CHARACTER SET utf8");
    		error_reporting(E_ALL || ~E_NOTICE);
    		
    		$kw = substr(urldecode($_SERVER["QUERY_STRING"]), 8);
    		$sql = mysqli_query($link, "select * from article_info where title='$kw'");
			$datarow = mysqli_fetch_assoc($sql);
			
			$author = $datarow['author'];
			$time = $datarow['time'];
			$img_path = $datarow['img_path'];
			$content_path = $datarow['content_path'];
    	?>
    	
    	<table border="0" cellspacing="0" cellpadding="0">
    		<tbody>
    			<tr>
    				<div class="mui-input-row">
				        <h1 class="headline" style="margin-top: 7%; margin-bottom: 4%;"><?php echo "$kw" ?></h1>
				    </div>
    			</tr>
    			<tr>
    				<div class="mui-input-row" style="margin-bottom: 7%;">
				      	<label class="article-type" style="display: block; width: 72px;font-size: 15px; padding: 5px;">资讯新闻</label>
				      	<font style="float: right; margin-top: 2px;"><?php echo "$time"; ?></font>
				    </div>
    			</tr>
    			<tr>
    				<div class="article-content" style="margin-left: 1%;">
				        <img id="main_img" width="90%" height="90%" style="margin-left: 5%; margin-bottom: 4%;"  src=<?php echo "$img_path"; ?> >
				        <?php 
				        	$contents = file($content_path);
				        	for($i=0;$i<count($contents);$i++) {
								echo "<span> $contents[$i] </span>";
								echo "<br/>";
				 			}
				        ?>       	
				    </div>	
    			</tr>
    			<tr>
    				<div class="article-tail">
				        <p>来源：<?php echo "&nbsp $author"; ?></p>
				    </div>
    			</tr>
    		</tr>
    	</tbody>	
    </div>
    
    <nav class='mui-bar mui-bar-tab'>
        <label class='mui-tab-item mui-active' style="padding-top: 5px;">
            <span class='mui-icon iconfont icon-dianzan' id="iconlike" style="color: #929292;"></span>
            <span class='mui-tab-label' onclick="like()" style="color: #929292; "id="like">点赞</span>
        </label>
        <label class='mui-tab-item' style="padding-top: 5px;">
            <span class='mui-icon iconfont icon-shoucangcopy' id="iconcollect" style="color: #929292;"></span>
            <span class='mui-tab-label' onclick="collection()" style="color: #929292;" id="collection">收藏</span>
        </label>
    </nav>
    
</body>
</html>