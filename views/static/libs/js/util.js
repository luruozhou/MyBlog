var data = null;
function init() {
    var $dataArea = $('script[data-id="data.jsData"]');
    if ($dataArea.text()) data = JSON.parse($dataArea.text())
}

exports.getPageData = function (id) {
    if (!data) {
        init();
    }
    if (!id) {
        return data;
    }
    return data[id];
}
//添加事件监听
exports.EventUtil = {
    addHandler: function (element, type, handler) {
        if (element.addEventListener) {
            element.addEventListener(type, handler, false);
        } else if (element.attachEvent) {
            element.attachEvent("on" + type, handler);
        } else {
            element["on" + type] = handler;
        }
    }
}
