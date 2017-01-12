window.jQuery = window.$ = require('../../../static/libs/js/jquery');
//以下为header随机切换word
	var myWord = ['时间向前走一定只有路口没有尽头', '如果你过的不幸福，我所做的一切才是徒劳', '和这世界交手的这许多年，你是否光彩依旧，兴致盎然'];
	var loopWord = myWord.slice(0);

	function getWord() {
		if(loopWord.length==0){
			loopWord=myWord.slice(0);
		}
		var num =parseInt(Math.random()*loopWord.length);
		var word = loopWord.splice(num,1);
		return word;
	}
	function changeWord(){
		setTimeout(function() {
			 changeWord();
		}, 6070);
		$(".word").text(getWord());
		$(".word").animate({opacity:"0"},1000);
		$(".word").animate({opacity:"1"},4000);
		$(".word").animate({opacity:'0'},1000);
		//$(".logo p").text(getWord());
	}
	 changeWord();