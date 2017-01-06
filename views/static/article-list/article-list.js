window.jQuery = window.$ = require('../libs/js/jquery');
$(function () {
	window.onload=function(){
		//瀑布流入口文件
		function setMasonry(masonry){
			//masonryBlock
			var $masonryBlocks=masonry.find(".masonry-block");
			//外边框宽度
			var masonryWidth=parseInt(masonry.css("width"));
			//每个元素的宽度
			var masonryBlockWidht=parseInt($masonryBlocks.outerWidth(true));
			//列数
			var lines=parseInt(masonryWidth/masonryBlockWidht);
			//当前各列高度初始化
			var heights = new Array();
			for (var i = 0; i < lines; i++) {
				heights.push( $($masonryBlocks[i]).outerHeight(true));
			}
			console.warn(heights);
			//获取高度最小值和最小值所在的列数
			function getMinHeight(attr){
				return (function fun(i){
					if(i<=0){
						return {num:0,val:attr[0]};
					}else{
						return attr[i]< fun(i-1).val?{num:(i),val:attr[i]}: fun(i-1);
					}
				})(attr.length-1);
			}
			//获取高度最大值
			function getMaxHeight(attr){
				return (function fun(i){
					if(i<=0){
						return attr[0];
					}else{
						return attr[i]> fun(i-1)?attr[i]: fun(i-1);
					}
				})(attr.length-1);
			}
            console.log(getMaxHeight(heights));
			//设置子元素的位置
			function setMasonryBlock($masonryBlocks){
				for(var i=0;i<$masonryBlocks.length;i++){
					var  $masonryBlock=$($masonryBlocks[i]);
					//设置第一排top 
					if(i<lines){
						$masonryBlock.css({"top":"0px","left":masonryBlockWidht*(i%lines)+"px"});
					}else{
						console.log(typeof $masonryBlock.outerHeight(true));
						$masonryBlock.css({
							"top":parseInt(getMinHeight(heights).val)+"px"
						});
						//最小的行数
						var n=getMinHeight(heights).num;
						$masonryBlock.css({"left":masonryBlockWidht*n+"px"});
						heights[n]+=$masonryBlock.outerHeight(true);
					}
				}
			}
			setMasonryBlock($masonryBlocks);
            
			masonry.css({"height":getMaxHeight(heights)+"px"})
		}
		//获取瀑布流最外层
		var masonry=$(".masonry");
		setMasonry(masonry);
        $(window).resize(function(){
            setMasonry(masonry);
        })
	}
});