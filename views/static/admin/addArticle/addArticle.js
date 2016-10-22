import "./addArticle.less";
import "../../libs/js/sceditor/jquery.sceditor.bbcode.min.js";
import "../../libs/js/sceditor/square.min.less";

window.initUpload = function(input,callback) {

};

$(function () {

    $("textarea").sceditor({
        plugins: 'bbcode',
        style: location.origin+"/static/libs/js/sceditor/jquery.sceditor.default.min.css",
        emoticonsRoot:location.origin+"/static/libs/js/sceditor/emoticons/"
    });
})