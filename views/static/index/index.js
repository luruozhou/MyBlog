console.log('got! iw ')
window.jQuery = window.$ = require('../libs/js/jquery');
$(function () {
	//获取页面可用高度
	var height = document.documentElement.clientHeight;
	$(".section").css({ "height": height });
	var doc = document.querySelector(".toggle");
	//添加事件监听
	var EventUtil = {
		addHandler: function (element, type, handler) {
			if (element.addEventListener) {
				element.addEventListener(type, handler, false);
			} else if (element.attachEvent) {
				element.attachEvent("on" + type, handler);
			} else {
				element["on" + type] = handler;
			}
		}
	}
	
	function fullScreenToggle(doc, times) {
		//前景滑动时间
		$(doc).css({ "-webkit-transition": "transform" + " " + times });
		//背景滑动时间
		$(".bgi").css({ "-webkit-transition": "transform" + " " + "1s" });
		//切换页数
		var len = $(doc).children().length;
		var reg = /matrix\(\d+\,\d+\,\d+\,\d+\,\d+\,[^\d]*(\d+)\)/g;
		//初始背景位移值
		var topHeight=parseInt(reg.exec($(".bgi").css("transform").replace(/[ ]/g,""))[1]);
		//背景每次位移大小
		var avgHeight=topHeight/(len-1);
		//设置背景高度
		$(".bgi").css({"height":topHeight+height});
		//首页展示的是第几个页面
		var now = 1;
		//是不是结束
		var isOverMove=true;
		EventUtil.addHandler(doc,"mousewheel",function(){
			if(isOverMove){
				//锁定状态
				isOverMove=false;
				//滚轮上，内容下，背景上
				if (event.wheelDelta > 0 && 1 < now && now < len + 1) {
					//前景位移
					$(this).css({ "transform": "translate(0px,-" + (now - 2) * height + "px)" });
					//背景位移
					$(".bgi").css({ "transform": "translate(0px,-" + avgHeight * (len - now + 1) + "px)" })
					//背景图切换
					if (now % 2 == 0) {
						$(".bgi").css({ "background-image": "url(static/index/img/main_bg" + (now - 1) + ".jpg)" });
					}
					//header放大缩小
					if(now==2){
						$(".topbar .logo").animate({"font-size":"2.5em"},1000);
					}
					//向下箭头显示隐藏
					if(now<len+1){
						$(".down").show();
					}
					//解锁状态
					EventUtil.addHandler(doc,"webkitTransitionEnd",function(){
						this.isOverMove=true;			
					})
					now--;
				}
				
				//滚轮下，内容上，背景下
				if (event.wheelDelta < 0 && 0 < now && now < len) {
					//前景位移
					$(this).css({ "transform": "translate(0px,-" + (now * height) + "px)" });
					//背景位移
					$(".bgi").css({ "transform": "translate(0px,-" + avgHeight * (len - now-1 ) + "px)" });
					//背景图切换
					if (now % 2 == 0) {
						$(".bgi").css({ "background-image": "url(static/index/img/main_bg" + (now + 1) + ".jpg)" });
					}
					//header放大缩小
					if(now==1){
						$(".topbar .logo").animate({"font-size":"2em"},1000);
					}
					//向下箭头显示隐藏
					if(now==len-1){
						$(".down").hide();
					}
					
					console.log(isOverMove);	
					now++;
				}
				
			}
			// EventUtil.addHandler(doc,"transitionend",function(){
			// 	console.log("event");
			// })
			
		})
		//解锁状态
		EventUtil.addHandler(doc,"webkitTransitionEnd",function(){
			console.log(this);
			isOverMove=true;
			//console.log(this.isOverMove);
		})
		console.log("最后"+isOverMove);
	}

	fullScreenToggle(doc,"0.5s");
	var myWord = ['第一句话', '第二句话', '第十句话，因为是三进制', '第100句话 '];
	var loopWord = myWord.slice(0);

	function getWord() {
		if(loopWord.length==0){
			loopWord=myWord.slice(0);
		}
		var num =parseInt(Math.random()*loopWord.length);
		//console.log(loopWord.length);
		var word = loopWord.splice(num,1);
		return word;
	}
	function changeWord(){
		setTimeout(function() {
			 changeWord();
		}, 6070);
		$(".logo p").text(getWord());
		$(".logo p").animate({opacity:"1"},1000);
		$(".logo p").animate({opacity:"1"},4000);
		$(".logo p").animate({opacity:'0'},1000);
		//$(".logo p").text(getWord());
	}
	 changeWord();

})