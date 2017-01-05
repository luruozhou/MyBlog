window.jQuery = window.$ = require('../libs/js/jquery');
window.cover = require('../../widget/components/cover/cover');
window.sweetAlert=require('../../widget/sweetAlert/sweetalert.min')
var getPageData = require('../libs/js/util').getPageData;
$(function () {
//    swal("请登录后回复");
    //获取页面可用高度
    var height = document.documentElement.clientHeight;

    var isLogin = getPageData('isLogin');
    var uid = getPageData('uid');
    // console.log(isLogin, '===');


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
    

    var articleid = $(".article-main").attr("data-articleid");
    // var replyTpl = ' <div class="reply-block" data-authorId="{{authorId}}" data-id="{{id}}">' +
    //     '<div class="authorInfor">' +
    //     '<img src="{{authorAvatar}}" alt="" class="authorAvatar" />' +
    //     '<span class="authorName">{{authorName}}</span>' +
    //     '</div>' +
    //     '<p class="authorContent">{{authorContent}}</p>' +
    //     '<p class="replyer-block">@{{replyerName}}：{{replyContent}}</p>' +
    //     '<p class="reply-bottom">{{inTime}}<span  class="to-authorContent">回复</span></p>' +
    //     '</div>'
    // console.log(articleid);
    var replyTpl = ' <div class="reply-block" data-authorId="{{authorId}}" data-id="{{id}}">' +
        '<div class="authorInfor">' +
        '<img src="{{authorAvatar}}" alt="" class="authorAvatar" />' +
        '<span class="authorName">{{authorName}}</span>' +
        '</div>' +
        '<p class="authorContent">{{authorContent}}</p>' +
        '<p class="replyer-block">@{{replyerName}}：{{replyContent}}</p>' +
        '<p class="reply-bottom">{{inTime}}<span  class="openCover" data-open="replySomebody">回复</span></p>' +
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
                    var thisTpl = replyTpl.replace(/\{\{(\w+?)\}\}/g, function (a, varible) {
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
    $(".article-reply .publish").click(function () {
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
                        var data=res.data;
                        var $arthorEle =$('.article-reply .reply-user');
                        var item={
                            id:data.id,
                            authorId:uid,
                            authorAvatar:$arthorEle.find('img').attr('src'),
                            authorName:$arthorEle.find('.userName').html(),
                            authorContent:authorContent,
                            inTime:data.created_at
                        }
                        console.log("发布成功");
                        var thisTpl = replyTpl.replace(/\{\{(\w+?)\}\}/g, function (a, varible) {
                            return item[varible];
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
    //点击打开cover
    $(".openCover").click(function(){
        var open=$(this).attr("data-open");
        cover.openCover(open);
        console.log(open);
    })
    $(".reply-list").on('click', '.openCover', function (event) {
        var $parent=$(this).parents(".reply-block");
        if (isLogin) {
            var open=$(event.target).attr("data-open");
            cover.openCover(open);
            console.log(open);
            var replyer = $parent.find(".authorName").text();
            $("[data-coverName='replySomebody']").addClass("reply-cover--active");
            $("[data-coverName='replySomebody']").attr("data-authorId",uid);
            $("[data-coverName='replySomebody']").attr("data-replyerId",$parent.attr('data-authorId'));
            $("[data-coverName='replySomebody']").attr("data-replyId",$parent.attr('data-id'));
            $("[data-coverName='replySomebody']").attr("data-replyerName",$parent.find('.authorName').html());
            $("[data-coverName='replySomebody']").attr("data-replyContent",$parent.find('.authorContent').html());
            $("[data-coverName='replySomebody'] .replyer-name span").text(replyer);
            $("[data-coverName='replySomebody'] .authorContent").val("");
        }else{
            swal("请登录后回复");
        }

    })

})