window.jQuery = window.$ = require('../libs/js/jquery');
$(function () {
    //获取页面可用高度
	var height = document.documentElement.clientHeight;
    
    // 获取body
    var body=document.querySelector("body");
    //获取header
    var topbar=$(".topbar");
    
    var lastTop=0;//上次的
    $(window).scroll(function(event){
        var scrollTop=document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
        //
        if(scrollTop>height){
            $(".back-top").css({"transform": 'translate(0px,10px)',"-ms-transform":" translate(0px,10px)","-webkit-transform": "translate(0px,10px)", " -o-transform": "translate(0px,10px)", "-moz-transform":" translate(0px,10px)"});
        }else{
            $(".back-top").css({"transform": 'translate(0px,40px)',"-ms-transform":" translate(0px,40px)","-webkit-transform": "translate(0px,40px)", " -o-transform": "translate(0px,40px)", "-moz-transform":" translate(0px,40px)"}); 
        }
        if(scrollTop-lastTop>0){
            //  topbar.css({"transform": 'scale(1,0)',"-ms-transform":" scale(1,0)","-webkit-transform": "scale(1,0)", " -o-transform": "scale(1,0)", "-moz-transform":" scale(1,0)"}); 
            topbar.css({"transform": 'translate(0px,0px)',"-ms-transform":" translate(0px,-100px)","-webkit-transform": "translate(0px,-100px)", " -o-transform": "translate(0px,-100px)", "-moz-transform":" translate(0px,-100px)"});
        }else{
            topbar.css({"transform": 'translate(0px,-100px)',"-ms-transform":" translate(0px,0px)","-webkit-transform": "translate(0px,0px)", " -o-transform": "translate(0px,0px)", "-moz-transform":" translate(0px,0px)"});
        }


        lastTop=scrollTop;
        
    })
    $(".back-top").click(function(){
        document.body.scrollTop=0;
    })

    $(".toLogin").click(function(){
        $(".cover").addClass("cover--active");
    })
    var articleid=$(".article-main").attr("data-articleid");
    console.log(articleid);
    $.ajax({
        url: '/management/queryArticleReplies',
        type: 'post',
        data: {
            id : articleid
        },
        success: function (res) {
            console.log(res);
            // res.data[i].id;
            // console.log(res);
            // switch(res.code){
            //     case 1:{
            //         location.href = location.href;
            //         break;
            //     }
            //     case 0:{
            //         $(".error").text(res.msg);
            //         break;
            //     }
            // }
            // $("#J-submit").attr("disabled",false);
            // $("#J-submit").attr("value","登陆");
        },
        error: function (err) {
            console.log(err);
            //  $("#J-submit").attr("disabled",false);
            //  $("#J-submit").attr("value","登陆");
        }
    })
    $(".to-authorContent").click(function(){
        $(".authorContent").focus();
    })
})