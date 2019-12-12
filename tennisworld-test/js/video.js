var ji = 4;

function dianzan(i){
	var num = document.getElementById("zannum"+i)
	var zan = document.getElementById("zan"+i);
	if(zan.src == ("http://175.24.36.208/tennisworld-test/img/zan.png"))
	{
		zan.setAttribute('src','http://175.24.36.208/tennisworld-test/img/zan1.png');
		num.innerText = Number(num.innerText) + 1;
	}
	else{
		zan.setAttribute('src','http://175.24.36.208/tennisworld-test/img/zan.png');
		num.innerText = Number(num.innerText) - 1;
	}
}


function jiazai(){
	var par = document.getElementById("video");
	for(var i = ji;i < ji + 4;i++)
	{
		var dianzannum = parseInt(Math.random()*100+50);
		var url = "video/"+i+".mp4";
		var videoid = "mydiveo"+i;
		var zanid = "zan"+i;
		var zannumid = "zannum"+i;
		
		var div0 = document.createElement("div");
		div0.innerHTML = '<video id='+videoid+' preload="metadata" controls="controls" width="100%" poster=""><source src='+url+' type="video/mp4"></video>';
		par.appendChild(div0);
		
		var div1 = document.createElement("div");
		div1.className = "bottom1";
		div1.innerHTML = '<div class="zhuanfa"></div><span>122</span><div class="pinglun"></div><span>234</span><img src="http://175.24.36.208/tennisworld-test/img/zan.png" id='+zanid+' onclick="dianzan('+i+')" style="width: 28px;height: 28px;margin-left: 5%;margin-right: 3%;"><span id='+zannumid+'>'+dianzannum+'</span></div>';
		par.appendChild(div1);
	}
	ji = ji + 4;
}

							