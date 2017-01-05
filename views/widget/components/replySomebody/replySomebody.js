window.jQuery = window.$ = require('../../../static/libs/js/jquery');

$(function () {
    var replyTpl = ' <div class="reply-block" data-authorId="{{authorId}}" data-id="{{id}}">' +
        '<div class="authorInfor">' +
        '<img src="{{authorAvatar}}" alt="" class="authorAvatar" />' +
        '<span class="authorName">{{authorName}}</span>' +
        '</div>' +
        '<p class="authorContent">{{authorContent}}</p>' +
        '<p class="replyer-block">@{{replyerName}}：{{replyContent}}</p>' +
        '<p class="reply-bottom">{{inTime}}<span class="openCover" data-open="replySomebody">回复</span></p>' +
        '</div>'
    $(".reply-cover").click(function (event) {
        var className = event.target.className;
        console.log(className == "reply-cover reply-cover--active");
        if (className == "reply-cover reply-cover--active" || className == "close") {
            $(".reply-cover").removeClass("reply-cover--active");
        }
        // .close
    })

    $("[data-coverName='replySomebody'] .publish").click(function () {
        console.log("click  publish")
        var $parent=$(this).parents(".cover");
        var authorContent = $parent.find(".authorContent").val();
        var artId = $(".article-main").attr("data-articleid");
        var authorId =$parent.attr('data-authorId');
        var replyerId =$parent.attr('data-replyerId');
        var replyId =$parent.attr('data-replyId');
        var replyerName =$parent.attr('data-replyerName');
        var replyContent =$parent.attr('data-replyContent');
        if (authorContent != "" && authorContent.length <= 500) {
            $.ajax({
                url: '/management/articleReply',
                type: 'post',
                data: {
                    artId: artId,
                    authorId: authorId,
                    replyId: replyId,
                    authorContent: authorContent,
                    replyerId: replyerId
                },
                success:function(res){
                    if(res.code==1){
                        var data=res.data;
                        var $arthorEle =$('.article-reply .reply-user');
                        var item={
                            id:data.id,
                            authorId:authorId,
                            authorAvatar:$arthorEle.find('img').attr('src'),
                            authorName:$arthorEle.find('.userName').html(),
                            authorContent:authorContent,
                            inTime:data.created_at,
                            replyerName:replyerName,
                            replyContent:replyContent
                        }
                        console.log("发布成功");
                        var thisTpl = replyTpl.replace(/\{\{(\w+?)\}\}/g, function (a, varible) {
                            return item[varible];
                        });
                        var $thisTpl = $(thisTpl);
                        $('.reply-list').append($thisTpl);
                        $parent.hide();
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


})
