window.jQuery = window.$ = require('../../../static/libs/js/jquery');

$(function () {
    var $loginBox = $("#login-box");
    $("#J-submit").click(function (e) {
        $("#J-submit").attr("disabled",true);
        $("#J-submit").attr("value","登陆中...");
        console.log($("#J-submit").text());
        $.ajax({
            url: '/user/login',
            type: 'post',
            data: {
                userName: $loginBox.find('[name=userName]').val(),
                password: $loginBox.find('[name=pwd]').val(),
            },
            success: function (res) {
                // res.data[i].id;
                console.log(res);
                switch(res.code){
                    case 1:{
                        location.href = location.href;
                        break;
                    }
                    case 0:{
                        $(".error").text(res.msg);
                        break;
                    }
                }
                $("#J-submit").attr("disabled",false);
                $("#J-submit").attr("value","登陆");
            },
            error: function (err) {
                console.log(err);
                 $("#J-submit").attr("disabled",false);
                 $("#J-submit").attr("value","登陆");
            }
        })
    })

    $(".cover").click(function(event){
        var idName=event.target.id;
        console.log(idName);
        if(idName=="J-close"||idName=="login-box"){
            $(".cover").removeClass("cover--active");
        }
    })
    // console.log($("login"));

})