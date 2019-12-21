var File_Page1 = {"main.html":"首页", "rank.php":"球员", "player.html":"个人", "game.html":"赛历", "video.html":"视频", "luntan.html":"论坛"};
var inactive_color1 = "#D1D1D1";
var active_color1 = "#30333F";

var curFile1 = window.location.pathname;	// 获取网页文件名
curFile1 = curFile1.substring(curFile1.lastIndexOf("/")+1);  // 去除开始的‘\’
var curPage1 = File_Page1[curFile1];

var shouye_color = (curPage1=="首页"||curPage1=="赛历"||curPage1=="视频"||curPage1=="论坛"?active_color1:inactive_color1);
var qiuyuan_color = (curPage1=="球员"?active_color1:inactive_color1);
var geren_color = (curPage1=="个人"?active_color1:inactive_color1);


var File_Page2 = {"main.html":"推荐", "game.html":"赛历", "video.html":"视频", "luntan.html":"论坛"};
var inactive_color2 = "#FFFFFF";
var active_color2 = "#E35E69";

var curFile2 = window.location.pathname;	// 获取网页文件名
curFile2 = curFile2.substring(curFile2.lastIndexOf("/")+1);  // 去除开始的‘\’
var curPage2 = File_Page2[curFile2];

var tuijian_color = (curPage2=="推荐"?active_color2:inactive_color2);
var saili_color = (curPage2=="赛历"?active_color2:inactive_color2);
var shipin_color = (curPage2=="视频"?active_color2:inactive_color2);
var luntan_color = (curPage2=="论坛"?active_color2:inactive_color2);

document.writeln("<!doctype html>");
document.writeln("<html>");
document.writeln("");
document.writeln("<head>");
document.writeln("	<meta charset=\'UTF-8\'>");
document.writeln("	<title></title>");
document.writeln("	<meta name=\'viewport\' content=\'width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no\' />");
document.writeln("	<link href=\'css/mui.min.css\' rel=\'stylesheet\' />");
document.writeln("	<link rel=\'stylesheet\' type=\'text/css\' href=\'css/iconfont.css\'/>");
document.writeln("	<script src=\'js/mui.min.js\'></script>");
document.writeln("	<script src=\'redline.js\'></script>");
document.writeln("	<script type=\'text/javascript\'>");
document.writeln("		mui.init()");
document.writeln("	</script>");
document.writeln("</head>");
document.writeln(" <style type=\'text/css\'>");
document.writeln("    	");
document.writeln("    </style>");
document.writeln("");
document.writeln("<body>");
document.writeln("<header class=\'mui-bar mui-bar-nav\' style=\'height: 85px; background-image:url(img/shadow.png);\'>");
document.writeln("		<h1 class=\'mui-title\' style=\'position:fixed\'>");
document.writeln("			<font size=\'5\'>");
document.writeln("				<b><i>TennisWorld</i></b>  ");
document.writeln("			</font>");
document.writeln("		</h1>");
document.writeln("		<table border=\'0\' cellspacing=\'0\' cellpadding=\'0\' style=\'margin-top: 55px; width: 100%;\'>");
document.writeln("			<tr>");
document.writeln("				<td align=\'center\'>");
document.writeln("					<label onclick=\"window.location.href=\'main.html\'\" style=\'color: #30333F;\'><span  id=\'redline1\' style=\'border-bottom:2px solid; border-color:"+tuijian_color+"; padding-bottom:6px;\'>推荐</span></label>");
document.writeln("				</td>");
document.writeln("				<td align=\'center\'>");
document.writeln("					<label onclick=\"window.location.href=\'game.html\';\" style=\'color: #30333F;\'><span  id=\'redline2\' style=\'border-bottom:2px solid; border-color:"+saili_color+"; padding-bottom:6px;\'>赛历</span></label>");
document.writeln("				</td>");
document.writeln("				<td align=\'center\'> ");
document.writeln("					<label onclick=\"window.location.href=\'video.html\';\" style=\'color: #30333F;\'><span  id=\'redline3\' style=\'border-bottom:2px solid; border-color:"+shipin_color+"; padding-bottom:6px;\'>视频</span></label>");
document.writeln("				</td>");
document.writeln("				<td align=\'center\'>	");
document.writeln("					<label onclick=\"window.location.href=\'luntan.html\';\" style=\'color: #30333F;\'><span  id=\'redline4\' style=\'border-bottom:2px solid; border-color:"+luntan_color+"; padding-bottom:6px;\'>论坛</span></label>");
document.writeln("				</td>");
document.writeln("			</tr>");
document.writeln("		</table>");
document.writeln("    </header>");
document.writeln("	<nav class=\'mui-bar mui-bar-tab\'>");
document.writeln("        <label class=\'mui-tab-item mui-active\' style=\'padding-top: 5px;\' onclick=\"window.location.href=\'main.html\'\" id=\'main\'>");
//document.writeln("            <span class=\'mui-icon iconfont icon-home\' style=\'color: #30333F;\'></span>");
document.writeln("            <span class=\'mui-icon iconfont icon-home\' style=\'color: "+shouye_color+";\'></span>");
document.writeln("            <span class=\'mui-tab-label\' style=\'padding-left: 18px; color: "+shouye_color+";\'>首页</span>");
document.writeln("        </label>");
document.writeln("        <label class=\'mui-tab-item\' style=\'padding-top: 5px;\' onclick=\"window.location.href=\'rank.php\'\" id=\'game\'>");
//document.writeln("            <span class=\'mui-icon iconfont icon-player\' style=\'color: #30333F;\'></span>");
document.writeln("            <span class=\'mui-icon iconfont icon-player\' style=\'color: "+qiuyuan_color+";\'></span>");
document.writeln("            <span class=\'mui-tab-label\' style=\'color: "+qiuyuan_color+";\'>球员</span>");
document.writeln("        </label>");
document.writeln("        <label class=\'mui-tab-item\' style=\'padding-top: 5px;\' onclick=\"window.location.href=\'player.html\'\" id=\'player\'>");
//document.writeln("            <span class=\'mui-icon iconfont icon-game\' style=\'color: #30333F;\'></span>");
document.writeln("            <span class=\'mui-icon iconfont icon-game\' style=\'color: "+geren_color+";\'></span>");
document.writeln("            <span class=\'mui-tab-label\' style=\'color: "+geren_color+";\'>个人</span>");
document.writeln("        </label>");
document.writeln("    </nav>");
document.writeln("    ");
document.writeln("</body>");
document.writeln("");
document.writeln("</html>");