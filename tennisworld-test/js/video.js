function zan(i){
	var con = document.getElementById("dianzannum"+i.toString());
	var zan = document.getElementById("zan"+i.toString());

	if (String(zan.innerText) == "赞") {
		con.innerText = Number(con.innerText)+1;
	    zan.innerText = "已赞";
	    zan.className = "zan1";
	}
	else{
		con.innerText = Number(con.innerText)-1;
	    zan.innerText = "赞";
	    zan.className = "zan";
	}	
}

function jiazai(){
	for(var i = 4;i < 8;i++)
	{	
		var url = "video/"+(i+1)+".mp4";
		var videoid = "mydiveo"+(i+1);
		var x = document.getElementById("video");
		var y = x.innerHTML;	
		x.innerHTML = y +'<video id='+videoid+' autoplay="autoplay" controls="controls" width="100%" poster="img/1.png"><source src='+url+' type="video/mp4"></video><div class="bottom"><button><div class="zhuanfa"></div></button><span>122</span><button><div class="pinglun"></div></button><span>234</span><button onclick="zan('+(i+1)+')"><span class="zan" id="zan'+(i+1)+'">赞</span></button><span id="dianzannum'+(i+1)+'">202</span></div><div class="xian"></div>'	
	}
}
							


	