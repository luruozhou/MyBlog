window.jQuery = window.$ = require('../libs/js/jquery');
var EventUtil=require('../libs/js/util').EventUtil;
$(function () {
    //获取页面可用高度
	var height = document.documentElement.clientHeight;
    var doc=document.querySelector("body");
    console.log("EventUtil");
    EventUtil.addHandler(doc,"mousewheel",function(){
        console.log(event.wheelDelta );
    })
})