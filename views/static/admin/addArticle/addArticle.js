window.jQuery = window.$ = require('../../libs/js/jquery');
require('../../libs/js/sceditor/jquery.sceditor.min.js');
var getPageData = require('../../libs/js/util').getPageData;

$(function () {
    let sections = getPageData("sections");
    let qiniuPrefixUrl = getPageData("qiniuPrefixUrl");

    $("#category").change(function () {
        let $this = $(this);
        let sectionId = $this.val();
        let sub_sec_list = [];
        sections.forEach(function (item, i) {
            if (item.id == sectionId) {
                sub_sec_list = item.sons;
            }
        })
    })

    $("textarea").sceditor({
        plugins: 'bbcode',
        style: location.origin + "/static/libs/js/sceditor/jquery.sceditor.default.min.css",
        emoticonsRoot: location.origin + "/static/libs/js/sceditor/emoticons/",
    });

    $(".submit").click(function () {
        let instance = $('textarea').sceditor('instance');
        console.log(instance,instance.getBody().text())

        return;
        let html_content = $.trim(instance.val());
        let title = $(".article_title").val();
        let sid = $("#category").find("option:selected").val();
        let description = "test"
        let data = {
            title,
            html_content,
            sid,
            description
        };
        console.log(data)
        $.ajax({
            url: "/management/addArticle",
            type: "post",
            dataType: 'json',
            data: data
        })
            .done(function (res) {
                console.log(res)
            })
    })
    window.initUpload = function ($input, $image) {
        $input.on('change', function (e) {
            var e = event || window.event;
            var files = e.target.files;
            var form = new FormData;
            var file = files[0];
            form.append('Upload', file);
            $.ajax({
                url: '/file/uploadImg',
                type: 'post',
                data: form,
                processData: false,
                contentType: false
            })
                .done(function (res) {
                    if (res.code == 1) {
                        var imgUrl = qiniuPrefixUrl + res.data;
                        $image.val(imgUrl);
                    } else {
                        alert(res.msg)
                    }
                })
                .fail(function () {
                    console.log("error");
                })
        })
    };
})