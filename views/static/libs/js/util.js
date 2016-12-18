
var data = null;
function init() {
    var $dataArea =$('script[data-id="data.extras"]');
    if($dataArea.text()) data = JSON.parse($dataArea.text())
}

exports.getPageData = function  (id) {
    if(!data){
        init();
    }
   return data[id];
}