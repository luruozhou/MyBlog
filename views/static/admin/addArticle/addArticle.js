window.jQuery = window.$ = require('../../libs/js/jquery');
require('../../libs/js/sceditor/jquery.sceditor.min.js');
// import "../../libs/js/sceditor/square.min.less";
var getPageData = require('../../libs/js/util').getPageData;
console.log('233333')
$(function () {
    let sections = getPageData("sections");

    $("#category").change(function () {
        let $this = $(this);
        let sectionId = $this.val();
        let sub_sec_list = [];
        sections.forEach(function (item, i) {
            if (item.id == sectionId) {
                sub_sec_list = item.sons;
            }
        })
        renderSubSections(sub_sec_list)
    })

    function renderSubSections(sub_sec_list) {
        var str = '<option value=""}>请选择</option>';
        sub_sec_list.forEach(function (item, i) {
            str += `<option value="${item.id}"}>${item.name}</option>`;
        })
        console.log(str);
        $("#sub_category").html(str);
    }

    $("textarea").sceditor({
        plugins: 'bbcode',
        style: location.origin + "/static/libs/js/sceditor/jquery.sceditor.default.min.css",
        emoticonsRoot: location.origin + "/static/libs/js/sceditor/emoticons/"
    });

    $(".submit").click(function () {
        let instance = $('textarea').sceditor('instance');
        let html_content = $.trim(instance.val());
        let title = $(".article_title").val();
        let sid = $("#category").find("option:selected").val();
        let sub_sid = $("#sub_category").find("option:selected").val();
        let description = "test"
        let data = {
            title,
            html_content,
            sid,
            sub_sid,
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
    window.initUpload = function (input, callback) {

    };
})