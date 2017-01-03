window.jQuery = window.$ = require('../libs/js/jquery');
var getPageData = require('../libs/js/util').getPageData;
$(function () {
    //获取页面可用高度
    var height = document.documentElement.clientHeight;

    var isLogin = getPageData('isLogin');
    var uid = getPageData('uid');
    console.log(isLogin, '===');


    // 获取body
    var body = document.querySelector("body");
    //获取header
    var topbar = $(".topbar");

    var lastTop = 0;//上次的
    $(window).scroll(function (event) {
        var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
        //
        if (scrollTop > height) {
            $(".back-top").css({
                "transform": 'translate(0px,10px)',
                "-ms-transform": " translate(0px,10px)",
                "-webkit-transform": "translate(0px,10px)",
                " -o-transform": "translate(0px,10px)",
                "-moz-transform": " translate(0px,10px)"
            });
        } else {
            $(".back-top").css({
                "transform": 'translate(0px,40px)',
                "-ms-transform": " translate(0px,40px)",
                "-webkit-transform": "translate(0px,40px)",
                " -o-transform": "translate(0px,40px)",
                "-moz-transform": " translate(0px,40px)"
            });
        }
        if (scrollTop - lastTop > 0) {
            //  topbar.css({"transform": 'scale(1,0)',"-ms-transform":" scale(1,0)","-webkit-transform": "scale(1,0)", " -o-transform": "scale(1,0)", "-moz-transform":" scale(1,0)"}); 
            topbar.css({
                "transform": 'translate(0px,0px)',
                "-ms-transform": " translate(0px,-100px)",
                "-webkit-transform": "translate(0px,-100px)",
                " -o-transform": "translate(0px,-100px)",
                "-moz-transform": " translate(0px,-100px)"
            });
        } else {
            topbar.css({
                "transform": 'translate(0px,-100px)',
                "-ms-transform": " translate(0px,0px)",
                "-webkit-transform": "translate(0px,0px)",
                " -o-transform": "translate(0px,0px)",
                "-moz-transform": " translate(0px,0px)"
            });
        }


        lastTop = scrollTop;

    })
    $(".back-top").click(function () {
        document.body.scrollTop = 0;
    })

    $(".toLogin").click(function () {
        $(".cover").addClass("cover--active");
    })
    var articleid = $(".article-main").attr("data-articleid");
    // console.log(articleid);
    var replyTpl = ' <div class="reply-block" data-authorId="{{authorId}}" data-id="{{id}}">' +
        '<div class="authorInfor">' +
        '<img src="{{authorAvatar}}" alt="" class="authorAvatar" />' +
        '<span class="authorName">{{authorName}}</span>' +
        '</div>' +
        '<p class="authorContent">{{authorContent}}</p>' +
        '<p class="replyer-block">@{{replyerName}}：{{replyContent}}</p>' +
        '<p class="reply-bottom">{{inTime}}<span class="to-authorContent">回复</span></p>' +
        '</div>'
    $.ajax({
        url: '/management/queryArticleReplies',
        type: 'post',
        data: {
            id: articleid
        },
        success: function (res) {
            // console.log(res);
            if (res.code == 1) {
                var replies = res.data;
                $.each(replies, function (i, item) {
                    var thisTpl = replyTpl.replace(/\{\{(\w+?)\}\}/g, function (a, varible, f) {
                        return item[varible];
                    });
                    var $thisTpl = $(thisTpl);
                    !item.replyId && $thisTpl.find('.replyer-block').remove();
                    $('.reply-list').append($thisTpl);
                })
            }
        },
        error: function (err) {
            console.log(err);
            //  $("#J-submit").attr("disabled",false);
            //  $("#J-submit").attr("value","登陆");
        }
    })
    $(".publish").click(function () {
        var authorContent = $(this).parents(".reply-user").find(".authorContent").val();
        var artId = $(".article-main").attr("data-articleid");
        if (authorContent != "" && authorContent.length <= 500) {
            $.ajax({
                url: '/management/articleReply',
                type: 'post',
                data: {
                    artId: artId,
                    authorId: uid,
                    replyId: null,
                    authorContent: authorContent,
                    replyerId: null
                },
                success:function(res){
                    if(res.code==1){
                        console.log("发布成功");
                        var thisTpl = replyTpl.replace(/\{\{(\w+?)\}\}/g, function (a, varible, f) {
                            return res.data[varible];
                        });
                        var $thisTpl = $(thisTpl);
                        $thisTpl.find('.replyer-block').remove();
                        $('.reply-list').append($thisTpl);
                    }
                    else{
                        console.log(res.msg);
                    }
                    
                },
                error:function(e){
                    console.log(e);
                }
            })
        }

    })
    $(".reply-list").on('click', '.to-authorContent', function (event) {

        if (isLogin) {
            var replyer = $(this).parents(".reply-block").find(".authorName").text();
            $(".reply-cover").show();

            setTimeout(function () {
                $(".reply-cover").addClass("reply-cover--active");
            }, 0)
            $(".reply-cover .replyer-name span").text(replyer);
            $(".reply-cover .authorContent").val("");
        }

    })

})