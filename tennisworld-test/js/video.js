var myScroll,pullDownEl, pullDownOffset,pullUpEl, pullUpOffset,generatedCount = 0;

function loaded() {
	//动画部分
	pullDownEl = document.getElementById('pullDown');
	pullDownOffset = pullDownEl.offsetHeight;
	pullUpEl = document.getElementById('pullUp');	
	pullUpOffset = pullUpEl.offsetHeight;
	myScroll = new iScroll('wrapper', {
		useTransition: true,
		topOffset: pullDownOffset,
		onRefresh: function () {
			if (pullDownEl.className.match('loading')) {
				pullDownEl.className = '';
				pullDownEl.querySelector('.pullDownLabel').innerHTML = '下拉刷新';
			} else if (pullUpEl.className.match('loading')) {
				pullUpEl.className = '';
				pullUpEl.querySelector('.pullUpLabel').innerHTML = '上拉加载更多';
			}
		},
		onScrollMove: function () {
		
			if (this.y > 5 && !pullDownEl.className.match('flip')) {
				pullDownEl.className = 'flip';
				pullDownEl.querySelector('.pullDownLabel').innerHTML = '释放刷新';
				this.minScrollY = 0;
			} else if (this.y < 5 && pullDownEl.className.match('flip')) {
				pullDownEl.className = '';
				pullDownEl.querySelector('.pullDownLabel').innerHTML = 'Pull down to refresh...';
				this.minScrollY = -pullDownOffset;
			} else if (this.y < (this.maxScrollY - 5) && !pullUpEl.className.match('flip')) {
				pullUpEl.className = 'flip';
				pullUpEl.querySelector('.pullUpLabel').innerHTML = '释放刷新';
				this.maxScrollY = this.maxScrollY;
			} else if (this.y > (this.maxScrollY + 5) && pullUpEl.className.match('flip')) {
				pullUpEl.className = '';
				pullUpEl.querySelector('.pullUpLabel').innerHTML = 'Pull up to load more...';
				this.maxScrollY = pullUpOffset;
			}
		},
		onScrollEnd: function () {
			if (pullDownEl.className.match('flip')) {
				pullDownEl.className = 'loading';
				pullDownEl.querySelector('.pullDownLabel').innerHTML = '加载中';				
				pullDownAction();	// Execute custom function (ajax call?)
			} else if (pullUpEl.className.match('flip')) {
				pullUpEl.className = 'loading';
				pullUpEl.querySelector('.pullUpLabel').innerHTML = '加载中';				
				pullUpAction();	// Execute custom function (ajax call?)
			}
		}
	});
	
	loadAction();
}
document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);//阻止冒泡
document.addEventListener('DOMContentLoaded', function () { setTimeout(loaded, 0); }, false);


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

var ji=4;
//初始状态，加载数据
//function loadAction(){
//	ji = 1;
//	var par = document.getElementById("video");
//	for(var i = ji;i < ji + 4;i++)
//	{
//		var dianzannum = parseInt(Math.random()*100+50);
//		var url1 = "http://175.24.36.208/tennisworld-test/video/"+i+".mp4";
//		var url2 = "http://175.24.36.208/tennisworld-test/video/img/"+i+".jpg";
//		var videoid = "mydiveo"+i;
//		var zanid = "zan"+i;
//		var zannumid = "zannum"+i;
//		
//		var div0 = document.createElement("div");
//		div0.innerHTML = '<video id='+videoid+' preload="metadata" controls="controls" width="100%" poster='+url2+'><source src='+url1+' type="video/mp4"></video>';
//		par.appendChild(div0);
//		
//		var div1 = document.createElement("div");
//		div1.className = "bottom1";
//		div1.innerHTML = '<div class="zhuanfa"></div><span>122</span><div class="pinglun"></div><span>234</span><img src="http://175.24.36.208/tennisworld-test/img/zan.png" id='+zanid+' onclick="dianzan('+i+')" style="width: 28px;height: 28px;margin-left: 5%;margin-right: 3%;"><span id='+zannumid+'>'+dianzannum+'</span></div>';
//		par.appendChild(div1);
//	}
//	ji = ji + 4;
//}

//下拉刷新当前数据
//function pullDownAction () {
//	setTimeout(function () {
//	
//	var par = document.getElementById("video");
//	par.innerHTML = "";
//	for(var i = ji;i < ji + 4;i++)
//	{
//		var dianzannum = parseInt(Math.random()*100+50);
//		var url1 = "http://175.24.36.208/tennisworld-test/video/"+i+".mp4";
//		var url2 = "http://175.24.36.208/tennisworld-test/video/img/"+i+".jpg";
//		var videoid = "mydiveo"+i;
//		var zanid = "zan"+i;
//		var zannumid = "zannum"+i;
//		
//		var div0 = document.createElement("div");
//		div0.innerHTML = '<video id='+videoid+' preload="metadata" controls="controls" width="100%" poster='+url2+'><source src='+url1+' type="video/mp4"></video>';
//		par.appendChild(div0);
//		
//		var div1 = document.createElement("div");
//		div1.className = "bottom1";
//		div1.innerHTML = '<div class="zhuanfa"></div><span>122</span><div class="pinglun"></div><span>234</span><img src="http://175.24.36.208/tennisworld-test/img/zan.png" id='+zanid+' onclick="dianzan('+i+')" style="width: 28px;height: 28px;margin-left: 5%;margin-right: 3%;"><span id='+zannumid+'>'+dianzannum+'</span></div>';
//		par.appendChild(div1);
//	}
//	ji = ji + 4;
//		
//		myScroll.refresh();	
//	}, 400);
//}
var count = 0;

//上拉加载更多数据 数据更新后要执行myScroll.refresh();	
function pullUpAction () {
	count++ ;
	if(count <= 2){ 
		setTimeout(function () {
			var par = document.getElementById("video");
	for(var i = ji;i < ji + 4;i++)
	{
		var dianzannum = parseInt(Math.random()*100+50);
		var url1 = "http://175.24.36.208/tennisworld-test/video/"+i+".mp4";
		var url2 = "http://175.24.36.208/tennisworld-test/video/img/"+i+".jpg";
		var videoid = "mydiveo"+i;
		var zanid = "zan"+i;
		var zannumid = "zannum"+i;
		
		var div0 = document.createElement("div");
		div0.innerHTML = '<video id='+videoid+' preload="metadata" controls="controls" width="100%" poster='+url2+'><source src='+url1+' type="video/mp4"></video>';
		par.appendChild(div0);
		
		var div1 = document.createElement("div");
		div1.className = "bottom1";
		div1.innerHTML = '<div class="zhuanfa"></div><span>122</span><div class="pinglun"></div><span>234</span><img src="http://175.24.36.208/tennisworld-test/img/zan.png" id='+zanid+' onclick="dianzan('+i+')" style="width: 28px;height: 28px;margin-left: 5%;margin-right: 3%;"><span id='+zannumid+'>'+dianzannum+'</span></div>';
		par.appendChild(div1);
	}
	ji = ji + 4;
			myScroll.refresh();
		}, 400);
	}else{
		pullUpEl.querySelector('.pullUpLabel').innerHTML = '没有数据了。。。';
		//myScroll.refresh();
	}
}