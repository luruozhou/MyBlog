window.jQuery = window.$ = require('../../../static/libs/js/jquery');

$(function () {
    var $loginBox = $("#login-box");
    $("#J-submit").click(function (e) {
        $.ajax({
            url: '/user/login',
            type: 'post',
            data: {
                userName: $loginBox.find('[name=userName]').val(),
                password: $loginBox.find('[name=pwd]').val(),
            },
            success: function (res) {
                console.log(res);
                location.href = location.href;
            },
            error: function (err) {
                console.log(err);
            }
        })
    })
    console.log($("login"));
})