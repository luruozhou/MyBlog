 window.jQuery = window.$ = require('../../../static/libs/js/jquery');

$(function () {
 $(".reply-cover").click(function(event){
        var className=event.target.className;
        console.log(className=="reply-cover reply-cover--active");
        if(className=="reply-cover reply-cover--active"||className=="close"){
            $(".reply-cover").removeClass("reply-cover--active");
        }
        // .close
    })


})
