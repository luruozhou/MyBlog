 window.jQuery = window.$ = require('../../../static/libs/js/jquery');
//  console.log($("cover").next(".div").text())


export function openCover(CoverName){
    // console.log(CoverName);
    var $cover=$(".cover[data-coverName='"+CoverName+"']");
    $cover.show();
    $cover.find(".coverContent").addClass("coverContent--active");
    $cover.click(function(event){
        // var idName=event.target.id;
        // console.log(idName);
        // if(idName=="J-close"||idName=="login-box"){
        //     $(".cover").removeClass("cover--active");
        // }
        var className=event.target.className;
        console.log(className);
        if(className=="cover"||className=="close"){
            //此处有个bug待解决
            // $cover.find(".coverContent").removeClass("coverContent--active").addClass("coverContent--close");
            $cover.hide();
        }
    })

}
// $(function () {
//     console.log($(".coverContent").text());

// })
