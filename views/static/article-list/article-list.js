window.jQuery = window.$ = require('../libs/js/jquery');
$(function () {
	window.onload = function () {
		//瀑布流入口文件
		// function setMasonry(masonry,masonryWidthPersent){
		// 	masonry.css({"width":masonryWidthPersent});
		// 	//masonryBlock
		// 	var $masonryBlocks=masonry.find(".masonry-block");
		// 	//外边框宽度
		// 	var masonryWidth=parseInt(masonry.css("width"));
		// 	//每个元素的宽度
		// 	var masonryBlockWidth=parseInt($masonryBlocks.outerWidth(true));
		// 	//列数
		// 	var lines=parseInt(masonryWidth/masonryBlockWidth);
		// 	//当前各列高度初始化
		// 	var heights = new Array();
		// 	for (var i = 0; i < lines; i++) {
		// 		heights.push( $($masonryBlocks[i]).outerHeight(true));
		// 	}
		// 	// console.warn(heights);
		// 	//获取高度最小值和最小值所在的列数
		// 	function getMinHeight(attr){
		// 		return (function fun(i){
		// 			if(i<=0){
		// 				return {num:0,val:attr[0]};
		// 			}else{
		// 				return attr[i]< fun(i-1).val?{num:(i),val:attr[i]}: fun(i-1);
		// 			}
		// 		})(attr.length-1);
		// 	}
		// 	//获取高度最大值
		// 	function getMaxHeight(attr){
		// 		return (function fun(i){
		// 			if(i<=0){
		// 				return attr[0];
		// 			}else{
		// 				return attr[i]> fun(i-1)?attr[i]: fun(i-1);
		// 			}
		// 		})(attr.length-1);
		// 	}
		// 	//设置子元素的位置
		// 	function setMasonryBlock($masonryBlocks){
		// 		for(var i=0;i<$masonryBlocks.length;i++){
		// 			var  $masonryBlock=$($masonryBlocks[i]);
		// 			//设置第一排top 
		// 			if(i<lines){
		// 				$masonryBlock.css({"top":"0px","left":masonryBlockWidth*(i%lines)+"px"});
		// 			}else{
		// 				$masonryBlock.css({
		// 					"top":parseInt(getMinHeight(heights).val)+"px"
		// 				});
		// 				//最小的行数
		// 				var n=getMinHeight(heights).num;
		// 				$masonryBlock.css({"left":masonryBlockWidth*n+"px"});
		// 				heights[n]+=$masonryBlock.outerHeight(true);
		// 			}
		// 		}
		// 	}
		// 	setMasonryBlock($masonryBlocks);
            
		// 	masonry.css({"height":getMaxHeight(heights)+"px","width":masonryBlockWidth*lines+"px"})
		// 	function addBlock(){
				
		// 	}
		// }
		// //获取瀑布流最外层
		// var masonry=$(".masonry");
		// var masonryWidthPersent=Math.round((masonry.width()/$(document).width())*100)+"%";
		// //瀑布流初始化
		// setMasonry(masonry);
		// //窗口大小变化重排
        // $(window).resize(function(){
        //     setMasonry(masonry,masonryWidthPersent);
        // })
		// var MasonryBlockTpl=
		// '<a class="masonry-block" href="/article/{{id}}">'+
		// 	'<img class="article-header" src="{{cover}}" alt="">'+
		// 	'<div class="article-title">'+
		// 		'{{title}}'+
		// 	'</div>'+
		// 	'<p class="article-content">'+
		// 		'{{description}}'+
		// 	'</p>'+
		// '</a>'
		// function BottomJumpPage() {
		// 	var scrollTop = $(this).scrollTop();
		// 	var scrollHeight = $(document).height();
		// 	var windowHeight = $(this).height();
		// 	var $masonry=$(".masonry");
		// 	if (scrollTop + windowHeight == scrollHeight) {  //滚动到底部执行事件
		// 		$.ajax({
		// 			url:"/management/querySectionArticlesByTab",
		// 			type:'post',
		// 			data:{
		// 				sectionTab:'front-end',
		// 				pageNo:scrollNum,
		// 				pageSize:2
		// 			},
		// 			success:function(res){
		// 				var thisTpls=[];
		// 				if(res.code==1){
		// 					var articles=res.data.data;
		// 					$.each(articles,function(i,item){
		// 						 var thisTpl = MasonryBlockTpl.replace(/\{\{(\w+?)\}\}/g, function (a, varible) {
		// 							return item[varible];
		// 						});
		// 						console.log(thisTpl);
		// 						var $thisTpl = $(thisTpl);
		// 						$masonry.append($thisTpl);
								
		// 					});
		// 					setMasonry($masonry);
		// 					scrollNum++;
		// 				}else{
		// 					console.log(res.msg);
		// 				}	
		// 			},
		// 			error:function(err){
		// 				console.log(err);
		// 			}
		// 		})

		// 	}
		// 	if (scrollTop == 0) {  //滚动到头部部执行事件
		// 	console.dir("我到头部了");

		// 	}
		// }
		// var scrollNum=2;
		// $(window).scroll(BottomJumpPage);
		
		// var setMasonry={
		// 	$masonry:$(".masonry"),
		// 	$masonryBlocks:function(){
		// 		return	this.$masonry.find(".masonry-block");
		// 	},
		// 	masonryWidth:function(){
		// 		return parseInt(this.$masonry.css("width"));
		// 	},
		// 	masonryBlockWidth:function(){
		// 		return parseInt(this.$masonry.find(".masonry-block").outerWidth(true));
		// 	},
		// 	lines:function(){
		// 		return parseInt(parseInt(this.$masonry.css("width"))/this.$masonry.find(".masonry-block").outerWidth(true));	
		// 	},
		// 	heights:function(){
		// 		var heights = new Array();
		// 		for (var i = 0; i < this.lines(); i++) {
		// 			heights.push($(this.$masonryBlocks()[i]).outerHeight(true));
		// 		}
		// 		return heights;
		// 	},
		// 	getMinHeight:function(){
		// 		var heights=this.heights();
		// 		return (function fun(i){
		// 			if(i<=0){
		// 				return {num:0,val:heights[0]};
		// 			}else{
		// 				return heights[i]< fun(i-1).val?{num:(i),val:heights[i]}: fun(i-1);
		// 			}
		// 		})(heights.length-1);
		// 	},
		// 	getMaxHeight:function(){
		// 		var heights=this.heights();
		// 		console.log(heights);
		// 		return (function fun(i){
		// 			if(i<=0){
		// 				return heights[0];
		// 			}else{
		// 				return heights[i]> fun(i-1)?heights[i]: fun(i-1);
		// 			}
		// 		})(heights.length-1);
		// 	},
		// 	setAllMasonry:function(){
		// 		for(var i=0;i<this.$masonryBlocks().length;i++){
		// 			var  $masonryBlock=$(this.$masonryBlocks()[i]);
		// 			//设置第一排top 
		// 			if(i<this.lines()){
		// 				this.$masonry.css({"top":"0px","left":this.masonryBlockWidth()*(i%this.lines())+"px"});
		// 			}else{
		// 				$masonryBlock.css({
		// 					"top":parseInt(this.getMinHeight().val)+"px"
		// 				});
		// 				//最小的行数
		// 				var n=this.getMinHeight().num;
		// 				$masonryBlock.css({"left":this.masonryBlockWidth()*n+"px"});
		// 				this.heights[n]+=$masonryBlock.outerHeight(true);
		// 			}
		// 		}
		// 		this.$masonry.css({"height":this.getMaxHeight()+"px"})
		// 		console.log("maxheight"+this.getMaxHeight());
		// 		// $masonry.css({"height":this.getMaxHeight()+"px","width":this.masonryBlockWidth()*lines+"px"})
				
		// 	}
			

		// }
		// setMasonry.setAllMasonry();
		// console.log(setMasonry.heights());
		// var masonryWidthPersent=Math.round(($(".masonry").width()/$(document).width())*100)+"%";
		// // 窗口大小变化重排
        // $(window).resize(function(){
		// 	$(".masonry").css({"width":masonryWidthPersent})
		// 	setMasonry.$masonry=$(".masonry");
        //     setMasonry.setAllMasonry();
		// 	console.log("ddd");
        // })
		var setMasonry = {
			heights: [],
			masonryBlockWidth:parseInt($(".masonry-block").outerWidth(true)),
			masonryWidth :parseInt($(".masonry").css("width")),
			// lines :parseInt(setMasonry.masonryWidth / setMasonry.masonryBlockWidth),
			getMinHeight: function (attr) {
				return (function fun(i) {
					if (i <= 0) {
						return { num: 0, val: attr[0] };
					} else {
						return attr[i] < fun(i - 1).val ? { num: (i), val: attr[i] } : fun(i - 1);
					}
				})(attr.length - 1);
			},
			getMaxHeight: function (attr) {
				return (function fun(i) {
					if (i <= 0) {
						return attr[0];
					} else {
						return attr[i] > fun(i - 1) ? attr[i] : fun(i - 1);
					}
				})(attr.length - 1);
			},
			setOneBlock:function($masonryBlock){
				$masonryBlock.css({
							"top": parseInt(this.getMinHeight(this.heights).val) + "px"
						});
						//最小的行数
						var n = this.getMinHeight(this.heights).num;
						$masonryBlock.css({ "left": this.masonryBlockWidth * n + "px" });
						this.heights[n] += $masonryBlock.outerHeight(true);
						console.log("====="+this.heights);
			},
			setAllMasonry: function (masonry, masonryWidthPersent) {
				masonry.css({ "width": masonryWidthPersent });
				
				var $masonryBlocks = masonry.find(".masonry-block");
				var masonryWidth = parseInt($(".masonry").css("width"));
				var masonryBlockWidth = this.masonryBlockWidth;
				var lines = parseInt(masonryWidth / masonryBlockWidth);
				var heights = new Array();
				for (var i = 0; i < lines; i++) {
					heights.push($($masonryBlocks[i]).outerHeight(true));
				}
				this.heights = heights;
				for (var i = 0; i < $masonryBlocks.length; i++) {
					var $masonryBlock = $($masonryBlocks[i]);
					//设置第一排top 
					if (i < lines) {
						$masonryBlock.css({ "top": "0px", "left": masonryBlockWidth * (i % lines) + "px" });
					} else {
						this.setOneBlock($masonryBlock);
						
					}
				}
				masonry.css({ "height": this.getMaxHeight(this.heights) + "px", "width": masonryBlockWidth * lines + "px" });
				
			},
			setNextBlocks: function (NextBlocks) {
				// console.log(NextBlocks[1].toString());
				var blocksNum=$(".masonry-block").length;
				var masonryWidth = parseInt($(".masonry").css("width"));
				var masonryBlockWidth = this.masonryBlockWidth;
				var lines = parseInt(masonryWidth / masonryBlockWidth);
				// console.log("blocksNum:"+blocksNum);
				// console.log("heights:"+this.heights);
				for(var i=0;i<NextBlocks.length;i++){
					$(".masonry").append(NextBlocks[i]);
					this.setOneBlock($($(".masonry-block")[$(".masonry-block").length-1]));
					$(".masonry").css({ "height": this.getMaxHeight(this.heights) + "px", "width": this.masonryBlockWidth * lines + "px" });

					// this.setAllMasonry($(".masonry"),"90%");
				}
			}
		}
		var masonryWidthPersent = Math.round(($(".masonry").width() / $(document).width()) * 100) + "%";
		setMasonry.setAllMasonry($(".masonry"));
		// 窗口大小变化重排
		$(window).resize(function () {
			setMasonry.setAllMasonry($(".masonry"), masonryWidthPersent);
		})
		var MasonryBlockTpl =
			'<a class="masonry-block" href="/article/{{id}}">' +
			'<img class="article-header" src="{{cover}}" alt="">' +
			'<div class="article-title">' +
			'{{title}}' +
			'</div>' +
			'<p class="article-content">' +
			'{{description}}' +
			'</p>' +
			'</a>';
		//每一页几个
		var pageSize = 3;
		// 第几页
		var pageNo = 1;
		var isPending=false;
		function BottomJumpPage() {
			var scrollTop = $(window).scrollTop();
			var scrollHeight = $(document).height();
			var windowHeight = $(window).height();

			
			if (scrollTop + windowHeight >= scrollHeight-1&&!isPending) {  //滚动到底部执行事件
				isPending=true;
				$.ajax({
					url: "/management/querySectionArticlesByTab",
					type: 'post',
					data: {
						sectionTab: 'front-end',
						pageNo: pageNo,
						pageSize: pageSize
					},
					success: function (res) {
						isPending=false;
						var thisTpls = [];
						if (res.code) {
							pageNo++;
							var articles = res.data.data;
							var articlesTpl = [];
							$.each(articles, function (i, item) {
								var thisTpl = MasonryBlockTpl.replace(/\{\{(\w+?)\}\}/g, function (a, varible) {
									return item[varible];
								});
								var $thisTpl = $(thisTpl);
								articlesTpl.push($thisTpl);
							});
							setMasonry.setNextBlocks(articlesTpl);
							console.log("成功")
						} else {
							console.log(res.msg);
						}
					},
					error: function (err) {
						isPending=false;
						console.log(err);
					}
				})

			}
			if (scrollTop == 0) {  //滚动到头部部执行事件
				// console.dir("我到头部了");

			}
			console.log(pageNo, pageSize);
		}

		var pageSize = 2;
		// 第几页
		var pageNo = 2;
		//每一页几个
		$(window).scroll(function () {
			BottomJumpPage();

		})




	}
});