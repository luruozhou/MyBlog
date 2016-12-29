window.jQuery = window.$ = require('../libs/js/jquery');
var EventUtil=require('../libs/js/util').EventUtil;
$(function () {
    //获取页面可用高度
	var height = document.documentElement.clientHeight;
    
    // 获取body
    var body=document.querySelector("body");
    //获取header
    // var topbar=$(".topbar");
    // var scrollTop=document.body.scrollTop;
    //     console.log( document.body.scrollTop)

    //     // 下滚
    //     if(scrollTop>0){
    //         topbar.animate({"opciaty":"0"},1000);
    //     }
    //     if(event.wheelDelta>0){
    //         topbar.animate({"top":"0px"},1000);
    //     }
    //     console.log(event.wheelDelta);
    EventUtil.addHandler(body,"mousewheel",function(){
        var scrollTop=document.body.scrollTop;
        console.log(scrollTop);
        console.log("dd");
        if(scrollTop>height){
            $(".back-top").css({"transform": 'translate(0px,10px)',"-ms-transform":" translate(0px,10px)","-webkit-transform": "translate(0px,10px)", " -o-transform": "translate(0px,10px)", "-moz-transform":" translate(0px,10px)"});
        }else{
            $(".back-top").css({"transform": 'translate(0px,40px)',"-ms-transform":" translate(0px,40px)","-webkit-transform": "translate(0px,40px)", " -o-transform": "translate(0px,40px)", "-moz-transform":" translate(0px,40px)"}); 
        }
        
    })
    $(".back-top").click(function(){
        document.body.scrollTop=0;
    })

    

})