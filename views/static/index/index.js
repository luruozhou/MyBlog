window.jQuery = window.$ = require('../libs/js/jquery');
var EventUtil=require('../libs/js/util').EventUtil;
$(function () {
	//获取页面可用高度
	var height = document.documentElement.clientHeight;
	$(".section").css({ "height": height });
	var doc = document.querySelector(".toggle");
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
					//第二屏滚动到第一屏幕
					if(now==2){
						//header放大缩小
						$(".topbar ").animate({"opacity":"1"},function(){
							$(this).css({"display":"block"})
						 });
						$(".section:nth-of-type(1) .person").animate({"right":"0%","opacity":1},800);
					}
					// 最后一屏向倒数第二屏滚动
					if(now<len+1){
						//向下箭头显示隐藏
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
					// 第一屏向第二屏滚动
					if(now==1){
						//header放大缩小
						 $(".topbar").animate({"opacity":"0"},function(){
							$(this).css({"display":"none"})
						 });
						 $(".section:nth-of-type(1) .person").animate({"right":"100%","opacity":0},800);
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
	//设置所有文章的状态
	function setArticle(articles,articlesInfor){
		for (var i = 0; i <articles.length; i++) {
			// 设置当前角度
			if(i<=center){
				$(articles[i]).css({"z-index":i});
				$(articles[i]).css({"-webkit-transform":"rotate("+(center-i)*3+"deg) translate("+10*(center-i)+"px,0px)" });
				if(i==center){
					$(articlesInfor[i]).animate({"opacity":"1"});
				}else{
					$(articlesInfor[i]).animate({"opacity":"0"});
				}
				
			}else{
				$(articles[i]).css({"z-index":center-(i-center)});
				$(articles[i]).css({"-webkit-transform":"rotate("+(center-i)*3+"deg) translate("+10*(i-center)+"px,0px)" });
				$(articlesInfor[i]).animate({"opacity":"0"});
			}
		}
	}
	//所有文章向上
	function upArticle(){
		setArticle(articles,articlesInfor);
		//文章数组变化
		articles.push(articles.shift());
		// 文章简介变化
		articlesInfor.push(articlesInfor.shift());
		
		
	}
	//所有文章向下
	function downArticle(){
		setArticle(articles,articlesInfor);
		// 文章数组变化
		articles.unshift(articles.pop());
		// 文章简介变化
		articlesInfor.unshift(articlesInfor.pop());
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
	//所有文章简介
	var inf=$(".articleInfor");
	var articlesInfor=[];
	for(var i=0;i<inf.length;i++){
		articlesInfor.push(inf[i])
	}
	//中间的文章
	var center=parseInt(articles.length/2);
	//初始化文章
	setArticle(articles,articlesInfor);

	// 点击文章切换到当前
	$(".article").click(function(){
		console.log("click");
		for (var i = 0; i < articles.length; i++) {
			if ($(articles[i]).attr("class")==$(this).attr("class")) {
				break;
			}
		}
		console.log(i);
		//隐藏所有简介
		// $(articleInfor).animate({"opacity":"0"},1000);
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
	//以下是技术简介部分js
	$(".tecStack").click(function(){
		// $(".tecDetails").animate({"height":"100px"},1000);
		// $(".tecDetails").slideToggle("slow");
	})
	

})