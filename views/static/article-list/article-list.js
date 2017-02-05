window.jQuery = window.$ = require('../libs/js/jquery');
var getPageData = require('../libs/js/util').getPageData;

$(function () {

	var sectionTab = getPageData("sectionTab");
	var totalCount = getPageData("totalCount");
	var baseSize = getPageData("baseSize");
	var loadCount = baseSize;
	var setMasonry = {
		heights: [],
		masonryBlockWidth: parseInt($(".masonry-block").outerWidth(true)),
		masonryWidth: parseInt($(".masonry").css("width")),
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
		setOneBlock: function ($masonryBlock) {
			$(".masonry").append($masonryBlock);

			$masonryBlock.css({
				"top": parseInt(this.getMinHeight(this.heights).val) + "px"
			});
			//最小的行数
			var n = this.getMinHeight(this.heights).num;
			$masonryBlock.css({ "left": this.masonryBlockWidth * n + "px" });
			this.heights[n] += $masonryBlock.outerHeight(true);
			console.log("=====" + this.heights);
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
			var self = this;
			var blocksNum = $(".masonry-block").length;
			var masonryWidth = parseInt($(".masonry").css("width"));
			var masonryBlockWidth = this.masonryBlockWidth;
			var lines = parseInt(masonryWidth / masonryBlockWidth);
			// console.log("blocksNum:"+blocksNum);
			// console.log("heights:"+this.heights);
			for (var i = 0; i < NextBlocks.length; i++) {

				(function (index) {
					NextBlocks[index].find('.article-header').load(function () {
						self.setOneBlock(NextBlocks[index]);
						$(".masonry").css({ "height": self.getMaxHeight(self.heights) + "px", "width": self.masonryBlockWidth * lines + "px" });
					})
				})(i)

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
	var isPending = false;
	function BottomJumpPage() {
		var scrollTop = $(window).scrollTop();
		var scrollHeight = $(document).height();
		var windowHeight = $(window).height();
		// pageNo*pageSize+baseSize<

		if (scrollTop + windowHeight >= scrollHeight - 1 && !isPending) {  //滚动到底部执行事件
			if (loadCount < totalCount) {
				isPending = true;
				$.ajax({
					url: "/management/querySectionArticlesByTab",
					type: 'post',
					data: {
						sectionTab: sectionTab,
						pageNo: pageNo,
						pageSize: pageSize
					},
					success: function (res) {
						isPending = false;
						var thisTpls = [];
						if (res.code) {
							pageNo++;
							var articles = res.data.data;
							loadCount += articles.length;
							var articlesTpl = [];
							$.each(articles, function (i, item) {
								var thisTpl = MasonryBlockTpl.replace(/\{\{(\w+?)\}\}/g, function (a, varible) {
									return item[varible];
								});
								var $thisTpl = $(thisTpl);
								articlesTpl.push($thisTpl);
							});
							setMasonry.setNextBlocks(articlesTpl);
						} else {
							console.log(res.msg);
						}

					},
					error: function (err) {
						isPending = false;
						console.log(err);
					}
				})
			}


		}
		if (scrollTop == 0) {  //滚动到头部部执行事件
			// console.dir("我到头部了");

		}
		console.log(pageNo, pageSize);
	}
	$(window).scroll(function () {
		BottomJumpPage();

	})




});