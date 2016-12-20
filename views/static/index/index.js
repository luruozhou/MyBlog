console.log('got! iw ')
window.jQuery = window.$ = require('../libs/js/jquery');
$(function () {
	//获取页面可用高度
	var height = document.documentElement.clientHeight;
	$(".section").css({ "height": height });
	var doc = document.querySelector(".toggle");
	// function setPrefix(doc, pro, val) {
	// 	doc.css({ pro: val })
	// 	doc.css({ "-ms-"+pro:val })
	// 	doc.css({ "-moz-"+pro:val })
	// 	doc.css({ "-webkit-"+pro:val })
	// 	doc.css({ "-o-"+pro:val })
	// 	console.log("dd");
	// }
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
				now--;
			}
			if (event.wheelDelta < 0 && 0 < now && now < len) {//滚轮下，内容上，背景下
				$(this).css({ "transform": "translate(0px,-" + (now * height) + "px)" });
				$(".bgi").css({ "transform": "translate(0px,-" + avgHeight * (len - now - 1) + "px)" });
				if (now % 2 == 0) {

					$(".bgi").css({ "background-image": "url(static/index/img/main_bg" + (now + 1) + ".jpg)" });
				}
				now++;
			}
		})
	}

	fullScreenToggle(doc,"0.5s");

})