window.jQuery = window.$ = require('../libs/js/jquery');
$(function () {
	window.onload=function(){
		//瀑布流入口文件
		function setMasonry(masonry,masonryWidthPersent){
			masonry.css({"width":masonryWidthPersent});
			//masonryBlock
			var $masonryBlocks=masonry.find(".masonry-block");
			//外边框宽度
			var masonryWidth=parseInt(masonry.css("width"));
			//每个元素的宽度
			var masonryBlockWidth=parseInt($masonryBlocks.outerWidth(true));
			//列数
			var lines=parseInt(masonryWidth/masonryBlockWidth);
			//当前各列高度初始化
			var heights = new Array();
			for (var i = 0; i < lines; i++) {
				heights.push( $($masonryBlocks[i]).outerHeight(true));
			}
			// console.warn(heights);
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
			//设置子元素的位置
			function setMasonryBlock($masonryBlocks){
				for(var i=0;i<$masonryBlocks.length;i++){
					var  $masonryBlock=$($masonryBlocks[i]);
					//设置第一排top 
					if(i<lines){
						$masonryBlock.css({"top":"0px","left":masonryBlockWidth*(i%lines)+"px"});
					}else{
						$masonryBlock.css({
							"top":parseInt(getMinHeight(heights).val)+"px"
						});
						//最小的行数
						var n=getMinHeight(heights).num;
						$masonryBlock.css({"left":masonryBlockWidth*n+"px"});
						heights[n]+=$masonryBlock.outerHeight(true);
					}
				}
			}
			setMasonryBlock($masonryBlocks);
            
			masonry.css({"height":getMaxHeight(heights)+"px","width":masonryBlockWidth*lines+"px"})
			function addBlock(){
				
			}
		}
		//获取瀑布流最外层
		var masonry=$(".masonry");
		var masonryWidthPersent=Math.round((masonry.width()/$(document).width())*100)+"%";
		//瀑布流初始化
		setMasonry(masonry);
		//窗口大小变化重排
        $(window).resize(function(){
            setMasonry(masonry,masonryWidthPersent);
        })
		var MasonryBlockTpl=
		'<a class="masonry-block" href="/article/{{id}}">'+
			'<img class="article-header" src="{{cover}}" alt="">'+
			'<div class="article-title">'+
				'{{title}}'+
			'</div>'+
			'<p class="article-content">'+
				'{{description}}'+
			'</p>'+
		'</a>'
		function BottomJumpPage() {
			var scrollTop = $(this).scrollTop();
			var scrollHeight = $(document).height();
			var windowHeight = $(this).height();
			var $masonry=$(".masonry");
			if (scrollTop + windowHeight == scrollHeight) {  //滚动到底部执行事件
				$.ajax({
					url:"/management/querySectionArticlesByTab",
					type:'post',
					data:{
						sectionTab:'front-end',
						pageNo:scrollNum,
						pageSize:2
					},
					success:function(res){
						var thisTpls=[];
						if(res.code==1){
							var articles=res.data.data;
							$.each(articles,function(i,item){
								 var thisTpl = MasonryBlockTpl.replace(/\{\{(\w+?)\}\}/g, function (a, varible) {
									return item[varible];
								});
								console.log(thisTpl);
								var $thisTpl = $(thisTpl);
								$masonry.append($thisTpl);
								
							});
							setMasonry($masonry);
							scrollNum++;
						}else{
							console.log(res.msg);
						}	
					},
					error:function(err){
						console.log(err);
					}
				})

			}
			if (scrollTop == 0) {  //滚动到头部部执行事件
			console.dir("我到头部了");

			}
		}
		var scrollNum=2;
		$(window).scroll(BottomJumpPage);
		

	}
});