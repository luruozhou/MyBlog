console.log('got! iw ')
window.jQuery = window.$ = require('../libs/js/jquery');
$(function () {
	//获取页面可用高度
	var height = document.documentElement.clientHeight;
	$(".section").css({ "height": height });
	var doc = document.querySelector(".toggle");
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
		$(doc).css({ "-webkit-transition": "transform" + " " + times });
		//setPrefix($(doc),"transition","transform"+" " + times);
		$(".bgi").css({ "-webkit-transition": "transform" + " " + "1s" });
		//setPrefix($(".bgi"),"transition","transform"+" " + 1s);
		var len = $(doc).children().length;//切换页数
		var bgHeight = $(".bgi").height();//背景整个的高度
		var avgHeight = bgHeight / len;//背景位移的大小
		var now = 1;//首页展示的是第几个页面
		doc.addEventListener("mousewheel", function (event) {
			if (event.wheelDelta > 0 && 1 < now && now < len + 1) {//滚轮上，内容下，背景上
				$(this).css({ "transform": "translate(0px,-" + (now - 2) * height + "px)" });
				$(".bgi").css({ "transform": "translate(0px,-" + avgHeight * (len - now + 1) + "px)" })
				if (now % 2 == 0) {
					$(".bgi").css({ "background-image": "url(static/index/img/main_bg" + (now - 1) + ".jpg)" });
				}
				if(now==2){
					$(".topbar .logo").css({"font-size":"2.5em"});
				}
				if(now<len+1){
					$(".down").show();
				}
				now--;
			}
			if (event.wheelDelta < 0 && 0 < now && now < len) {//滚轮下，内容上，背景下
				$(this).css({ "transform": "translate(0px,-" + (now * height) + "px)" });
				$(".bgi").css({ "transform": "translate(0px,-" + avgHeight * (len - now - 1) + "px)" });
				if (now % 2 == 0) {

					$(".bgi").css({ "background-image": "url(static/index/img/main_bg" + (now + 1) + ".jpg)" });
				}
				if(now==1){
					$(".topbar .logo").css({"font-size":"2em"});
				}
				if(now==len-1){
					$(".down").hide();
				}
				now++;
			}
		})
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
		}, 6000);
		$(".logo p").text(getWord());
	}
	 changeWord();

})