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
	var isOverMove=true;
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
		EventUtil.addHandler(doc,"mousewheel",function(){
			if(isOverMove){
				//滚轮上，内容下，背景上
				if (event.wheelDelta > 0 && 1 < now && now < len + 1) {
					
					//锁定状态
					console.log("上滚开始："+isOverMove);
					isOverMove=false;
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
						$(".topbar ").animate({"opacity":"1"});
					}
					//向下箭头显示隐藏
					if(now<len+1){
						$(".down").show();
					}
					now--;
				}
				
				//滚轮下，内容上，背景下
				if (event.wheelDelta < 0 && 0 < now && now < len) {
					//锁定状态
					console.log("下滚开始："+isOverMove);
					isOverMove=false;
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
						 $(".topbar ").animate({"opacity":"0"});
					}
					//向下箭头显示隐藏
					if(now==len-1){
						$(".down").hide();
					}
					now++;
				}
				
			}
			// EventUtil.addHandler(doc,"transitionend",function(){
			// 	console.log("event");
			// })
			
		})
		//解锁状态
	}
	EventUtil.addHandler(doc,"webkitTransitionEnd",function(){
		//console.log(this);
		isOverMove=true;
		//console.log(this.isOverMove);
		console.log("每次动画结束后的isOverMove:"+isOverMove);
	})
	

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
		$(".logo p").animate({opacity:"0"},1000);
		$(".logo p").animate({opacity:"1"},4000);
		$(".logo p").animate({opacity:'0'},1000);
		//$(".logo p").text(getWord());
	}
	 changeWord();




	// 以下为文章内容
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
	//设置所有文章的状态
	function setArticle(articles){
		for (var i = 0; i <articles.length; i++) {

			// 设置当前角度
			if(i<=center){
				$(articles[i]).css({"z-index":i});
				$(articles[i]).css({"-webkit-transform":"rotate("+(center-i)*3+"deg) translate("+10*(center-i)+"px,0px)" });
			}else{
				$(articles[i]).css({"z-index":center-(i-center)});
				$(articles[i]).css({"-webkit-transform":"rotate("+(center-i)*3+"deg) translate("+10*(i-center)+"px,0px)" });
			}
		}
	}
	//所有文章向上
	function upArticle(){
		//文章数组变化
		articles.push(articles.shift());
		setArticle(articles);
	}
	//所有文章向下
	function downArticle(){
		articles.unshift(articles.pop());
		setArticle(articles);
	}

	var articleTimer;
	function changeArticle(now){
		if(now>0){
			// articleTimer=setTimeout(function(){
			// 	changeArticle(now);
			// },300)
			upArticle();
			now--;
		}
		if(now<0){
			// articleTimer=setTimeout(function(){
			// 	changeArticle(now);
			// },300)
			downArticle();
			now++;
		}

		// console.log(articles[parseInt(articles.length/2)])
	}
	// 所有的文章
	var art=$(".article");
	var articles=[];
	for (var i = 0; i < art.length; i++) {
		articles.push(art[i]);
	}
	//中间的文章
	var center=parseInt(articles.length/2);
	//初始化
	setArticle(articles);
	// 点击文章切换到当前
	$(".article").click(function(){
		for (var i = 0; i < articles.length; i++) {
			if ($(articles[i]).attr("class")==$(this).attr("class")) {
				break;
			}
		}
		console.log(i);
		clearTimeout(articleTimer);
		autoChangeArticle(6000,i-center);
	})
	// 轮播自动切换
	function autoChangeArticle(time,index){
		articleTimer=setTimeout(function(){
			autoChangeArticle(time);
		},time)
		var test=typeof index !='undefined'?index:1;
		changeArticle(test);
	}
	// 自动切换，参数时间
	autoChangeArticle(6000);


})