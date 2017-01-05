 window.jQuery = window.$ = require('../../../static/libs/js/jquery');
//cover加class
$(".cover").addClass("register-cover");

$(function () {

    var $register=$("[data-coverName=register]");
    // console.log($register);
    $register.find("#J-register").click(function(){
        var userName=$register.find("[name='userName']").val();
        var nickName=$register.find("[name='nickName']").val();
        var password=$register.find("[name='password']").val();
        var repassword=$register.find("[name='repassword']").val();
        if(password==repassword){
            console.log("相等")
        }else{
            console.warn("不等")
        }
    })
})

// console.log();