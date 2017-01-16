window.jQuery = window.$ = require('../libs/js/jquery');
var EventUtil=require('../libs/js/util').EventUtil;
var backImg1 = __uri("static/index/img/main_bg1.jpg"); //背景图定位，
var backImg3 = __uri("static/index/img/main_bg3.jpg"); //背景图定位，
$(function () {
	//获取页面可用高度
	var height = document.documentElement.clientHeight;
	$(".section").css({ "height": height });
	var doc = document.querySelector(".toggle");
	var isOverMove=true;
	//整屏切换函数
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
            var imgUrl;
			if(isOverMove){
				//滚轮上，内容下，背景上
				if (event.wheelDelta > 0 && 1 < now && now < len + 1) {

					//锁定状态
					isOverMove=false;
					//前景位移
					$(this).css({ "transform": "translate(0px,-" + (now - 2) * height + "px)" });
					//背景位移
					$(".bgi").css({ "transform": "translate(0px,-" + avgHeight * (len - now + 1) + "px)" })
					//背景图切换
					if (now % 2 == 0) {
                        imgUrl=(now-1)==1?backImg1:backImg3;
						$(".bgi").css({ "background-image": "url("+imgUrl+")" });
					}
					//第二屏滚动到第一屏幕
					if(now==2){
						//header放大缩小
						$(".topbar ").animate({"opacity":"1"},function(){
							$(this).css({"display":"block"})
						 });
						  $(".person p").removeClass("p-hide").addClass("p-show");
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
					isOverMove=false;
					//前景位移
					$(this).css({ "transform": "translate(0px,-" + (now * height) + "px)" });
					//背景位移
					$(".bgi").css({ "transform": "translate(0px,-" + avgHeight * (len - now-1 ) + "px)" });
					//背景图切换
					if (now % 2 == 0) {
                        imgUrl=(now+1)==1?backImg1:backImg3;
						$(".bgi").css({ "background-image": "url("+imgUrl+")" });
					}
					// 第一屏向第二屏滚动
					if(now==1){
						//header放大缩小
						 $(".topbar").animate({"opacity":"0"},function(){
							$(this).css({"display":"none"})
						 });
						 $(".person p").removeClass("p-show").addClass("p-hide");
					}
					//向下箭头显示隐藏
					if(now==len-1){
						$(".down").hide();
					}
					now++;
				}

			}

		})
		//解锁状态
	}
	//解锁状态函数
	EventUtil.addHandler(doc,"webkitTransitionEnd",function(){
		isOverMove=true;
	})

	//初始化整平切换
	fullScreenToggle(doc,"0.5s");

	// 以下为文章切换内容
	//设置所有文章的状态
	function setArticle(articles,articlesInfor){
		for (var i = 0; i <articles.length; i++) {
			// 设置当前角度
			if(i<=center){
				$(articles[i]).css({"z-index":i});
				$(articles[i]).css({"-webkit-transform":"rotate("+(center-i)*3+"deg) translate("+10*(center-i)+"px,0px)" });
				if(i==center){
					$(articlesInfor[i]).animate({"opacity":"1"},function () {
						$(this).css({display:'block'})
					});
				}else{
					$(articlesInfor[i]).animate({"opacity":"0"},function () {
						$(this).css({display:'none'})
					});
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
		for (var i = 0; i < articles.length; i++) {
			if ($(articles[i]).attr("class")==$(this).attr("class")) {
				break;
			}
		}
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
		var test=typeof index !='undefined'&&index!=0?index:1;
		changeArticle(test);
	}
	// 自动切换，参数时间
	autoChangeArticle(6000);
	//以下是技术简介部分js
	var tecs=["fi3、gulp","nodeJS、express","MySQL","ES6","swig","原生JavaScript","CSS3、jQuery"]
	$(".tecStack").click(function(){
		// $(".tecDetails").animate({"height":"100px"},1000);
		// $(".tecDetails").slideToggle("slow");
		var noStack=$(".tecStack").index(this);
		switch(noStack){
			case 0:
				$(".bottomIrc").css({opacity:0});
				$(".topIrc").css({opacity:1});
				$(".topIrc").animate({"left":"16%"});
				break;
			case 1:
				$(".bottomIrc").css({opacity:0});
				$(".topIrc").css({opacity:1});
				$(".topIrc").animate({"left":"49%"});
				break;
			case 2:
				$(".bottomIrc").css({opacity:0});
				$(".topIrc").css({opacity:1});
				$(".topIrc").animate({"left":"83%"});
				break;
			case 3:
				$(".topIrc").css({"opacity":0});
				$(".bottomIrc").css({"opacity":1});
				$(".bottomIrc").animate({"left":"16%"});
				break;
			case 4:
				$(".topIrc").css({"opacity":0});
				$(".bottomIrc").css({"opacity":1});
				$(".bottomIrc").animate({"left":"49%"});
				break;
			case 5:
				$(".topIrc").css({"opacity":0});
				$(".bottomIrc").css({"opacity":1});
				$(".bottomIrc").animate({"left":"83%"});
				break;
		}
		$(".tecDetails span").text(tecs[noStack]);
	})
	$(".tecStack:nth-of-type(1)").trigger("click");
	// 隐藏loading
	$(".base-cover").fadeOut();



})