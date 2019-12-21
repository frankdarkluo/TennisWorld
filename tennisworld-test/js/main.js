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

var count = 0;
var infotitle = ["ATP年终总决赛：费得勒不敌蒂姆","ATP年终总决赛：纳达尔逆转梅德维德夫",
                 "2020奥克兰赛名单：梅德韦杰夫领衔","今年温网青少年女单冠军：我的偶像是莎拉波娃",
				 "西西帕斯畅谈休赛期旅游 从低谷走出的自己更强大","安德莱斯库：从小就学会独处 成名后还有些不适应",
				 "穆雷因伤推迟冬训备战 或持外卡出战明年澳网","2020年巴蒂将和格尔格斯搭档 或将出战大满贯比赛"];
var infotitle2 = ["无缘小组赛开门红","创造史上最伟大逆转","弗格尼尼在列","乌克兰新星斯尼格尔","西西帕斯在冰岛旅游",
				 "夺得美网冠军之后的心态转变","取消在迈阿密的冬训计划","或将搭档出战所有的大满贯赛事和WTA高级别赛事"];
//上拉加载更多数据 数据更新后要执行myScroll.refresh();	
function pullUpAction () {
	count++ ;
	if(count <= 1000){ 
		setTimeout(function () {
			var el = document.getElementById("mui-table-view");
			for (i=0; i<8; i++) {
				var infoid = "info"+(i+1);
				var imgsrc = "article/img/"+(i+1)+".jpg";
				var li = document.createElement("li");
				li.className = "mui-table-view-cell mui-media";
				el.appendChild(li);
				var a = document.createElement("a");
				a.href = "javascript:location.href='info.php?keyword='+$('#"+infoid+"').html()";
				a.id = "xinwen" + 1;
				li.appendChild(a);
				var img = document.createElement("img");
				img.className = "mui-media-object mui-pull-right";
				img.src = imgsrc;
				a.appendChild(img);
				var div = document.createElement("div");
				div.className = "mui-media-body";
				a.appendChild(div);
				var span = document.createElement("span");
				span.id = infoid;
				span.innerHTML = infotitle[i];
				div.appendChild(span);
				var p = document.createElement("p");
				p.className = "mui-ellipsis";
				p.innerHTML = infotitle2[i];
				div.appendChild(p);
			}
			myScroll.refresh();
		}, 400);
	}else{
		pullUpEl.querySelector('.pullUpLabel').innerHTML = '没有数据了。。。';
		//myScroll.refresh();
	}
}